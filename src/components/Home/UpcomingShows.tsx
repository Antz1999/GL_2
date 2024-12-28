import React from 'react';
import { EventCard } from './EventCard';

const JAN_SHOW = new Date(2024, 0, 19, 15, 0);
const FEB_SHOW = new Date(2024, 1, 16, 15, 0);
const SHOW_IMAGE = "https://thumbnailer.mixcloud.com/unsafe/166x166/profile/9/9/5/2/140d-0bb1-4991-b2f8-43df4b8c2ee4";

export function UpcomingShows() {
  return (
    <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm h-fit">
      <h3 className="text-gray-300/80 font-light mb-4">upcoming shows</h3>
      <div className="space-y-4">
        <EventCard
          date="Sunday 19 JAN"
          title="glimpse.london"
          venue="Musicbox Radio"
          time="15:00 - 17:00"
          showDate={JAN_SHOW}
          imageUrl={SHOW_IMAGE}
          showWatchLive={true}
        />
        <EventCard
          date="Sunday 16 FEB"
          title="glimpse.london"
          venue="Musicbox Radio"
          time="15:00 - 17:00"
          showDate={FEB_SHOW}
          imageUrl={SHOW_IMAGE}
          showWatchLive={true}
        />
      </div>
    </div>
  );
}