// src/components/PieChartView.js
import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const PieChartView = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.category,
    value: item.activityCount,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartView;
