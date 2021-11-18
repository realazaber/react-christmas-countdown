import React, { useState } from 'react';

function Countdown() {

    //Prepare each date field.
    let [seconds, setSeconds] = useState(60);
    let [minutes, setMinutes] = useState(60);
    let [hours, setHours] = useState(24);
    let [days, setDays] = useState(7);
    let [weeks, setWeeks] = useState(52);
    
    setInterval(() => {

        //Find the next Christmas date.
        let christmasTime = new Date();
        let currentYear = christmasTime.getFullYear().toString();
        let christmasDate = new Date("December 25, " + currentYear + " 00:00:00").getTime();
    
        //Get current date
        let currentDate = new Date().getTime();
        
        let timeDifferenceSeconds = 0;

        //Christmas is next year.
        if ((christmasDate - currentDate) <= 0) {
            let tmpYear = parseInt(currentYear);
            tmpYear++;
            currentYear = tmpYear.toString();
            christmasDate = new Date("December 25, " + currentYear + " 00:00:00").getTime();
        }

        //Calculate the time difference.
        timeDifferenceSeconds = Math.round((christmasDate - currentDate) / 1000);
        
        let remainingWeeks = Math.floor(timeDifferenceSeconds / 604800);
        timeDifferenceSeconds -= remainingWeeks * 604800;
        
        let remainingDays = Math.floor(timeDifferenceSeconds / 86400) % 7;
        timeDifferenceSeconds -= remainingDays * 86400;

        let remainingHours = Math.floor(timeDifferenceSeconds / 3600) % 24;
        timeDifferenceSeconds -= remainingHours * 3600;

        let remainingMinutes = Math.floor(timeDifferenceSeconds / 60) % 60;
        timeDifferenceSeconds -= remainingMinutes * 60;

        let remainingSeconds = timeDifferenceSeconds % 60;

        //Change the text.
        setWeeks(remainingWeeks);
        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);   

    }, 1000);

    return (
        <div id="countdown">
            <div id="weeks">
                {weeks}
                <br />
                Weeks
            </div>
            <div id="days">
                {days}
                <br />
                Days
            </div>
            <div id="hours">
                {hours}
                <br />
                Hours
            </div>
            <div id="minutes">
                {minutes}
                <br />
                Minutes
            </div>
            <div id="seconds">
                {seconds}
                <br />
                Seconds
            </div>              
        </div>
    )
}

export default Countdown;
