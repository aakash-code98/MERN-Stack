let playGame = confirm("Shall we play Rock, Paper, Scissors");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter Rock, Paper or Scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const rpsArray = ["rock", "paper", "scissors"];
        const computerChoice = Math.floor(Math.random() * 3);
        const computer = rpsArray[computerChoice];
        
        let result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
            : playerOne === "paper" && computer === "scissors"
            ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
            : playerOne === "scissors" && computer === "rock"
            ? `Your move: ${playerOne}\nComputer's move: ${computer}\n Computer WINS!!`
            : `Your move: ${playerOne}\nComputer's move: ${computer}\n You WIN!!`;
        alert(result);
        playGame = confirm("Play again?");
        if(!playGame) alert("Ok, Thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper, scissors.");
        continue;
      }
    } else {
      alert("It seems you changed your mind. Then, see you next time.");
      break;
    }
  }
} else {
  alert("May be next time.");
}
