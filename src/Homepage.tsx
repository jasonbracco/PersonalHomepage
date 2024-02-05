import React from 'react';
import HomepageCalendarDay from './HomepageCalendarDay';

export function Homepage() {

    const dateFormatOptions: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date()
    const todaysDate = today.toLocaleDateString('en-US', dateFormatOptions)

    let trailing7DaysArray: string[] = []

    const dateForMiniCalendar = (date: Date): string => {
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
    }

    const getLast7Days = () => {
        for (let i=6; i>-1; i--) {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() - i);
            let formattedDate = dateForMiniCalendar(newDate)
            trailing7DaysArray.push(formattedDate)
        }
    }
    
    getLast7Days() //returns the last 7 days, including today, in mm/dd format

    return (
        <div className="homepage">
            <div className="welcome-text">
                <p>Welcome back!  Today is {todaysDate}.</p>
                <p>Let's catch up on what you missed!</p>
            </div>
            <div className="homepage-calendar">
                {trailing7DaysArray.map(day => {
                    return <HomepageCalendarDay key={day} day={day}/>
                })}
            </div>


        </div>
    )
}

export default Homepage