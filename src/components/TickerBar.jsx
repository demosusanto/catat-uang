import React from 'react';
import './TickerBar.css';

const TickerBar = () => {
  const stats = [
    { label: 'Active Users', value: '1.2M+', change: '+12.5%', isUp: true },
    { label: 'Avg. Savings', value: 'Rp 2.5M', change: '+5.2%', isUp: true },
    { label: 'App Rating', value: '4.8/5.0', change: '+0.1', isUp: true },
    { label: 'Monthly Expenses', value: 'Down', change: '-15%', isUp: true }, // positive for users
    { label: 'Total Transactions', value: '50M+', change: '+22%', isUp: true },
  ];

  return (
    <div className="ticker-bar">
      <div className="ticker-container">
        {stats.map((stat, index) => (
          <div key={index} className="ticker-item">
            <span className="ticker-label">{stat.label}</span>
            <span className="ticker-value">{stat.value}</span>
            <span className={`ticker-change ${stat.isUp ? 'text-positive' : 'text-negative'}`}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
