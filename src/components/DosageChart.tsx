import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData, SubstanceData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DosageChartProps {
  data: SubstanceData;
}

const DosageChart: React.FC<DosageChartProps> = ({ data }) => {
  const chartData: ChartData = {
    labels: Object.keys(data.tiers),
    datasets: [
      {
        label: 'Dosage',
        data: Object.values(data.tiers).map((tier) => tier.value),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'CI Lower',
        data: Object.values(data.tiers).map((tier) => tier['CI Lower']),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'CI Upper',
        data: Object.values(data.tiers).map((tier) => tier['CI Upper']),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${data.substance} - ${data.method} (${data.unit})`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: data.unit,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={chartData} options={options} />
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
