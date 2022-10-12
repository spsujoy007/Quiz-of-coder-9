import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData().data;
  console.log(quizData);
  return (
    <div className="mt-10">
      <LineChart height={300} width={300} data={quizData}>
        <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Statistics;
