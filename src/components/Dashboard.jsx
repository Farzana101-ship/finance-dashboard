import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import RoleDropdown from "./RoleDropdown";
import Transactions from "./Transactions";
import Insights from "./Insights";
import BalanceTrend from "./BalanceTrend";
import SpendingBreakdown from "./SpendingBreakdown";

const Dashboard = () => {
  const [role, setRole] = useState("Viewer");

  const transactions = [
    { date: "2026-04-02", amount: 2500, category: "Food", type: "Expense" },
    { date: "2026-04-03", amount: 8000, category: "Rent", type: "Expense" },
    { date: "2026-04-01", amount: 20000, category: "Salary", type: "Income" },
    { date: "2026-04-02", amount: 2000, category: "Utility", type: "Expense" },
    { date: "2026-03-28", amount: 3500, category: "Food", type: "Expense" },
    { date: "2026-03-01", amount: 1200, category: "Utility", type: "Expense" },
    { date: "2026-03-01", amount: 20000, category: "Salary", type: "Income" },
    { date: "2026-03-04", amount: 8000, category: "Rent", type: "Expense" },
  ];

  
  const trendData = transactions.map((t) => {
    return {
      date: t.date,
      income: t.type === "Income" ? t.amount : 0,
      expenses: t.type === "Expense" ? t.amount : 0,
      balance: t.type === "Income" ? t.amount : -t.amount
    };
  });

  const summary = {
    balance: 7500,
    income: 20000,
    expenses: 12500,
  };

  return (
    <div style={{ padding: "20px" }}>
      <RoleDropdown onChange={setRole} />

     
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <SummaryCard title="Total Balance" value={`${summary.balance}`} />
        <SummaryCard title="Income" value={`${summary.income}`} />
        <SummaryCard title="Expenses" value={`${summary.expenses}`} />
      </div>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <BalanceTrend data={trendData} />
        <SpendingBreakdown
          data={transactions.map((t) => ({ category: t.category, value: t.amount }))}
        />
      </div>

      <Transactions data={transactions} />
      
      {role === "Admin" && <button>Add Transaction</button>}

      <Insights data={transactions} />
    </div>
  );
};

export default Dashboard;