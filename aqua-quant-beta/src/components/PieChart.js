import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
const Chart = () => {
  const data = [
    { name: "A", value: 200 },
    { name: "B", value: 300 },
    { name: "C", value: 100 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default Chart;
