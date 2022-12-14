import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const datas = useLoaderData();
  const { data } = datas;

  return (
    <div className="w-75">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width="900"
          height={420}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="name"
            stroke="black"
            fillOpacity={0.5}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="black"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
