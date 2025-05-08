
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
          <p className="text-gray-500">Your leads will appear here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
