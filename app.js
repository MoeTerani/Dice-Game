/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//document.querySelector("#current-" + activePlayer).textContent = dice;

/* document.querySelector("#current-" + activePlayer).innerHTML =
 "<em>" + dice + "</em>";
*/
let getter = document.querySelector("#score-0").textContent;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-1").textContent = "0";

// callback function is not called by us rather than its called by another function
function btn() {
  //role the dice
}

btn();
// anonymus function is a function without a name that cannot be reused or recalled.
document.querySelector(".btn-roll").addEventListener(
  "click",
  /* if write our function here instead , it will be an anonymus function*/
  function() {
    // 1-random dice number
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    // 2- Display the correct dice number
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    // 3- Update the round score if the dice number is NOT 1
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      roundScore = 0;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      switchPlayer();
      activePlayerStyle();
      hideDice();
    }
  }
);
//will be changing the active player number between 0 and 1
function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}

// WIll add the active class to the active player and remove it from the other

function activePlayerStyle() {
  //   document
  //     .querySelector(".player-0-panel")
  //     .classList.remove("active");
  //   document
  //     .querySelector(".player-1-panel")
  //     .classList.add("active");
  //toggle method add a class if it doesn't exist and remove it if it already exist.

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

//hide the dice

function hideDice() {
  document.querySelector(".dice").style.display = "none";
}
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  switchPlayer();
  activePlayerStyle();
  hideDice();
});
