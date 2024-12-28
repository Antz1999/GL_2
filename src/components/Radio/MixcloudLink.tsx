import React from 'react';
import { ExternalLink } from 'lucide-react';
import { MIXCLOUD_URL } from './constants';

export function MixcloudLink() {
  return (
    <a 
      href={MIXCLOUD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-300/90 hover:text-blue-200 transition-colors duration-200"
    >
      <ExternalLink size={16} strokeWidth={1.5} className="text-blue-300/90 group-hover:text-blue-200" />
      <span className="text-sm font-light">latest show on mixcloud.com</span>
    </a>
  );
}