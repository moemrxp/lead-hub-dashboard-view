
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { WelcomeCard } from '@/components/dashboard/WelcomeCard';
import { LeadsList } from '@/components/dashboard/LeadsList';
import { MessagesList } from '@/components/dashboard/MessagesList';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { Appointments } from '@/components/dashboard/Appointments';

// Sample data
const mockLeads = [
  {
    id: '1',
    name: 'Mohamad',
    service: 'Plumbing Inspection',
    additionalInfo: '1 other',
    date: '02:42 AM'
  },
  {
    id: '2',
    name: 'Kevin',
    service: 'Kitchen remodel',
    date: '12/20'
  },
  {
    id: '3',
    name: 'Kelly',
    service: 'Kitchen remodel',
    date: '12/13'
  },
  {
    id: '4',
    name: 'Moe',
    service: 'Roof Installation or Replacement',
    date: '12/07'
  },
  {
    id: '5',
    name: 'Moe',
    service: 'Roof Repair or Maintenance',
    date: '12/07'
  }
];

const mockMessages = [
  {
    id: '1',
    sender: 'Kevin',
    content: 'Kitchen renovation estimate',
    date: '03/31'
  },
  {
    id: '2',
    sender: 'Kelly',
    content: 'Bathroom remodeling quote',
    date: '03/06'
  },
  {
    id: '3',
    sender: 'Waleed',
    content: 'Roof repair consultation',
    date: '12/16'
  },
  {
    id: '4',
    sender: 'Moe',
    content: 'Plumbing emergency service',
    date: '12/13'
  },
  {
    id: '5',
    sender: 'Sal',
    content: 'Home inspection appointment',
    date: '11/26'
  }
];

const mockAppointments: any[] = [];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <WelcomeCard name="Joeseph" profileProgress={100} />
          <QuickActions />
        </div>
        
        {/* Middle column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LeadsList leads={mockLeads} />
            <MessagesList messages={mockMessages} />
          </div>
          
          <Appointments appointments={mockAppointments} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
