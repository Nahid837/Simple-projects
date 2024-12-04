const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digitalClock = document.getElementById('digital-clock');

function updateClock() {
    const now = new Date();

    // Adjust Bangladesh time (GMT+6)
    const localOffset = now.getTimezoneOffset() * 60 * 1000; // Local offset in milliseconds
    const bangladeshOffset = 6 * 60 * 60 * 1000; // Bangladesh offset in milliseconds (GMT+6)
    const bangladeshTime = new Date(now.getTime() + localOffset + bangladeshOffset);

    // Get hours, minutes, and seconds for both analog and digital clocks
    const hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();
    const milliseconds = bangladeshTime.getMilliseconds();

    // Correct degrees calculation for the hands
    const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes; // Hour hand position
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds; // Minute hand position
    const secondDeg = (360 / 60) * seconds + (6 / 1000) * milliseconds; // Second hand position

    // Apply rotation to the clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update digital clock display
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const amPm = hours >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${formattedHours % 12 || 12}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
