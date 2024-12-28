export function getNextShowDate(): Date {
  const now = new Date();
  const nextFriday = new Date();
  nextFriday.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7));
  nextFriday.setHours(22, 0, 0, 0);
  return nextFriday;
}

export function formatCalendarTime(date: Date): string {
  return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
}

export function getEventTimes(showDate: Date) {
  const startTime = formatCalendarTime(showDate);
  const endTime = formatCalendarTime(
    new Date(showDate.getTime() + 2 * 60 * 60 * 1000)
  );
  return { startTime, endTime };
}

export function createGoogleCalendarUrl(showDate: Date): string {
  const { startTime, endTime } = getEventTimes(showDate);
  const title = encodeURIComponent('glimpse.london live on musicbox radio');
  const description = encodeURIComponent('listen and watch live here: <a href="https://www.mixcloud.com/live/MusicBoxRadioUK/">https://www.mixcloud.com/live/MusicBoxRadioUK/</a>');
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}`;
}

export function createIcsContent(showDate: Date): string {
  const { startTime, endTime } = getEventTimes(showDate);
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startTime}
DTEND:${endTime}
SUMMARY:glimpse.london live on musicbox radio
DESCRIPTION:listen and watch live here: https://www.mixcloud.com/live/MusicBoxRadioUK/
URL:https://www.mixcloud.com/live/MusicBoxRadioUK/
END:VEVENT
END:VCALENDAR`;
}