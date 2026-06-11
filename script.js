let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;

  let winner = "";
  let emoji = "";

  if (userChoice === computerChoice) {
    winner = "It's a Tie!";
    emoji = "😐";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    winner = "You Win! 🎉";
    userScore++;
    emoji = "😎";
  } else {
    winner = "Computer Wins! 💻";
    computerScore++;
    emoji = "💀";
  }

  // Update score display
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;

  // Show result
  document.getElementById("winner").textContent = winner;

  // Animate emoji
  const emojiEl = document.getElementById("emoji");
  emojiEl.textContent = emoji;
  emojiEl.classList.remove("show");
  void emojiEl.offsetWidth; // force reflow
  emojiEl.classList.add("show");
}
// reset button
function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("user-choice").textContent = "";
  document.getElementById("computer-choice").textContent = "";
  document.getElementById("winner").textContent = "";
  document.getElementById("emoji").textContent = "";
}