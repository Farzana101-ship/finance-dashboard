import React from 'react';


const Insights = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const expenseData = data.filter((t) => t.type === "Expense");
  
  if (expenseData.length === 0) {
    return <p>No expenses recorded</p>;
  }

  const categoryTotals = expenseData.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});
 
  const entries = Object.entries(categoryTotals);
  const topCategory = entries.sort((a, b) => b[1] - a[1])[0];

  return (
    <div style={{ marginTop: "20px" ,color: 'white'}}>
      <h3>Insights</h3>
      {topCategory ? (
        <p>
          Highest Spending Category: {topCategory[0]} ({topCategory[1]})
        </p>
      ) : (
        <p>No spending data</p>
      )}
    </div>
  );
};

export default Insights;
