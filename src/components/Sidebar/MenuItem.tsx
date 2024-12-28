import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export function MenuItem({ icon: Icon, label, active = false }: MenuItemProps) {
  return (
    <div 
      className={`flex items-center gap-2 px-2.5 py-2 rounded-md cursor-pointer transition-all duration-200
        ${active 
          ? 'bg-gray-800/30 text-gray-200' 
          : 'text-gray-400 hover:bg-gray-800/20 hover:text-gray-300'
        }`}
    >
      <Icon size={16} strokeWidth={1.25} />
      <span className="font-extralight text-xs tracking-wide">{label}</span>
    </div>
  );
}