import React from 'react';
import { MenuItem } from './MenuItem';
import { navigationItems } from './navigationItems';

export function Sidebar() {
  return (
    <div className="w-36 h-screen bg-gray-900/95 text-white p-2">
      <nav className="flex-1 space-y-0.5">
        {navigationItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={item.id === 'radio'}
          />
        ))}
      </nav>
    </div>
  );
}