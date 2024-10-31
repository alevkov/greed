import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const formatDose = (dose) => {
  return dose.toFixed(1);
};

export default function DosageChart({ data }) {
  const [showCI, setShowCI] = useState(true);

  const tiers = ['Threshold', 'Light', 'Common', 'Strong', 'Heavy'];
  const minDose = 0;
  const maxDose = Math.max(...Object.values(data.tiers).map(t => t.Upper));
  const range = maxDose;

  // Generate evenly spaced tick marks
  const tickCount = 8;
  const tickStep = range / (tickCount - 1);
  const axisTicks = Array.from(
    { length: tickCount },
    (_, i) => minDose + (i * tickStep)
  );

  const colors = {
    Threshold: '#94a3b8',
    Light: '#22c55e',
    Common: '#3b82f6',
    Strong: '#f97316',
    Heavy: '#ef4444'
  };

  const getPosition = (value) => (value / range) * 100;

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-end mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showCI}
            onChange={(e) => setShowCI(e.target.checked)}
          />
          Show Confidence Intervals
        </label>
      </div>

      <div className="mb-16">
        {/* Tier labels */}
        <div className="relative h-6">
          {tiers.map((tier) => {
            const { Lower, Upper } = data.tiers[tier];
            const width = getPosition(Upper) - getPosition(Lower);
            const left = getPosition(Lower);
            
            return (
              <div
                key={`label-${tier}`}
                className="absolute text-sm"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  textAlign: 'center'
                }}
              >
                {tier}
              </div>
            );
          })}
        </div>

        {/* Main chart area with confidence intervals */}
        <div className="relative h-12 mt-2">
          {/* Confidence interval backgrounds */}
          {showCI && tiers.map((tier) => {
            const { 'CI Lower': ciLower, 'CI Upper': ciUpper } = data.tiers[tier];
            if (!isNaN(ciLower) && !isNaN(ciUpper)) {
              const left = getPosition(ciLower);
              const width = getPosition(ciUpper) - left;
              
              return (
                <div
                  key={`ci-${tier}`}
                  className="absolute h-full"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    backgroundColor: colors[tier],
                    opacity: 0.15,
                    borderRadius: '4px'
                  }}
                />
              );
            }
            return null;
          })}

          {/* Main dose bars */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-4">
            {tiers.map((tier) => {
              const { Lower, Upper } = data.tiers[tier];
              const width = getPosition(Upper) - getPosition(Lower);
              const left = getPosition(Lower);
              
              return (
                <div
                  key={tier}
                  className="absolute h-full"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    backgroundColor: colors[tier],
                    borderRadius: '4px',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Range labels */}
        <div className="relative h-6">
          {tiers.map((tier) => {
            const { Lower, Upper } = data.tiers[tier];
            const width = getPosition(Upper) - getPosition(Lower);
            const left = getPosition(Lower);
            
            return (
              <div
                key={`range-${tier}`}
                className="absolute text-sm font-mono"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  textAlign: 'center'
                }}
              >
                {formatDose(Lower)} - {formatDose(Upper)}{data.unit}
              </div>
            );
          })}
        </div>

      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-start">
        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
        <div className="text-red-700">
          Heavy doses carry significant risks. The upper range represents the maximum reported doses, not recommendations.
        </div>
      </div>

      <h3 className="font-bold mb-2">
    Dosage Tier and Confidence Interval Calculation Method
  </h3>
  <p>
    The bar chart above is derived from doses manually entered and included with (nearly) every report on erowid.org (N=62018). (To access the data, please check out: <a href='http://erowid.io'>erowid.io</a>.) Each dose level/tier (Low, Common, ...) is anchored on a specific pair of percentiles. Confidence intervals (CIs) for these percentiles are calculated to account for variability and uncertainty in the estimates, visualized on the radar chart.
  </p>
  <div className="mt-4 overflow-x-auto">
    <p>Method breakdown:</p>
    <ol className="list-decimal list-inside">
      <li>
        Sort the dosage data in ascending order to obtain an ordered dataset {`\\( X_{(1)}, X_{(2)}, \\dots, X_{(n)} \\)`}.
      </li>
      <li>
        Define target percentiles: {`\\( P = \\{5\\%, 25\\%, 50\\%, 75\\%, 95\\%\\} \\)`}.
      </li>
      <li>
        Calculate the percentile values:
        <br />
        <br />
        {`\\( \\theta_p = X_{(k)} \\), where \\( k = \\lceil n \\times p \\rceil \\)`}.
        <br />
        <br />
      </li>
      <li>
        Determine confidence intervals for each percentile:
        <br />
        <br />
        - If sample size {`\\( n < 75 \\)`}, use bootstrapping:
        <br />
        &nbsp;&nbsp;Resample the data and compute percentiles to estimate CIs.
        <br />
        - If sample size {`\\( n \\geq 75 \\)`}, use the beta distribution method:
        <br />
        &nbsp;&nbsp;Compute CIs analytically based on order statistics.
        <br />
        <br />
      </li>
      <li>
        Derive [Threshold, Low, Commmon...] using the percentile values and the minimum and maximum dosages:
        <br />
        <br />
        - **Threshold**: {`\\( [X_{\\text{min}}, \\theta_{5\\%}] \\)`}.
        <br />
        - **Light**: {`\\( (\\theta_{5\\%}, \\theta_{25\\%}] \\)`}.
        <br />
        - **Common**: {`\\( (\\theta_{25\\%}, \\theta_{75\\%}] \\)`}.
        <br />
        - **Strong**: {`\\( (\\theta_{75\\%}, \\theta_{95\\%}] \\)`}.
        <br />
        - **Heavy**: {`\\( (\\theta_{95\\%}, X_{\\text{max}}] \\)`}.
        <br />
        <br />
      </li>
    </ol>
  </div>
  <p className="mt-4">
  This is a novel data-driven approach to nonmedical dosing suggestions for recreational drugs; any and all feedback is welcome. Feel free to open a pull request if you'd like to contribute/suggest fixes.
  </p>
    </div>
  );
}