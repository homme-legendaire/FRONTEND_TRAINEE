import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
// import { useState } from 'react';

const ProfitAreaChart = ({ data, xTicks, yTicks, width }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '4px',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          <p>Daily Pnl +{dataPoint.profit} USDT</p>
          <p>Total PnL +71.85 USDT</p>
        </div>
      );
    }

    return null;
  };
  return (
    <AreaChart width={width} height={250} data={data}>
      <XAxis dataKey="name" ticks={xTicks} />
      <YAxis ticks={yTicks} />
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <defs>
        <linearGradient id="lineColor" x1="271.5" y1="0.950001" x2="271.5" y2="190" gradientUnits="userSpaceOnUse">
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
        dot={{ r: 4, fill: 'white' }}
        strokeWidth={1.75}
        stroke="url(#lineColor)"
      />
    </AreaChart>
  );
};

export default ProfitAreaChart;
