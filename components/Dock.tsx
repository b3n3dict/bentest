
import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { WindowId } from '../types';

interface DockProps {
  activeWindow: WindowId;
  onOpen: (id: WindowId) => void;
}

const Dock: React.FC<DockProps> = ({ activeWindow, onOpen }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-3 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/10">
        {NAV_ITEMS.map((item) => {
          const isActive = activeWindow === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onOpen(item.id as WindowId)}
              className="relative group p-3 rounded-xl transition-all hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white"
            >
              {item.icon}
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </div>

              {/* Active Indicator */}
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" 
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Dock;
