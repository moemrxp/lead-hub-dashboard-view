
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Helmet } from 'react-helmet';

const Leads = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Leads | Dashboard</title>
      </Helmet>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
        </div>
        
        <div className="p-6 bg-white rounded-md shadow">
          <p className="text-gray-500">
            Your leads will appear here. This section will display potential customers who have shown interest in your services. 
            You'll be able to track lead status, view contact information, and manage follow-ups all in one place. 
            When new leads come in, you can prioritize them based on their potential value and likelihood to convert.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
