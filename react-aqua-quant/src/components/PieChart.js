import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import theme from "../themes";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = [
  "#4D71FF",
  "#A6C9FF",
  "#C6B2FF",
  "#D2D2D2",
  "#90CAFF",
  "#92AAFF",
  "#83E1F1",
  "#CCCDE4",
  "#8BB7F8",
  "#69DDED",
];

const AssetPieChart = ({ width }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AssetPieChart;
