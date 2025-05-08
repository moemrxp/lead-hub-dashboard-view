
import React, { useState, useEffect } from 'react';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Auto-collapse sidebar on mobile
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {(!isMobile || !sidebarCollapsed) && (
        <div className={`${isMobile ? 'fixed inset-0 z-40 bg-gray-500/50' : ''}`} onClick={isMobile ? toggleSidebar : undefined}>
          <div onClick={(e) => isMobile && e.stopPropagation()}>
            <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
          </div>
        </div>
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
      
      {/* Mobile collapsed sidebar toggle button is rendered inside the Sidebar component */}
    </div>
  );
};

export default DashboardLayout;
