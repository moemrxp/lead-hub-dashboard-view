
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  MessageSquare, 
  Users, 
  Settings,
  Plus,
  Calendar as CalendarIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  className?: string;
  collapsed?: boolean;
}

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
}

const Sidebar = ({ className, collapsed = false }: SidebarProps) => {
  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Dashboard', href: '/', icon: Users, active: true },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

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
                  item.active 
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
