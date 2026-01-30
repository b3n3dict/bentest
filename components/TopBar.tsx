
import React, { useState, useEffect } from 'react';
import { WindowId } from '../types';

interface TopBarProps {
  activeSection: WindowId;
}

const TopBar: React.FC<TopBarProps> = ({ activeSection }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  });

  const formattedDate = time.toLocaleDateString([], {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="fixed top-0 w-full h-8 glass-light flex items-center justify-between px-4 z-50 select-none text-[13px] font-medium">
      <div className="flex items-center gap-4">
        <span className="font-bold tracking-tight">bxavier</span>
        <span className="text-white/80 capitalize">{activeSection || 'Desktop'}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>System Online</span>
        </div>
        <div className="flex gap-3 text-white/90">
          <span>{formattedDate}</span>
          <span className="mono">{formattedTime}</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
