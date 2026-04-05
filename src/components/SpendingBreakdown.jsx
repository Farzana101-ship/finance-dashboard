import React from "react";
import { PieChart, Pie, Tooltip, Sector } from "recharts";

const SpendingBreakdown = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#08723672", "#9e079e"];

  // Custom sector renderer
  const CustomSector = (props) => {
    const { index, ...rest } = props;
    return <Sector {...rest} fill={COLORS[index % COLORS.length]} />;
  };

  return (
    <PieChart width={400} height={350}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={100}
        shape={CustomSector}   
      />
      <Tooltip />
    </PieChart>
  );
};

export default SpendingBreakdown;