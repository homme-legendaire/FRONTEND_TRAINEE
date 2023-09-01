import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
} from "recharts";
import { useRecoilValue } from "recoil";
import { keyWordState } from "./atom";

const Chart = ({ select }) => {
  const chartData = useRecoilValue(keyWordState);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
        <Tooltip />
        <Legend />
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
        <Line type="monotone" dataKey={select} stroke="url(#lineColor)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
