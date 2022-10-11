import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
const Statistics = () => {
  const datas = useLoaderData();
  const { data } = datas;
  console.log(data);
  return (
    <div className="text-center">
      <AreaChart
        width={930}
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
        <XAxis dataKey="" />
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
    </div>
  );
};

export default Statistics;
