import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';

export function Logo() {
  const { navigateToHome } = useNavigation();

  return (
    <button 
      onClick={navigateToHome}
      className="flex items-center"
    >
      <img
        src="https://i.ibb.co/Gtj2T8j/GL-transparent.png"
        alt="Glimpse London"
        className="h-20 w-20 md:h-28 md:w-28 object-contain text-gray-200 opacity-30 invert-logo"
      />
    </button>
  );
}