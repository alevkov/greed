import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from 'recharts';
import { SubstanceData } from '../types';

interface DosageChartProps {
  data: SubstanceData;
}
export const formatDose = (dose: number): string => {
  if (dose < 1) {
    return dose.toFixed(2); // Two decimal places for doses < 1
  } else if (dose < 10) {
    return dose.toFixed(1); // One decimal place for doses < 10
  } else {
    return dose.toFixed(0); // No decimal places for doses >= 10
  }
};
const DosageChart: React.FC<DosageChartProps> = ({ data }) => {
  const tiers = ['Threshold', 'Light', 'Common', 'Strong', 'Heavy'];
  const chartData = tiers.map((tier) => ({
    tier,
    value: (data.tiers[tier]['Lower'] + data.tiers[tier]['Upper']) /2,
    ciLower: data.tiers[tier]['Lower'],
    ciUpper: data.tiers[tier]['Upper'],
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mr-8">
        <h3 className="font-bold mb-4 text-lg">Dosage Ranges</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Tier</th>
              <th className="border border-gray-300 px-4 py-2">Dose Range ({data.unit})</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => {
              // Define custom range display for "Heavy" and "Threshold"
              let doseRange;
              if (tier === 'Heavy') {
                doseRange = `${formatDose(Number.parseFloat(data.tiers[tier]['CI Upper']))} (max. recommended)`;
              } else if (tier === 'Threshold') {
                doseRange = `< ${formatDose(Number.parseFloat(data.tiers[tier]['Lower']))}`;
              } else {
                doseRange = `${formatDose(Number.parseFloat(data.tiers[tier]['Lower']))} - ${formatDose(Number.parseFloat(data.tiers[tier]['Upper']))}`;
              }

              // Conditionally apply red background color to the "Heavy" row
              const rowClass = tier === 'Heavy' ? 'bg-red-100' : '';

              return (
                <tr key={`tier-row-${index}`} className={rowClass}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{tier}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{doseRange}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ResponsiveContainer width="100%" height={800}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="tier" tick={{ fontSize: 14 }} />
          <PolarRadiusAxis angle={30} domain={[0, Math.max(...chartData.map(d => d.ciUpper)) * 1.1]} tick={{ fontSize: 12 }} />
          <Radar name="Dosage Value" dataKey="value" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
          <Radar name="CI Lower" dataKey="ciLower" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.1} />
          <Radar name="CI Upper" dataKey="ciUpper" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
          <Legend />
          <Tooltip formatter={(value: number, name: string) => [`${value} ${data.unit}`, name]} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        Reliability Score: {(data.reliability_score * 100).toFixed(2)}%
      </div>
      <div className="mt-6 text-sm text-gray-800">
  <h3 className="font-bold mb-2">
    Dosage Tier and Confidence Interval Calculation Method
  </h3>
  <p>
    The table above is derived from doses manually entered and included with (nearly) every report on erowid.org (N=62018). (To access the data, please check out: <a href='http://erowid.io'>erowid.io</a>.) Each dose level/tier (Low, Common, ...) is anchored on a specific pair of percentiles. Confidence intervals (CIs) for these percentiles are calculated to account for variability and uncertainty in the estimates, visualized on the radar chart.
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
</div>
  );
};

export default DosageChart;
