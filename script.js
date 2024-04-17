const targetDisplay = document.querySelector(".target__display");
const targetNumber = document.querySelector(".target__number");
const currentDisplay = document.querySelector(".current__display");
const currentNumber = document.querySelector(".current__number");
const addButton = document.querySelector(".increment__button");
const resetButton = document.querySelector(".reset__button");
const statusWords = document.querySelector(".status");
const statusData = document.querySelector(".status__data");
const playGameButton = document.querySelector(".play__game__button");
const mainContainer = document.querySelector(".main__container");
const headerContainer = document.querySelector(".header__container");

const randomTargetNumber = Math.floor(Math.random() * 150 + 50);
let current = 0;
let gameOver = false;

targetNumber.innerText = randomTargetNumber;

//Functions

function playGame() {
  mainContainer.style.display = "block";
  headerContainer.style.display = "none";
  playGameButton.style.display = "none";
  statusWords.style.visibility = "hidden";
  current = 0;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function addNumbers() {
  resetButton.style.display = "none";
  addButton.style.display = "block";
  statusWords.style.visibility = "visible";

  if (gameOver) return;

  const randomAddition = Math.floor(Math.random() * 20);
  current += randomAddition;
  currentNumber.innerText = current;
  statusNumber = randomTargetNumber - current;
  statusData.innerHTML = statusNumber >= 0 ? statusNumber : "NO";
  if (randomTargetNumber < current) {
    currentDisplay.style.color = "red";
    gameOver = true;
    resetButton.style.display = "block";
    addButton.style.display = "none";
  }
  if (randomTargetNumber === current) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  if (statusData.innerHTML < 50) {
    statusData.style.color = "red";
  }
}

//Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  resetButton.style.display = "none";
  mainContainer.style.display = "none";
});

playGameButton.addEventListener("click", playGame);

addButton.addEventListener("mousedown", addNumbers);

resetButton.addEventListener("click", () => location.reload());
