import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BalanceTrend = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="balance" stroke="#450a7d" />
    <Line type="monotone" dataKey="income" stroke="#0f7838" />
    <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
  </LineChart>
);

export default BalanceTrend;