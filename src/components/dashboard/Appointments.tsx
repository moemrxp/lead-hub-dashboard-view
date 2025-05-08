import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
type Appointment = {
  id: string;
  title: string;
  date: string;
  time: string;
};
type AppointmentsProps = {
  appointments: Appointment[];
};
export const Appointments = ({
  appointments
}: AppointmentsProps) => {
  return <Card className="border border-gray-200 shadow-sm">
      
      
    </Card>;
};