import React from 'react';
import { Logo } from './Logo';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-800 to-gray-600">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-float">
            <img
              src="https://i.ibb.co/Gtj2T8j/GL-transparent.png"
              alt="Floating Logo"
              className="w-[32rem] h-[32rem] object-contain opacity-[0.15] text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="fixed top-0 right-0 z-50 p-6">
          <Logo />
        </div>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}