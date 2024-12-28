import React from 'react';
import { MIXCLOUD_URL, MIXCLOUD_EMBED_URL } from './constants';
import { ShowArtwork } from './ShowArtwork';
import { AddToCalendar } from './AddToCalendar/AddToCalendar';
import { getNextShowDate } from './AddToCalendar/utils/calendarUtils';
import { RadioIntro } from './RadioIntro';

export function RadioPlayer() {
  return (
    <>
      <RadioIntro />
      <div className="max-w-xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-[150px,1fr] gap-4 mb-6">
          <ShowArtwork className="w-full aspect-square" />
          <div className="space-y-4">
            <iframe 
              width="100%" 
              height="150" 
              src={MIXCLOUD_EMBED_URL}
              frameBorder="0"
              allow="autoplay"
              className="bg-gray-800/30 rounded-lg"
            />
            <div className="flex justify-end">
              <AddToCalendar showDate={getNextShowDate()} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShowCard
            date="Every Sunday"
            time="15:00 - 17:00"
            title="glimpse.london"
            description="Deep house and minimal techno selections"
            url={MIXCLOUD_URL}
          />
          <ShowCard
            date="Last Sunday"
            time="15:00 - 17:00"
            title="glimpse.london guest mix"
            description="Featuring emerging electronic artists"
            url={MIXCLOUD_URL}
          />
        </div>
      </div>
    </>
  );
}