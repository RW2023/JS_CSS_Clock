
// The following code selects the second hand, minute hand, and hour hand using the class names from the HTML.
const secondHand = document.querySelector('.second-hand'); //Declare variable outside function to give it global scope
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// The setDate function retrieves the current date and time, and calculates the degrees that each hand needs to be rotated based on the current time.
function setDate() {
  const now = new Date(); // get current date and time
  const seconds = now.getSeconds(); // get current seconds
  const secondsDegrees = (seconds / 60) * 360 + 90; // calculate the degree for seconds
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // update seconds hand position
//Same items are repeated for other  hands on the clock
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotates(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);