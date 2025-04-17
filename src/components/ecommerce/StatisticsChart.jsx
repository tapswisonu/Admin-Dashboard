import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
//   defs,
//   linearGradient,
//   stop,
} from "recharts";

import ChartTab from "../common/ChartTab";

const chartData = [
  { name: "Jan", Sales: 180, Revenue: 40 },
  { name: "Feb", Sales: 190, Revenue: 30 },
  { name: "Mar", Sales: 170, Revenue: 50 },
  { name: "Apr", Sales: 160, Revenue: 40 },
  { name: "May", Sales: 175, Revenue: 55 },
  { name: "Jun", Sales: 165, Revenue: 40 },
  { name: "Jul", Sales: 170, Revenue: 70 },
  { name: "Aug", Sales: 205, Revenue: 100 },
  { name: "Sep", Sales: 230, Revenue: 110 },
  { name: "Oct", Sales: 210, Revenue: 120 },
  { name: "Nov", Sales: 240, Revenue: 150 },
  { name: "Dec", Sales: 235, Revenue: 140 },
];

const StatisticsChart=()=> {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
         <ChartTab/>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <ResponsiveContainer width="100%" height={310}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              {/* Gradient for Sales line */}
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#465FFF" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#465FFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9CB9FF" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#9CB9FF" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
              <Tooltip />
              <Legend verticalAlign="top" align="left" />

              <Line
                type="linear"
                dataKey="Sales"
                stroke="#465FFF"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="linear"
                dataKey="Revenue"
                stroke="#9CB9FF"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
export default StatisticsChart;
