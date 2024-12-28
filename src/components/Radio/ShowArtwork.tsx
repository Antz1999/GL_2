import React from 'react';
import { SHOW_ARTWORK_URL } from './constants';

interface ShowArtworkProps {
  className?: string;
}

export function ShowArtwork({ className = '' }: ShowArtworkProps) {
  return (
    <img
      src={SHOW_ARTWORK_URL}
      alt="Radio Show Artwork"
      className={`rounded-lg object-cover opacity-55 hover:opacity-100 transition-opacity duration-300 ${className}`}
    />
  );
}