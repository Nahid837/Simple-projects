const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digitalClock = document.getElementById('digital-clock');

function updateClock() {
    const now = new Date();

    // Adjust Bangladesh time properly
    const localOffset = now.getTimezoneOffset() * 60 * 1000; // Local offset in milliseconds
    const bangladeshOffset = 6 * 60 * 60 * 1000; // Bangladesh offset in milliseconds (GMT+6)
    const bangladeshTime = new Date(now.getTime() + localOffset + bangladeshOffset);

    const hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();

    // Correct degree calculations
    const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes;
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
    const secondDeg = (360 / 60) * seconds;

    // Apply rotation to the clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update the digital clock to match
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const amPm = hours >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${formattedHours % 12 || 12}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

// Call `updateClock` every 1000ms for synchronization
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
