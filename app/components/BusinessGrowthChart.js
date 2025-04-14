import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const BusinessGrowthChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('growthChart').getContext('2d');

    const growthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
        datasets: [
          {
            label: 'Organic Growth',
            data: [100, 110, 125, 140, 155, 170],
            backgroundColor: 'rgba(148, 163, 184, 0.2)',
            borderColor: '#94a3b8',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#94a3b8',
            pointBorderColor: '#fff',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Growth with Ads',
            data: [100, 130, 170, 220, 280, 350],
            backgroundColor: 'rgba(102, 231, 183, 0.2)',
            borderColor: '#6ee7b7',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#6ee7b7',
            pointBorderColor: '#fff',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Leads Generated',
            data: [20, 35, 50, 65, 80, 100],
            backgroundColor: 'rgba(252, 211, 77, 0.2)',
            borderColor: '#fcd34d',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#fcd34d',
            pointBorderColor: '#fff',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#e2e8f0',
              usePointStyle: true,
              font: {
                family: 'Inter, sans-serif',
                size: 14,
              },
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#2d3748',
            titleColor: '#fff',
            bodyColor: '#fff',
            footerColor: '#fff',
            cornerRadius: 6,
            callbacks: {
              labelColor: (ctx) => ({
                borderColor: ctx.dataset.borderColor,
                backgroundColor: ctx.dataset.borderColor,
              }),
              label: (ctx) => {
                const label = ctx.dataset.label || '';
                const val = ctx.parsed.y;
                if (label === 'Leads Generated') return `${label}: ${val}`;
                return `${label}: ${new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(val)}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#e2e8f0', font: { size: 14 } },
            grid: { color: '#334155' },
          },
          y: {
            ticks: { color: '#e2e8f0', font: { size: 14 } },
            grid: { color: '#334155' },
          },
        },
      },
    });

    return () => {
      growthChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen p-4 font-inter" style={{ backgroundColor: '#161E42' }}>
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-white text-center mb-8">Visualize Business Growth</h1>

        <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-md" style={{ backgroundColor: '#1f295c' }}>
          <canvas id="growthChart" height="400"></canvas>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="border border-blue-700 p-6 rounded-xl text-center max-w-sm shadow-md hover:-translate-y-2 transition-all" style={{ backgroundColor: '#1f295c' }}>
            <h3 className="text-xl font-semibold text-white mb-2">Google Ads</h3>
            <p className="text-slate-200">
              Use Google Ads to capture users actively searching for your products or services.
              <span className="text-green-400 font-medium"> Generate high-intent leads</span> and drive them to your website.
            </p>
          </div>

          <div className="border border-blue-700 p-6 rounded-xl text-center max-w-sm shadow-md hover:-translate-y-2 transition-all" style={{ backgroundColor: '#1f295c' }}>
            <h3 className="text-xl font-semibold text-white mb-2">Meta Ads</h3>
            <p className="text-slate-200">
              Leverage Meta Ads to target users based on their interests, demographics, and behaviors.
              <span className="text-green-400 font-medium"> Build brand awareness</span> and generate leads by engaging potential customers on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowthChart;
