import React from 'react';
import { createGoogleCalendarUrl, createIcsContent } from './utils/calendarUtils';

interface CalendarOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  showDate: Date;
}

export function CalendarOptions({ isOpen, onClose, showDate }: CalendarOptionsProps) {
  if (!isOpen) return null;

  const downloadIcs = () => {
    const blob = new Blob([createIcsContent(showDate)], { 
      type: 'text/calendar;charset=utf-8' 
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'radio-show.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-gray-800/95 rounded-lg shadow-lg p-2 z-50">
      <div className="space-y-1">
        <a
          href={createGoogleCalendarUrl(showDate)}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-md transition-colors duration-200"
        >
          Google Calendar
        </a>
        <button
          onClick={downloadIcs}
          className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-md transition-colors duration-200"
        >
          Download .ics
        </button>
      </div>
    </div>
  );
}