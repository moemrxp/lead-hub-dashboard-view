
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MessageSquare } from 'lucide-react';

type Message = {
  id: string;
  sender: string;
  content: string;
  date: string;
  unread?: boolean;
}

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Kevin',
    content: 'Hey',
    date: '03/31',
    unread: true
  },
  {
    id: '2',
    sender: 'Kelly',
    content: 'heyy whatsup',
    date: '03/06'
  },
  {
    id: '3',
    sender: 'Waleed',
    content: 'Hey need some roof work',
    date: '12/16'
  },
  {
    id: '4',
    sender: 'Moe',
    content: 'tes',
    date: '12/13'
  },
  {
    id: '5',
    sender: 'Sal',
    content: 'Hey I just you , please call me back!',
    date: '11/26'
  }
];

const Messages = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Filter messages based on search
  const filteredMessages = mockMessages.filter(
    message => message.sender.toLowerCase().includes(searchQuery.toLowerCase()) || 
               message.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-2 border-b">
          <div className="relative">
            <Input 
              placeholder="Search messages..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-auto max-h-[600px]">
          <div className="divide-y divide-gray-100">
            {filteredMessages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No messages found
              </div>
            ) : (
              filteredMessages.map((message) => (
                <Link 
                  key={message.id} 
                  to={`/messages/${message.id}`}
                  className="block"
                >
                  <div className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-mrxp-blue text-white flex items-center justify-center mr-3">
                      {message.sender.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800 truncate">{message.sender}</h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{message.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{message.content}</p>
                    </div>
                    {message.unread && (
                      <div className="w-2 h-2 rounded-full bg-mrxp-blue ml-2 mt-2"></div>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Messages;
