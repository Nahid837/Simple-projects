// Select clock hands
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// Function to update the clock
function updateClock() {
  const now = new Date();

  // Get current hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate degrees for each hand
  const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes; // Hour hand movement
  const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;     // Minute hand movement
  const secondDeg = (360 / 60) * seconds;                         // Second hand movement

  // Apply the rotation
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initial call to display the time instantly
updateClock();
