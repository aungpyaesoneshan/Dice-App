const dice1 = document.querySelector(".dice1 img");
const dice2 = document.querySelector(".dice2 img");
const dice1Heading = document.querySelector(".dice1Heading");
const dice2Heading = document.querySelector(".dice2Heading");

const play = () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1.setAttribute("src", `${randomNumber1}.jpg`);
  dice2.setAttribute("src", `${randomNumber2}.jpg`);
  if (randomNumber1 > randomNumber2) {
    dice1Heading.innerHTML = "Player 1 Wins!!!";
    dice2Heading.innerHTML = "Player 2 Lose!!!";
    dice1Heading.style.color = "red";
    dice2Heading.style.color = "rgba(128, 128, 128, 0.719)";

    dice1Heading.style.color;
  } else if (randomNumber1 < randomNumber2) {
    dice1Heading.innerHTML = "Player 1 Lose!!!";
    dice2Heading.innerHTML = "Player 2 Wins!!!";
    dice1Heading.style.color = "rgba(128, 128, 128, 0.719)";
    dice2Heading.style.color = "red";
  } else {
    dice1Heading.innerHTML = "Draw!!!";
    dice2Heading.innerHTML = "Draw!!!";
    dice1Heading.style.color = "yellow";
    dice2Heading.style.color = "yellow";
  }
};
