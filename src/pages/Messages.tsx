
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  const [selectedMessage, setSelectedMessage] = React.useState<Message | null>(mockMessages[0]);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      <div className="flex flex-col gap-6">
        {/* Message content - Now on top */}
        <Card className="border border-gray-200 shadow-sm">
          {selectedMessage ? (
            <>
              <CardHeader className="border-b pb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mrxp-blue text-white flex items-center justify-center mr-3">
                    {selectedMessage.sender.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-base">{selectedMessage.sender}</CardTitle>
                    <p className="text-sm text-gray-500">Last message on {selectedMessage.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-mrxp-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p>Hi {selectedMessage.sender}, how can I help you today?</p>
                      <div className="text-xs text-right mt-1 text-gray-100">9:30 AM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p>{selectedMessage.content}</p>
                      <div className="text-xs text-right mt-1 text-gray-500">{selectedMessage.date}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="border-t p-4">
                <div className="flex items-center">
                  <Input 
                    placeholder="Type a message..." 
                    className="flex-1 mr-2" 
                  />
                  <Button className="bg-mrxp-blue hover:bg-mrxp-darkBlue">Send</Button>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-gray-500">
              <MessageSquare className="h-16 w-16 mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No message selected</h3>
              <p className="text-center">Select a conversation from the list to view messages</p>
            </div>
          )}
        </Card>

        {/* Messages list - Now below */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2 border-b">
            <div className="relative">
              <Input 
                placeholder="Search messages..." 
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-auto max-h-[400px]">
            <div className="divide-y divide-gray-100">
              {mockMessages.map((message) => (
                <div 
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedMessage?.id === message.id ? 'bg-gray-50' : ''} ${message.unread ? 'font-medium' : ''}`}
                >
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
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
