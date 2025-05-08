
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LeadsList } from '@/components/dashboard/LeadsList';

// Lead data type
type Lead = {
  id: string;
  customerName: string;
  date: string;
  dateFormatted: string;
  projectDetails?: string;
  urgency?: string;
  services?: string[];
  address?: string;
};

const Leads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for leads
  const mockLeads: Lead[] = [
    {
      id: '1',
      customerName: 'Mohamad Amir',
      date: '2025-05-07T10:42:00',
      dateFormatted: 'May 7, 2025 at 10:42 PM',
      projectDetails: 'hello',
      urgency: 'ASAP',
      services: ['Plumbing Inspection', 'Plumbing Drain Repair'],
      address: 'Momosa Way, Whiting, New Jersey 08759, United States',
    },
    {
      id: '2',
      customerName: 'Kevin Smith',
      date: '2024-12-19T11:49:00',
      dateFormatted: 'December 19, 2024 at 11:49 PM',
    },
    {
      id: '3',
      customerName: 'Kelly Brian',
      date: '2024-12-13T11:28:00',
      dateFormatted: 'December 13, 2024 at 11:28 AM',
    },
    {
      id: '4',
      customerName: 'Moe Breezy',
      date: '2024-12-06T08:07:00',
      dateFormatted: 'December 6, 2024 at 8:07 PM',
    },
    {
      id: '5',
      customerName: 'Moe Breezy',
      date: '2024-12-06T07:56:00',
      dateFormatted: 'December 6, 2024 at 7:56 PM',
    },
    {
      id: '6',
      customerName: 'Sal Farhan',
      date: '2024-11-26T11:30:00',
      dateFormatted: 'November 26, 2024 at 11:30 AM',
    },
    {
      id: '7',
      customerName: 'John Smith',
      date: '2024-11-21T01:13:00',
      dateFormatted: 'November 21, 2024 at 1:13 PM',
    },
    {
      id: '8',
      customerName: 'John Smith',
      date: '2024-11-21T01:13:00',
      dateFormatted: 'November 21, 2024 at 1:13 PM',
    },
  ];

  // Filter leads based on search query
  const filteredLeads = mockLeads.filter(lead =>
    lead.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Selected lead (default to first lead)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(mockLeads[0]);

  return (
    <DashboardLayout>
      <Helmet>
        <title>Leads | Dashboard</title>
      </Helmet>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Leads</h1>
        
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by customer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-2"
          />
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Lead Details - Now on top */}
          {selectedLead && (
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{selectedLead.customerName}</h2>
                  <span className="text-sm text-gray-500">{selectedLead.dateFormatted}</span>
                </div>
                
                {/* Project Details */}
                {selectedLead.projectDetails && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Project Details</h3>
                    <p>{selectedLead.projectDetails}</p>
                  </div>
                )}
                
                {/* Urgency */}
                {selectedLead.urgency && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Urgency</h3>
                    <p>{selectedLead.urgency}</p>
                  </div>
                )}
                
                {/* Services Needed */}
                {selectedLead.services && selectedLead.services.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Services Needed</h3>
                    <ul className="space-y-1">
                      {selectedLead.services.map((service, index) => (
                        <li key={index} className="text-sm">{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Customer Address */}
                {selectedLead.address && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Customer Address</h3>
                    <p className="text-sm">{selectedLead.address}</p>
                  </div>
                )}
                
                {/* Actions */}
                <div>
                  <h3 className="font-semibold text-sm text-gray-700 mb-2">Actions</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Phone size={16} />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <MessageSquare size={16} />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Leads List */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="max-h-[400px] overflow-y-auto">
                {filteredLeads.map(lead => (
                  <div 
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 border-b cursor-pointer transition-colors ${selectedLead?.id === lead.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{lead.customerName}</h3>
                      <span className="text-sm text-gray-500">{lead.dateFormatted.split(' at')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
