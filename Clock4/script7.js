const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digitalClock = document.getElementById('digital-clock');

// Offset variables (to correct the delay)
const offsetHours = 3; // Analog clock is 3 hours ahead
const offsetMinutes = 15; // Analog clock is 15 minutes ahead
const offsetSeconds = 15; // Analog clock is 15 seconds ahead

function updateClock() {
    const now = new Date();

    // Adjust Bangladesh time for both clocks
    const localOffset = now.getTimezoneOffset() * 60 * 1000; // Local offset in milliseconds
    const bangladeshOffset = 6 * 60 * 60 * 1000; // Bangladesh offset in milliseconds (GMT+6)
    const bangladeshTime = new Date(now.getTime() + localOffset + bangladeshOffset);

    // Get digital time components
    const digitalHours = bangladeshTime.getHours();
    const digitalMinutes = bangladeshTime.getMinutes();
    const digitalSeconds = bangladeshTime.getSeconds();

    // Adjust analog clock by subtracting the offset
    const correctedHours = (digitalHours - offsetHours + 24) % 24; // Ensure valid 24-hour format
    const correctedMinutes = (digitalMinutes - offsetMinutes + 60) % 60; // Ensure valid 60 minutes
    const correctedSeconds = (digitalSeconds - offsetSeconds + 60) % 60; // Ensure valid 60 seconds

    // Calculate degrees for the analog clock hands
    const hourDeg = (360 / 12) * (correctedHours % 12) + (30 / 60) * correctedMinutes;
    const minuteDeg = (360 / 60) * correctedMinutes + (6 / 60) * correctedSeconds;
    const secondDeg = (360 / 60) * correctedSeconds;

    // Apply rotation to analog clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update the digital clock display
    const formattedHours = digitalHours < 10 ? `0${digitalHours}` : digitalHours;
    const formattedMinutes = digitalMinutes < 10 ? `0${digitalMinutes}` : digitalMinutes;
    const formattedSeconds = digitalSeconds < 10 ? `0${digitalSeconds}` : digitalSeconds;
    const amPm = digitalHours >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${formattedHours % 12 || 12}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
