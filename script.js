const dice1Img = document.querySelector(".dice1 img");
const dice2Img = document.querySelector(".dice2 img");
const dice1Heading = document.querySelector(".dice1 h2");
const dice2Heading = document.querySelector(".dice2 h2");

const play = () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1Img.setAttribute("src", `${randomNumber1}.jpg`);

  dice2Img.setAttribute("src", `${randomNumber2}.jpg`);
  if (randomNumber1 > randomNumber2) {
    dice1Heading.innerHTML = "Player 1 Wins!!!";
    dice2Heading.innerHTML = "Player 2 Lose!!!";
    dice1Heading.style.color = "red";
    dice2Heading.style.color = "rgb(170, 27, 236)";

    dice1Heading.style.color;
  } else if (randomNumber1 < randomNumber2) {
    dice1Heading.innerHTML = "Player 1 Lose!!!";
    dice2Heading.innerHTML = "Player 2 Wins!!!";
    dice1Heading.style.color = "rgb(170, 27, 236)";
    dice2Heading.style.color = "red";
  } else {
    dice1Heading.innerHTML = "Draw!!!";
    dice2Heading.innerHTML = "Draw!!!";
    dice1Heading.style.color = "yellow";
    dice2Heading.style.color = "yellow";
  }
};
