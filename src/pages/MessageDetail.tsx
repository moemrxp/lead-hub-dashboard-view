
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

type Message = {
  id: string;
  sender: string;
  content: string;
  date: string;
  unread?: boolean;
}

// Mock messages data
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

const MessageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<Message | null>(null);
  const [newMessage, setNewMessage] = useState('');
  
  // Find the message by id
  useEffect(() => {
    if (id) {
      const foundMessage = mockMessages.find(msg => msg.id === id);
      if (foundMessage) {
        setMessage(foundMessage);
      }
    }
  }, [id]);

  const handleSend = () => {
    if (newMessage.trim()) {
      // In a real app, you would send the message to an API
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!message) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-64">
          <p>Message not found</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => navigate('/messages')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Messages
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-4">
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={() => navigate('/messages')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Messages
        </Button>
      </div>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="border-b pb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-mrxp-blue text-white flex items-center justify-center mr-3">
              {message.sender.charAt(0)}
            </div>
            <div>
              <h2 className="text-lg font-medium">{message.sender}</h2>
              <p className="text-sm text-gray-500">Last message on {message.date}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4 h-[400px] overflow-y-auto mb-4">
            <div className="flex justify-end">
              <div className="bg-mrxp-blue text-white rounded-lg p-3 max-w-[80%]">
                <p>Hi {message.sender}, how can I help you today?</p>
                <div className="text-xs text-right mt-1 text-gray-100">9:30 AM</div>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p>{message.content}</p>
                <div className="text-xs text-right mt-1 text-gray-500">{message.date}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Input 
              placeholder="Type a message..." 
              className="flex-1 mr-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button 
              className="bg-mrxp-blue hover:bg-mrxp-darkBlue"
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default MessageDetail;
