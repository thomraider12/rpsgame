const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

function computerPlay() {
  const choices = ["pedra", "papel", "tesoura"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empatado!";
  } else if (
    (playerSelection === "pedra" && computerSelection === "tesoura") ||
    (playerSelection === "papel" && computerSelection === "pedra") ||
    (playerSelection === "tesoura" && computerSelection === "papel")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "Ganhaste! " + playerSelection + " ganha ao/à " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Perdeste! " + computerSelection + " ganha ao/à " + playerSelection;
  }
}
