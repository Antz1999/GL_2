import React from 'react';
import { FeatureCard } from './FeatureCard';
import { ShowArtwork } from '../Radio/ShowArtwork';
import { MixcloudLink } from '../Radio/MixcloudLink';
import { SocialLinks } from '../Radio/SocialLinks';
import { MIXCLOUD_URL } from '../Radio/constants';

export function ShowSection() {
  return (
    <div className="space-y-4">
      <MixcloudLink />
      <div className="bg-gray-800/20 rounded-lg p-4 backdrop-blur-sm">
        <FeatureCard
          customContent={<ShowArtwork className="absolute inset-0 w-full h-full" />}
          url={MIXCLOUD_URL}
        />
        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}