
import React from 'react';
import { Calendar } from 'lucide-react';

export const QuoteWidget: React.FC = () => {
  return (
    <div className="glass-light p-6 rounded-2xl w-full max-w-xs space-y-4">
      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block">My life in a nutshell</span>
      <p className="text-xl font-medium text-white/90 leading-relaxed italic">
        "Code is the canvas where logic meets creativity."
      </p>
    </div>
  );
};

export const CalendarWidget: React.FC = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'short' });
  const dayName = now.toLocaleString('default', { weekday: 'short' });

  return (
    <div className="glass-light p-6 rounded-2xl flex flex-col items-center justify-center w-32 h-32 text-center">
      <span className="text-red-500 font-bold text-xs uppercase mb-1">{dayName} {month}</span>
      <span className="text-5xl font-light">{day}</span>
    </div>
  );
};
