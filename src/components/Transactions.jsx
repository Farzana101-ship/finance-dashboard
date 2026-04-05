// Transactions.jsx
import React, { useState } from 'react';

const Transactions = ({ data }) => {
  const [search, setSearch] = useState('');

  const filtered = data.filter(
    (t) =>
      t.date.includes(search) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border="1" style={{ width: '100%', marginTop: '10px', backgroundColor: 'white', color: 'black'}}>
        <thead>
          <tr>
            <th style={{ backgroundColor: 'rgb(246, 121, 4)', color: 'black' }}>Date</th>
            <th style={{ backgroundColor: 'rgb(246, 121, 4)', color: 'black' }}>Amount</th>
            <th style={{ backgroundColor: 'rgb(246, 121, 4)', color: 'black' }}>Category</th>
            <th style={{ backgroundColor: 'rgb(246, 121, 4)', color: 'black' }}>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t, i) => (
            <tr key={i}>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;