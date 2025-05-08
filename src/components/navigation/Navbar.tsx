
import React from 'react';
import { ChevronDown, User, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type NavbarProps = {
  className?: string;
  username?: string;
  onMenuClick?: () => void;
}

const Navbar = ({ className, username = 'testprofile101', onMenuClick }: NavbarProps) => {
  const isMobile = useIsMobile();

  return (
    <header className={cn("w-full border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between", className)}>
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <Logo />
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-right mr-2 hidden sm:block">
          <span className="text-sm text-gray-600">Hi, {username}</span>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="" alt={username} />
          <AvatarFallback className="bg-mrxp-blue text-white">
            {username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </header>
  );
};

export default Navbar;
