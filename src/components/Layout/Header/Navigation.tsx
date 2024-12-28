import React from 'react';
import { navigationItems } from './navigationItems';
import { MenuItem } from './MenuItem';
import { useNavigation } from '../../../hooks/useNavigation';

export function Navigation() {
  const { currentPage, navigateToPage } = useNavigation();

  return (
    <nav className="flex items-center space-x-1">
      {navigationItems.map((item) => (
        <MenuItem
          key={item.id}
          label={item.label}
          active={item.id === currentPage}
          onClick={() => navigateToPage(item.id)}
        />
      ))}
    </nav>
  );
}