
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types for our quotes data
type QuoteService = string;

type Quote = {
  id: string;
  customerName: string;
  date: string;
  dateFormatted: string;
  projectDetails?: string;
  homeSpecifications?: {
    sqFt?: string;
    bedrooms?: string;
    bathrooms?: string;
  };
  urgency?: string;
  services?: QuoteService[];
  address?: string;
};

const Quotes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for quotes
  const mockQuotes: Quote[] = [
    {
      id: '1',
      customerName: 'Mohamad Amir',
      date: '2025-05-07T10:42:00',
      dateFormatted: 'May 7, 2025 at 10:42 PM',
      projectDetails: 'hello',
      homeSpecifications: {
        sqFt: 'N/A',
        bedrooms: 'N/A',
        bathrooms: 'N/A',
      },
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

  // Filter quotes based on search query
  const filteredQuotes = mockQuotes.filter(quote =>
    quote.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Selected quote (default to first quote)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(mockQuotes[0]);

  return (
    <DashboardLayout>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Quotes</h1>
        
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
          {/* Quote Details - Now on top */}
          {selectedQuote && (
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>{selectedQuote.customerName}</CardTitle>
                  <span className="text-sm text-gray-500">{selectedQuote.dateFormatted}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Project Details */}
                {selectedQuote.projectDetails && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Project Details</h3>
                    <p>{selectedQuote.projectDetails}</p>
                  </div>
                )}
                
                {/* Home Specifications */}
                {selectedQuote.homeSpecifications && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Home Specifications</h3>
                    <ul className="space-y-1">
                      {selectedQuote.homeSpecifications.sqFt && (
                        <li className="flex items-center gap-2">
                          <span className="text-sm">{selectedQuote.homeSpecifications.sqFt} sq ft</span>
                        </li>
                      )}
                      {selectedQuote.homeSpecifications.bedrooms && (
                        <li className="flex items-center gap-2">
                          <span className="text-sm">{selectedQuote.homeSpecifications.bedrooms} Bedrooms</span>
                        </li>
                      )}
                      {selectedQuote.homeSpecifications.bathrooms && (
                        <li className="flex items-center gap-2">
                          <span className="text-sm">{selectedQuote.homeSpecifications.bathrooms} Bathrooms</span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                {/* Urgency */}
                {selectedQuote.urgency && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Urgency</h3>
                    <p>{selectedQuote.urgency}</p>
                  </div>
                )}
                
                {/* Services Needed */}
                {selectedQuote.services && selectedQuote.services.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Services Needed</h3>
                    <ul className="space-y-1">
                      {selectedQuote.services.map((service, index) => (
                        <li key={index} className="text-sm">{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Customer Address */}
                {selectedQuote.address && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">Customer Address</h3>
                    <p className="text-sm">{selectedQuote.address}</p>
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

          {/* Quotes List - Now below */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="max-h-[400px] overflow-y-auto">
                {filteredQuotes.map(quote => (
                  <div 
                    key={quote.id}
                    onClick={() => setSelectedQuote(quote)}
                    className={`p-4 border-b cursor-pointer transition-colors ${selectedQuote?.id === quote.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{quote.customerName}</h3>
                      <span className="text-sm text-gray-500">{quote.dateFormatted.split(' at')[0]}</span>
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

export default Quotes;
