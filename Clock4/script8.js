function updateClock() {
    const now = new Date();

    // Adjust for Bangladesh time
    const localOffset = now.getTimezoneOffset() * 60 * 1000; // Local offset in milliseconds
    const bangladeshOffset = 6 * 60 * 60 * 1000; // Bangladesh offset (GMT+6)
    const bangladeshTime = new Date(now.getTime() + localOffset + bangladeshOffset);

    const hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();
    const milliseconds = bangladeshTime.getMilliseconds();

    // Hour hand calculation (gradual movement based on minutes)
    const hourDeg = (360 / 12) * (hours % 12) + (360 / 12 / 60) * minutes + (360 / 12 / 60 / 60) * seconds;

    // Minute hand calculation (smooth movement based on seconds)
    const minuteDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;

    // Second hand calculation (smooth movement with milliseconds)
    const secondDeg = (360 / 60) * seconds + (360 / 1000) * milliseconds;

    // Apply rotation to the hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update digital clock
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const amPm = hours >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${formattedHours % 12 || 12}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

// Update clock every 50 milliseconds for smoother second hand movement
setInterval(updateClock, 50);

// Initialize clock immediately
updateClock();
