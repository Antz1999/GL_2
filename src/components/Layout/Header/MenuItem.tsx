import React from 'react';

interface MenuItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export function MenuItem({ label, active = false, onClick }: MenuItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-2.5 py-1.5 rounded-md transition-all duration-200
        ${active 
          ? 'bg-gray-800/30 text-gray-200' 
          : 'text-gray-400 hover:bg-gray-800/20 hover:text-gray-300'
        }`}
    >
      <span className="font-extralight text-xs tracking-wide">{label}</span>
    </button>
  );
}