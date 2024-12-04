const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const digitalClock = document.querySelector(".digital-clock");

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate Degrees for Each Hand
    const secondsDegree = (seconds / 60) * 360; // Full circle in 60 seconds
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6; // Minute moves gradually
    const hoursDegree = (hours % 12 / 12) * 360 + (minutes / 60) * 30; // Hour moves with minutes

    // Apply rotations to hands
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    // Update Digital Clock
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid delay
