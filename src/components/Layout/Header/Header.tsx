import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-4">
      <Logo />
    </header>
  );
}