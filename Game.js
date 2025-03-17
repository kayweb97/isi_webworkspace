const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const PL1 = document.querySelector("#PL1");
const PL2 = document.querySelector("#PL2");
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
p1button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      PL1.classList.add("winner");
      PL2.classList.add("looser");
    }
    PL1.textContent = p1Score;
  }
});
p2button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      PL2.classList.add("winner");
      PL1.classList.add("looser");
    }
    PL2.textContent = p2Score;
  }
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  PL1.textContent = 0;
  PL2.textContent = 0;
  PL1.classList.remove("winner", "looser");
  PL2.classList.remove("winner", "looser");
}
