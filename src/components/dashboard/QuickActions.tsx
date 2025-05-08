
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MessageSquare, Plus, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type ActionButtonProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  className?: string;
}

const ActionButton = ({ icon: Icon, label, to, className }: ActionButtonProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex flex-1 flex-col items-center justify-center p-4 text-gray-700 hover:bg-gray-50 rounded-md transition-colors",
      className
    )}
  >
    <Icon className="h-6 w-6 mb-2" />
    <span className="text-sm">{label}</span>
  </Link>
);

export const QuickActions = () => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <ActionButton 
            icon={Plus} 
            label="New Invoice" 
            to="/invoice/new"
          />
          <ActionButton 
            icon={MessageSquare} 
            label="Messages" 
            to="/messages"
          />
          <ActionButton 
            icon={Calendar} 
            label="Schedule" 
            to="/calendar"
          />
          <ActionButton 
            icon={Settings} 
            label="Settings" 
            to="/settings"
          />
        </div>
      </CardContent>
    </Card>
  );
};
