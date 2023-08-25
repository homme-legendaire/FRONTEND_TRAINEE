import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { List, ListItem, ListItemText } from "@mui/material";

const AssetPieChart = ({ data, colors }) => {
  const customLegend = (props) => {
    const { payload } = props;
    return (
      <List
        sx={{
          ".MuiTypography-root": {
            fontSize: "14px",
          },
        }}
      >
        {payload.map(
          (entry, index) => (
            console.log(index, entry),
            (
              <ListItem key={index}>
                <svg width="12" height="12">
                  <rect width="12" height="12" fill={entry.color} />
                </svg>
                <ListItemText primary={entry.value} />
                <ListItemText primary={entry.payload.amount} />
                <ListItemText primary={entry.payload.value} />
                <ListItemText primary={entry.payload.percent * 100} />
              </ListItem>
            )
          )
        )}
      </List>
    );
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
        <Tooltip />
        {/* <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          content={customLegend}
        /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AssetPieChart;
