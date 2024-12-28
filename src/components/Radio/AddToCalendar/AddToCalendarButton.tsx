import React from 'react';
import { Calendar } from 'lucide-react';

interface AddToCalendarButtonProps {
  onClick: () => void;
}

export function AddToCalendarButton({ onClick }: AddToCalendarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-blue-300/90 hover:text-blue-200 transition-colors duration-200"
    >
      <Calendar size={16} strokeWidth={1.5} className="text-blue-300/90 group-hover:text-blue-200" />
      <span className="text-sm font-light">Add to Calendar</span>
    </button>
  );
}