import React from 'react';

interface FeatureCardProps {
  customContent: React.ReactNode;
  url: string;
}

export function FeatureCard({ customContent, url }: FeatureCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:opacity-90 transition-opacity duration-300">
        {customContent}
      </div>
    </a>
  );
}