import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import theme from "../themes";

const Chart = ({ data, xTicks, yTicks }) => {
  const [totalProfit, setTotalProfit] = useState(71.85);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "8px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Daily Pnl</div>
            <div>
              <span
                style={{
                  color:
                    dataPoint.profit > 0
                      ? theme.palette.custom.main
                      : theme.palette.custom.red,
                  marginLeft: "15px",
                }}
              >
                {dataPoint.profit > 0 ? "+" : "-"}
                {dataPoint.profit}
              </span>
              USDT
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Total Pnl</div>
            <div>
              <span
                style={{
                  color:
                    totalProfit > 0
                      ? theme.palette.custom.main
                      : theme.palette.custom.red,
                  marginLeft: "15px",
                }}
              >
                {totalProfit > 0 ? "+" : "-"}
                {totalProfit}
              </span>
              USDT
            </div>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="name" ticks={xTicks} />
        <YAxis ticks={yTicks} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <defs>
          <linearGradient
            id="lineColor"
            x1="271.5"
            y1="0.950001"
            x2="271.5"
            y2="190"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7B5AFF" />
            <stop offset="1" stopColor="#4073F2" />
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="profit"
          fill="url(#lineColor)"
          fillOpacity={0.2}
          dot={{ r: 4, fill: "white" }}
          strokeWidth={1.75}
          stroke="url(#lineColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
