
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Appointment = {
  id: string;
  title: string;
  date: string;
  time: string;
}

type AppointmentsProps = {
  appointments: Appointment[];
}

export const Appointments = ({ appointments }: AppointmentsProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        {appointments.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            No appointments upcoming.
          </div>
        ) : (
          <div className="space-y-3">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="border-l-4 border-mrxp-blue pl-3 py-1"
              >
                <h4 className="font-medium">{appointment.title}</h4>
                <div className="text-sm text-gray-600">
                  {appointment.date} • {appointment.time}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
