import React from 'react';
import { Radio, Instagram, Share2, Mail } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-300/90 hover:text-blue-200 transition-colors duration-200"
    >
      {icon}
      <span className="text-sm font-light">{label}</span>
    </a>
  );
}

export function SocialLinks() {
  const iconProps = {
    size: 16,
    strokeWidth: 1.5,
    className: "text-blue-300/90 group-hover:text-blue-200"
  };

  return (
    <div className="flex flex-wrap gap-4">
      <SocialLink
        href="https://www.mixcloud.com/live/MusicBoxRadioUK/"
        icon={<Radio {...iconProps} />}
        label="musicbox radio - listen live"
      />
      <SocialLink
        href="https://instagram.com/glimpse.london"
        icon={<Instagram {...iconProps} />}
        label="instagram"
      />
      <SocialLink
        href="https://glimpse.london"
        icon={<Share2 {...iconProps} />}
        label="share"
      />
      <SocialLink
        href="#contact"
        icon={<Mail {...iconProps} />}
        label="contact"
      />
    </div>
  );
}