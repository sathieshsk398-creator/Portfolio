import React from 'react';

interface DotMatrixRedProps {
  className?: string;
  cols?: number;
  rows?: number;
  size?: string;
}

export const DotMatrixRed: React.FC<DotMatrixRedProps> = ({ 
  className = "",
  cols = 3,
  rows = 2,
  size = "w-1 h-1"
}) => {
  const total = cols * rows;
  return (
    <div 
      className={`inline-grid gap-1 items-center shrink-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {[...Array(total)].map((_, i) => (
        <span 
          key={i} 
          className={`${size} rounded-full bg-[#EF4444] shadow-[0_0_6px_rgba(239,68,68,0.6)]`} 
        />
      ))}
    </div>
  );
};
