import React from 'react';
import { useNavigation } from '../../../hooks/useNavigation';

export function Logo() {
  const { navigateToHome } = useNavigation();

  return (
    <button 
      onClick={navigateToHome}
      className="flex items-center hover:opacity-100 transition-opacity"
    >
      <img
        src="https://i.ibb.co/Gtj2T8j/GL-transparent.png"
        alt="Glimpse London"
        className="h-14 w-14 object-contain text-gray-200 opacity-90 hover:opacity-100 transition-opacity invert-logo"
      />
    </button>
  );
}