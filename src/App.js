// App.js
import React, { useState } from 'react';
import SideBar from './components/SideBar';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

const App = () => {
  const [selectedChart, setSelectedChart] = useState('line');

  const renderChart = () => {
    switch (selectedChart) {
      case 'line':
        return <LineChart />;
      case 'bar':
        return <BarChart />;
      // Add more cases for other charts
      default:
        return <LineChart />;
    }
  };

  return (
    <div className="app-container">
      <SideBar setSelectedChart={setSelectedChart} />
      <div className="chart-container">
        {renderChart()}
      </div>
    </div>
  );
};

export default App;
