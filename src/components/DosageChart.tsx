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
                doseRange = `${formatDose(Number.parseFloat(data.tiers[tier]['Lower']))} (max. recommended)`;
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
          Confidence Interval Calculation Method
        </h3>
        <p>
          The confidence intervals (CIs) for the dosage tiers are calculated
          using an analytical method based on the properties of order statistics
          and the beta distribution. This method provides precise CIs without
          resampling, making it computationally efficient.
        </p>
        <div className="mt-4 overflow-x-auto">
          <p>Key steps in the calculation:</p>
          <ol className="list-decimal list-inside">
            <li>
              Determine the order statistic index:{' '}
              {`\\( k = \\lceil n \\times p \\rceil \\)`}
            </li>
            <li>
              Calculate beta distribution parameters: {`\\( \\alpha = k \\)`}{' '}
              and {`\\( \\beta = n - k + 1 \\)`}
            </li>
            <li>
              Compute confidence bounds:
              <br />
              <br />
              {`\\( p_{\\text{lower}} = \\text{BetaInv}\\left( \\frac{\\alpha}{2}; k, n - k + 1 \\right ) \\)`}
              <br />
              {`\\( p_{\\text{upper}} = \\text{BetaInv}\\left( 1 - \\frac{\\alpha}{2}; k, n - k + 1 \\right ) \\)`}
              <br />
              <br />
            </li>
            <li>
              Convert to data indices:
              <br />
              <br />
              {`\\( i_{\\text{lower}} = \\left\\lfloor n \\times p_{\\text{lower}} \\right\\rfloor \\)`}
              <br />
              {`\\( i_{\\text{upper}} = \\left\\lceil n \\times p_{\\text{upper}} \\right\\rceil - 1 \\)`}
              <br />
              <br />
            </li>
            <li>
              Determine CI values:
              <br />
              <br />
              {`\\( \\theta_{p, \\text{lower}} = X_{(\\max(1, i_{\\text{lower}}))} \\)`}
              <br />
              {`\\( \\theta_{p, \\text{upper}} = X_{(\\min(n, i_{\\text{upper}}))} \\)`}
              <br />
              <br />
            </li>
          </ol>
        </div>
        <p className="mt-4">
          This method assumes the data is independent and identically
          distributed (i.i.d.) and comes from a continuous distribution. It
          provides accurate intervals for sufficiently large sample sizes but
          may be less robust for small samples or data with outliers.
        </p>
      </div>
    </div>
  );
};

export default DosageChart;
