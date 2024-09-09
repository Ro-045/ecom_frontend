import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Customers Created Per Month',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    fetch('http://localhost:8080/customers/chart-data')
      .then(response => response.json())
      .then(data => {
        if (data.labels && data.values) {
          setChartData({
            labels: data.labels,
            datasets: [
              {
                label: 'Customers Created Per Month',
                data: data.values,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
              },
            ],
          });
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Customers Created Per Month',
      },
    },
  };

  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
