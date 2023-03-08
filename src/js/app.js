
const secondHand = document.querySelector('.second-hand'); //Declare variable outside function to give it global scope
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) +90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
const minsHand = now.getSeconds();
const minsDegrees = (seconds / 60) * 360 + 90;
minsHand.style.transform = `rotate(${secondsDegrees}deg)`;

}

setInterval(setDate, 1000);