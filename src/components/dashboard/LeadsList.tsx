
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Lead = {
  id: string;
  name: string;
  service: string;
  additionalInfo?: string;
  date: string;
}

type LeadsListProps = {
  leads: Lead[];
}

export const LeadsList = ({ leads }: LeadsListProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Leads</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-1">
          {leads.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              No leads available
            </div>
          ) : (
            leads.map((lead) => (
              <div 
                key={lead.id}
                className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{lead.name}</h4>
                  <div className="text-sm text-gray-600">
                    {lead.service} {lead.additionalInfo && <span>+ {lead.additionalInfo}</span>}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {lead.date}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
