
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calendar, Settings, CalendarOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type ActionButtonProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  className?: string;
  disabled?: boolean;
}

const ActionButton = ({ icon: Icon, label, to, className, disabled = false }: ActionButtonProps) => {
  const baseClass = "flex flex-1 flex-col items-center justify-center p-4 rounded-md transition-colors";
  
  if (disabled) {
    return (
      <div className={cn(
        baseClass,
        "text-neutral-400 cursor-not-allowed",
        className
      )}>
        <Icon className="h-6 w-6 mb-2" />
        <span className="text-sm">{label}</span>
      </div>
    );
  }
  
  return (
    <Link 
      to={to} 
      className={cn(
        baseClass,
        "text-gray-700 hover:bg-gray-50",
        className
      )}
    >
      <Icon className="h-6 w-6 mb-2" />
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export const QuickActions = () => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <ActionButton 
            icon={CalendarOff} 
            label="Schedule" 
            to="/calendar"
            disabled={true}
          />
          <ActionButton 
            icon={MessageSquare} 
            label="Messages" 
            to="/messages"
          />
          <ActionButton 
            icon={Calendar} 
            label="Calendar" 
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
