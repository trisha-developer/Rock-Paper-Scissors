let userScore = 0;
      let compScore = 0;

      const choices = document.querySelectorAll(".choice");
      const msg = document.querySelector("#msg");
      const userScorePara = document.querySelector("#user-score");
      const compScorePara = document.querySelector("#comp-score");
      const resetBtn = document.querySelector("#reset-btn");

      const options = ["rock", "paper", "scissors"];

      const genCompChoice = () =>
        options[Math.floor(Math.random() * options.length)];

      const drawGame = () => {
        msg.textContent = "Game was a Draw! Play Again";
        msg.style.backgroundColor = "cornflowerblue";
      };

      const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
          userScorePara.textContent = ++userScore;
          msg.textContent = `You Won! ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
        } else {
          compScorePara.textContent = ++compScore;
          msg.textContent = `You Lost! ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor = "crimson";
        }
      };

      const playGame = (userChoice) => {
        const compChoice = genCompChoice();

        if (userChoice === compChoice) {
          return drawGame();
        }

        const userWin =
          (userChoice === "rock" && compChoice === "scissors") ||
          (userChoice === "paper" && compChoice === "rock") ||
          (userChoice === "scissors" && compChoice === "paper");

        showWinner(userWin, userChoice, compChoice);
      };

      choices.forEach(choice => {
        choice.addEventListener("click", () => {
          playGame(choice.id);
        });
      });
      const resetGame = () => {
        userScore = 0;
        compScore = 0;

        userScorePara.textContent = 0;
        compScorePara.textContent = 0;

        msg.textContent = "Play your move";
        msg.style.backgroundColor = "cornflowerblue";
      };
      resetBtn.addEventListener("click", resetGame);