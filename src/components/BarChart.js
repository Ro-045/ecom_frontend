import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Initialize with empty arrays to avoid undefined issues
    datasets: [
      {
        label: 'My Bar Chart',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    fetch('http://localhost:8080/customers/chart-data')
      .then(response => response.json())
      .then(data => {
        // Ensure the data is in the expected format
        const labels = data.labels || [];
        const values = data.values || [];
        
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'My Bar Chart',
              data: values,
              backgroundColor: 'rgba(75,192,192,0.5)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
            },
          ],
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Optionally handle error state here
      });
  }, []);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
