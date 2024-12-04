const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const tickSound = document.getElementById('tick-sound');

function updateClock() {
    const now = new Date();

    // Convert to Bangladeshi Time (GMT+6)
    const bangladeshTime = new Date(now.getTime() + 6 * 60 * 60 * 1000);

    const hours = bangladeshTime.getHours() % 12;
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();

    // Correct degree calculations
    const hourDeg = (360 / 12) * hours + (30 / 60) * minutes;
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds; // Include seconds for smoother movement
    const secondDeg = (360 / 60) * seconds;

    // Apply rotation to the clock hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Play tick sound (optional)
    tickSound.play();
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
