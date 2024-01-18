let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let playerO = true;
let score1 = 0;
let score2 = 0;
//confirm("Welcome to Tic Tac Toe game\nPlease enter your player's name in the next prompt. If you prefer not to enter a name, you can skip this step.");
let player1;
let player2;

player1 = player1 != null ? player1 : "Player1";
player2 = player2 != null ? player2 : "Player2";
document.querySelector("#player1").innerHTML = player1 + "<sub>(O)</sub>";
document.querySelector("#player2").innerHTML = player2 + "<sub>(X)</sub>";

winpat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winner = () => {
  for (let pattern of winpat) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        win = pos1 === "O" ? player1 : player2;
        document.querySelector(
          ".result"
        ).innerText = `Congratulations, Winner is ${win}`;
        document.querySelector(".winner").classList.remove("hide");
        if (pos1 === "X") {
          score2++;
        } else {
          score1++;
        }
        document.querySelector("#score1").innerText = score1;
        document.querySelector("#score2").innerText = score2;
        btn.forEach((element) => {
          element.disabled = true;
        });
      }
    }
  }
};

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (playerO) {
      element.innerText = "O";
      element.classList.add("red");
      playerO = false;
    } else {
      element.innerText = "X";
      element.classList.add("blue");
      playerO = true;
    }
    element.disabled = true;
    winner();
  });
});

reset.addEventListener("click", () => {
  playerO = true;
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
    element.classList.remove("blue");
    element.classList.remove("red");
  });
  document.querySelector(".winner").classList.add("hide");
});
newGame.addEventListener("click", () => {
  playerO = true;
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
    element.classList.remove("blue");
    element.classList.remove("red");
  });
  document.querySelector(".winner").classList.add("hide");
});
