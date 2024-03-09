import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stackedChartData } from "../../data/dummy";
import { StateContext } from "../../contexts/ContextProvider";
const Stacked = () => {
  const { currentColor } = useContext(StateContext);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={stackedChartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill={currentColor} />
        <Bar dataKey="uv" stackId="a" fill="black" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Stacked.demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

export default Stacked;
