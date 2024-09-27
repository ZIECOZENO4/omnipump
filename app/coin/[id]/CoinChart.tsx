"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  date: string;
  buyPrice: number;
  sellPrice: number;
}

const data: DataPoint[] = [
  { date: '2024-09-20', buyPrice: 55000, sellPrice: 75200 },
  { date: '2024-09-21', buyPrice: 65200, sellPrice: 25500 },
  { date: '2024-09-22', buyPrice: 35100, sellPrice: 85300 },
  { date: '2024-09-23', buyPrice: 25400, sellPrice: 55600 },
  { date: '2024-09-24', buyPrice: 75300, sellPrice: 45400 },
  { date: '2024-09-25', buyPrice: 95500, sellPrice: 25700 },
  { date: '2024-09-26', buyPrice: 15600, sellPrice: 35800 },
];

interface CustomizedDotProps {
  cx: number;
  cy: number;
  value: number;
}

const CustomizedDot: React.FC<CustomizedDotProps> = ({ cx, cy, value }) => {
  const fill = value > 45500 ? "green" : "red";
  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} fill={fill} viewBox="0 0 1024 1024">
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
};

const CoinBuySellChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="buyPrice" 
            stroke="#8884d8" 
            dot={<CustomizedDot cx={0} cy={0} value={0} />} 
            name="Buy Price" 
          />
          <Line 
            type="monotone" 
            dataKey="sellPrice" 
            stroke="#82ca9d" 
            dot={<CustomizedDot cx={0} cy={0} value={0} />} 
            name="Sell Price" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinBuySellChart;