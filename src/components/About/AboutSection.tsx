import React from 'react';
import { PageTitle } from '../common/PageTitle';

export function AboutSection() {
  return (
    <div className="p-8">
      <PageTitle 
        title="We Are"
        subtitle="house and techno collective"
      />
      <div className="max-w-2xl">
        <p className="text-gray-300/80 font-light leading-relaxed mb-6">
          A London-based collective of DJs, producers, and music enthusiasts dedicated to pushing 
          the boundaries of house and techno music. Our mission is to create immersive experiences 
          that bring people together through the power of electronic music.
        </p>
      </div>
    </div>
  );
}