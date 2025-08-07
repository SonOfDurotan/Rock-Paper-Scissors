console.log("This thing on");

//Need to make a function that first
//chooses a random integer between 0-2,
//then assigns rock, paper, or scissors
//to the number, depending on which
//number was chosen

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


//function getComputerChoiceRaw() {
//    return getRandomIntInclusive(0, 2);
//}


  let humanScore = 0;
  let computerScore = 0;

  //Need to write a function that prompts the user for a
  //choice of R-P-S (ignoring case), then compares that
  //value with a randomly generated one from the computer,
  //then logs who was victorious and informs the user. It
  // also needs to keep score between the two competitors
  // and increment the victor's score after each round.

function playRound() {
  let choice1 = getRandomIntInclusive(0,2);
  function getComputerChoice1() {
     if (choice1 === 2) {
         return "Rock";
     } else if (choice1 === 1) {
         return "Paper";
     } else {
         return "Scissors";
    }    
  }
  let response1 = prompt("Rock, paper, or scissors?");
      function getHumanChoice1() {
     if (response1.toLowerCase() === "rock") {
        return "Rock";
            } else if (response1.toLowerCase() === "paper") {
        return "Paper";
    } else {
        return "Scissors";
            }
    }

  console.log("You chose: " + getHumanChoice1(response1))
  console.log("The computer chose: " + getComputerChoice1(choice1))

    if (getHumanChoice1(response1) === "Rock" && getComputerChoice1(choice1) === "Scissors") {
      humanScore++;
      return "You won this round because Rock beats Scissors!";
    } else if (getHumanChoice1(response1) === "Paper" && getComputerChoice1(choice1) === "Rock") {
      humanScore++;
      return "You won this round because Paper beats Rock!";
    } else if (getHumanChoice1(response1) === "Scissors" && getComputerChoice1(choice1) === "Paper") {
      humanScore++;
      return "You won this round because Scissors beats Paper!";
    } else if (getHumanChoice1(response1) === "Rock" && getComputerChoice1(choice1) === "Paper") {
      computerScore++;
      return "You lost this round because Paper beats Rock. :(";
    } else if (getHumanChoice1(response1) === "Paper" && getComputerChoice1(choice1) === "Scissors") {
      computerScore++;
      return "You lost this round because Scissors beats Paper. :(";
    } else if (getHumanChoice1(response1) === "Scissors" && getComputerChoice1(choice1) === "Rock") {
      computerScore++;
      return "You lost this round because Rock beats Scissors. :(";
    } else {
      return "This round was a draw, because you and the computer made the same choice. -_-";
    }
  }
  console.log("Your score is: " + humanScore)
  console.log("The computer's score is: " + computerScore)
  function endGame() {
    if (humanScore > computerScore) {
      console.log("You reached 5 points before the computer! Victory!");
    } else if (computerScore > humanScore) {
      console.log("The computer reached 5 points before you! Defeat!");
    }
  }
  function playGame() {
    console.log(playRound());
    if (humanScore < 5 && computerScore < 5) {
      playGame();
    }
    else {
      endGame();
    }
}

playGame();