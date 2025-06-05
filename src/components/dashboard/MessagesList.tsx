
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Message = {
  id: string;
  sender: string;
  content: string;
  date: string;
}

type MessagesListProps = {
  messages: Message[];
}

export const MessagesList = ({ messages }: MessagesListProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Customer Inquiries</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-1">
          {messages.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              No customer inquiries available
            </div>
          ) : (
            messages.map((message) => (
              <Link 
                key={message.id}
                to={`/messages/${message.id}`}
                className="block"
              >
                <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{message.sender}</h4>
                    <div className="text-sm text-blue-600 font-medium truncate max-w-[250px]">
                      Service Inquiry: {message.content}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {message.date}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
