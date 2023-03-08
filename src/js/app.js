function testJs(event) {
  if (event.key === "t") {
    const bodyElement = document.querySelector("body");
    const messageElement = document.createElement("span");
    messageElement.textContent =
      "I am connected and working Ryan. You may proceed";
    bodyElement.appendChild(messageElement);
  }
}

document.addEventListener("keydown", testJs);
// I have been deleting this but then i thought it might be helpful and someone else might find it cool
// like i did. you have to test to see if you are connected right?. This is a function that does that.

