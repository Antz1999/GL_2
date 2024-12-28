import React, { useState, useRef, useEffect } from 'react';
import { AddToCalendarButton } from './AddToCalendarButton';
import { CalendarOptions } from './CalendarOptions';

interface AddToCalendarProps {
  showDate: Date;
}

export function AddToCalendar({ showDate }: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <AddToCalendarButton onClick={() => setIsOpen(!isOpen)} />
      <CalendarOptions
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showDate={showDate}
      />
    </div>
  );
}