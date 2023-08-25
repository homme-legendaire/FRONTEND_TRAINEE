import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import theme from "../themes";

const AssetPieChart = ({ data, colors }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            padding: "8px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div>{dataPoint.name}</div>
          <div>
            <span
              style={{
                marginLeft: "15px",
                color: theme.palette.custom.wellDone,
              }}
            >
              {dataPoint.value.toFixed(2)}
            </span>
            USDT
            <span
              style={{
                color: theme.palette.custom.wellDone,
              }}
            >
              (
              {(
                (dataPoint.value / data.reduce((a, b) => a + b.value, 0)) *
                100
              ).toFixed(2)}
              %)
            </span>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={230}>
      <PieChart height={230}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          startAngle={-270}
          endAngle={90}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AssetPieChart;
