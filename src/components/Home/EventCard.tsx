import React from 'react';
import { Play } from 'lucide-react';
import { AddToCalendar } from '../Radio/AddToCalendar/AddToCalendar';

interface EventCardProps {
  date: string;
  title: string;
  venue: string;
  time: string;
  showDate: Date;
  imageUrl?: string;
  showWatchLive?: boolean;
}

export function EventCard({ 
  date, 
  title, 
  venue, 
  time, 
  showDate, 
  imageUrl,
  showWatchLive 
}: EventCardProps) {
  return (
    <div className="p-4 bg-gray-800/20 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="text-gray-300/80 font-light text-sm">{date}</div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="mt-2 w-16 h-16 rounded-md object-cover opacity-90 [filter:brightness(0.85)_saturate(1.4)_hue-rotate(-20deg)]"
            />
          )}
        </div>
        <div className="flex-grow">
          <h4 className="text-gray-300/80 font-light mb-1">{title}</h4>
          <div className="text-gray-400/70 text-sm font-extralight">
            <div>{venue}</div>
            <div>{time}</div>
            {showWatchLive && (
              <a 
                href="https://www.mixcloud.com/live/MusicBoxRadioUK/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300/90 hover:text-blue-200 transition-colors duration-200 mt-1"
              >
                <Play size={16} strokeWidth={1.5} className="text-blue-300/90 group-hover:text-blue-200" />
                <span className="text-sm font-light">watch live</span>
              </a>
            )}
            <div className="mt-2">
              <AddToCalendar showDate={showDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}