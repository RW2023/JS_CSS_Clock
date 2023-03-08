
const secondHand = document.querySelector('.secondHand'); //Declare variable outside function to give it global scope

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds/60) * 360;
  console.log(seconds);
}

