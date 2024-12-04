const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
    const now = new Date();

    // Convert to Bangladeshi Time (GMT+6)
    const bangladeshTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);

    const hours = bangladeshTime.getHours() % 12; // Convert to 12-hour format
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();
    const milliseconds = bangladeshTime.getMilliseconds();

    // Correct degree calculations:
    // - Hour hand considers minutes (1 hour = 30°)
    const hourDeg = (360 / 12) * hours + (30 / 60) * minutes;
    // - Minute hand considers seconds (1 minute = 6°)
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
    // - Second hand considers milliseconds for smooth movement (1 second = 6°)
    const secondDeg = (360 / 60) * seconds + (6 / 1000) * milliseconds;

    // Apply rotation to the clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Call `updateClock` every 50ms for smooth second hand movement
setInterval(updateClock, 50);

// Initialize clock immediately
updateClock();
