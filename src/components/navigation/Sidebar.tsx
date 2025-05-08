
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar,
  MessageSquare, 
  Users, 
  Settings,
  Plus,
  Calendar as CalendarIcon,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarProps = {
  className?: string;
  collapsed?: boolean;
  toggleSidebar?: () => void;
}

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
}

const Sidebar = ({ className, collapsed = false, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Dashboard', href: '/', icon: Users },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Quotes', href: '/quotes', icon: Plus },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  if (isMobile && collapsed) {
    return (
      <Button 
        onClick={toggleSidebar}
        variant="outline" 
        size="icon" 
        className="fixed left-4 top-4 z-50 rounded-full shadow-md bg-white border-gray-200"
      >
        <Menu className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <nav className={cn(
      "flex flex-col h-screen bg-white border-r border-gray-200 transition-all",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex-1 py-5 overflow-y-auto">
        <ul className="px-2 space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                  location.pathname === item.href || 
                  (item.href !== '/' && location.pathname.startsWith(item.href))
                    ? "bg-mrxp-blue text-white" 
                    : "text-gray-600 hover:bg-gray-100",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  collapsed ? "mx-0" : "mr-3"
                )} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
