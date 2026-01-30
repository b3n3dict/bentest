
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { WindowId } from '../types';

interface WindowProps {
  id: WindowId;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center p-4 md:p-10"
        >
          <div className="glass w-full max-w-4xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-4">
                  <button 
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
                  >
                    <X size={8} className="text-red-900 opacity-0 group-hover:opacity-100" />
                  </button>
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">{title}</span>
              </div>
              <div className="flex gap-4 text-white/30 text-xs">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
