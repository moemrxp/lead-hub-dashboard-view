
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

type PerformanceOverviewProps = {
  loading?: boolean;
}

const mockData = [
  { name: 'Jan', leads: 40, messages: 24 },
  { name: 'Feb', leads: 30, messages: 13 },
  { name: 'Mar', leads: 45, messages: 22 },
  { name: 'Apr', leads: 50, messages: 34 },
  { name: 'May', leads: 65, messages: 40 },
  { name: 'Jun', leads: 55, messages: 30 },
];

export const PerformanceOverview = ({ loading = false }: PerformanceOverviewProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="w-full h-[150px] flex items-center justify-center">
            <div className="text-sm text-gray-500">Loading performance metrics...</div>
          </div>
        ) : (
          <div className="h-[150px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={value => `${value}`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="#1E88E5"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="messages"
                  stroke="#78909C"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
