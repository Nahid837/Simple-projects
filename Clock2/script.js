const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const tickSound = document.getElementById('tick-sound');
const soundToggle = document.getElementById('sound-toggle');

function updateClock() {
    const now = new Date();

    // Extract the current time
    const hours = now.getHours(); // Local time
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the angles for the clock hands
    const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes; // Hour hand
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;     // Minute hand
    const secondDeg = (360 / 60) * seconds;                         // Second hand

    // Apply rotations to the hands
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Play the tick sound if enabled
    if (soundToggle.checked) {
        if (tickSound.paused) {
            tickSound.play();
        } else {
            tickSound.currentTime = 0;
        }
    }
}

// Use requestAnimationFrame for smoother updates
function smoothUpdate() {
    updateClock();
    requestAnimationFrame(smoothUpdate);
}

// Initialize the clock
smoothUpdate();
