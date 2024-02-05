import React from 'react';

interface HomepageCalendarDayProps {
    day: string;
}

export function HomepageCalendarDay({day}: HomepageCalendarDayProps) {

    return (
        <div className="homepage-calendar-day">
            <header className="homepage-calendar-day-header">{day}</header>
            <div className="homepage-calendar-day-content">
                Content Here
            </div>
        </div>
    )
}

export default HomepageCalendarDay