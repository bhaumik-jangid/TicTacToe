let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let playerO = true;

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
        document.querySelector(
          ".result"
        ).innerText = `Congratulations, Winner is ${pos1}`;
        document.querySelector(".winner").classList.remove("hide");
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
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
    element.classList.remove("blue");
    element.classList.remove("red");
  });
  document.querySelector(".winner").classList.add("hide");
});
newGame.addEventListener("click", () => {
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
    element.classList.remove("blue");
    element.classList.remove("red");
  });
  document.querySelector(".winner").classList.add("hide");
});
