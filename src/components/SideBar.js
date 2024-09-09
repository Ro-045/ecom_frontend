// Sidebar.js
import React from 'react';


const SideBar = ({ setSelectedChart }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setSelectedChart('line')}>Line Chart</li>
        <li onClick={() => setSelectedChart('bar')}>Bar Chart</li>
        {/* Add more chart types as needed */}
      </ul>
    </div>
  );
};

export default SideBar;
