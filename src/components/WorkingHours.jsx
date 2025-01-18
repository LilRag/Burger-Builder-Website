import React from 'react';
export default function WorkingHours() {
  const schedule = [
    { day: 'monday', hours: 'closed' },
    { day: 'tuesday', hours: '12pm - 12 am' },
    { day: 'wednesday', hours: '12pm - 12 am' },
    { day: 'thursday', hours: '12pm - 12 am' },
    { day: 'friday', hours: '12pm - 12 am' },
    { day: 'saturday', hours: '12pm - 12 am' },
    { day: 'sunday', hours: '12pm - 12 am' },
  ];

  return (
    <div className="working-hours">
      <h3>WORKING DAYS</h3>
      {schedule.map(({ day, hours }) => (
        <div key={day}>
          <span>{day}</span>
          <span>{hours}</span>
        </div>
      ))}
    </div>
  );
}
