// elements

let message = document.getElementById("message-container");
const spinOneBtn = document.getElementById("spin-buttonOne");
const spinAll = document.getElementById("spin");
const slotImageOne = document.getElementById("slot-image-one");
const slotImageTwo = document.getElementById("slot-image-two");
const slotImageThree = document.getElementById("slot-image-three");

// begins with empty array
let results = ["", "", ""];

// possible options for each 'spin'
const options = [
  "Images/sailboat.png",
  "Images/torch.png",
  "Images/trojan.png",
  "Images/vessel.png",
  "Images/zeus.png",
];

// functions

function spinOne() {
  defaultMessage();
  let spinInterval = setInterval(function () {
    results[0] = options[Math.floor(Math.random() * 5)];
    slotImageOne.src = results[0];
  }, 200);
  setTimeout(function () {
    clearInterval(spinInterval);
  }, 2500);
  results[0] = options[Math.floor(Math.random() * options.length)];

  setTimeout(spinTwo, 1500);
  setTimeout(spinThree, 3500);
}

function spinTwo() {
  let spinIntervalOne = setInterval(function () {
    results[1] = options[Math.floor(Math.random() * 5)];
    slotImageTwo.src = results[1];
  }, 200);

  setTimeout(function () {
    clearInterval(spinIntervalOne);
  }, 2500);
}

function spinThree() {
  let spinIntervalTwo = setInterval(function () {
    results[2] = options[Math.floor(Math.random() * 5)];
    slotImageThree.src = results[2];
  }, 200);

  setTimeout(function () {
    clearInterval(spinIntervalTwo);
    checkResults();
  }, 2500);
}
function checkResults() {
  if (results[0] && results[0] == results[1] && results[0] == [results[2]]) {
    winMessage();
    function winMessage() {
      document.getElementById("message").innerHTML =
        "today the gods shine upon you!";
    }
  } else {
    loseMessage();
    function loseMessage() {
      document.getElementById("message").innerHTML =
        "no match! the gods are not in your favor.";
    }
  }
}

function defaultMessage() {
  document.getElementById("message").innerHTML = "Forseeing your fate...";
}

// event listener
spinOneBtn.onclick = spinOne;
