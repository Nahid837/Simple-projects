// Analog Clock Hands and Digital Clock
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digitalClock = document.getElementById('digital-clock');

function updateClock() {
    const now = new Date();

    // Calculate Bangladesh Time (GMT+6)
    const bangladeshOffset = 6 * 60 * 60 * 1000; // GMT+6 in ms
    const bangladeshTime = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + bangladeshOffset);

    const hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();
    const milliseconds = bangladeshTime.getMilliseconds();

    // Degrees for Clock Hands
    const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 30° per hour, 0.5° per minute
    const minuteDeg = minutes * 6 + seconds * 0.1; // 6° per minute, 0.1° per second
    const secondDeg = seconds * 6 + milliseconds * 0.006; // 6° per second, 0.006° per millisecond

    // Apply Rotations
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update Digital Clock
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

// Update Clock Every 50ms for Smooth Animation
setInterval(updateClock, 50);

// Initialize Clock Immediately
updateClock();
