const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revenueData = [12000, 15000, 14000, 17000, 16000, 19000];
const expensesData = [8000, 7000, 9000, 10000, 9500, 11000];
const profitData = labels.map((_, i) => revenueData[i] - expensesData[i]);

const ctx = document.getElementById('revenueChart');
const revenueChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      },
      {
        label: 'Expenses',
        data: expensesData,
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Monthly Revenue vs Expenses' } }
  }
});

const profitCtx = document.getElementById('profitChart');
const profitChart = new Chart(profitCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Profit',
        data: profitData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Monthly Profit' } }
  }
});

document.getElementById('monthRange').addEventListener('input', (e) => {
  const count = parseInt(e.target.value, 10);
  revenueChart.data.labels = labels.slice(0, count);
  revenueChart.data.datasets[0].data = revenueData.slice(0, count);
  revenueChart.data.datasets[1].data = expensesData.slice(0, count);
  revenueChart.update();

  profitChart.data.labels = labels.slice(0, count);
  profitChart.data.datasets[0].data = profitData.slice(0, count);
  profitChart.update();
});
