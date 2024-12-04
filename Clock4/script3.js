const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // 12-hour format

    const secondsDegree = ((seconds / 60) * 360) + 90; // 90 is to offset the default rotation
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();
