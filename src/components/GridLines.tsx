import React from 'react';

interface GridLinesProps {
  theme?: 'light' | 'dark';
}

export const GridLines: React.FC<GridLinesProps> = ({ theme = 'light' }) => {
  const lineColor = theme === 'dark' ? 'bg-white/5' : 'bg-[#0e1726]/[0.03]';
  
  return (
    <div className="absolute inset-0 pointer-events-none flex justify-evenly overflow-hidden z-0">
      <div className={`w-px h-full ${lineColor}`}></div>
      <div className={`w-px h-full ${lineColor}`}></div>
      <div className={`w-px h-full ${lineColor} hidden md:block`}></div>
      <div className={`w-px h-full ${lineColor} hidden md:block`}></div>
      <div className={`w-px h-full ${lineColor} hidden lg:block`}></div>
      <div className={`w-px h-full ${lineColor} hidden lg:block`}></div>
    </div>
  );
};
