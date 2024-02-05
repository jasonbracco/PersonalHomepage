import React from 'react';

interface HomepageCalendarDayProps {
    day: string;
}

export function HomepageCalendarDay({day}: HomepageCalendarDayProps) {

    console.log(day)
    return (
        <div className="homepage-calendar-day">
            This is one day!
        </div>
    )
}

export default HomepageCalendarDay