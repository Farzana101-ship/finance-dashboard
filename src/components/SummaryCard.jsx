import React from 'react';

const SummaryCard = ({ title, value }) => (
  <div style={{ border: '1px solid black', backgroundColor: '#0598648a',color: 'white', padding: '20px', borderRadius: '8px', flex: 1 }}>
    <h3>{title}</h3>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
  </div>
);

export default SummaryCard;
