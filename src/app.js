window.onload = function() {
  randomCard();
};

const buttonRandom = document.querySelector(".randomButtom");
buttonRandom.addEventListener("click", randomCard);

function randomCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const randomSuits = Math.floor(Math.random() * suits.length);
  const randomValue = Math.floor(Math.random() * value.length);
  const suit = suits[randomSuits];
  const val = value[randomValue];
  if (randomSuits == 0 || randomSuits == 1) {
    document.querySelector(".top").classList.replace("spade", "heart");
    document.querySelector(".bottom").classList.replace("spade", "heart");
    document.querySelector(".number").classList.replace("spade", "heart");
    document.querySelector(".color").classList.replace("black", "red");
  } else {
    document.querySelector(".top").classList.replace("heart", "spade");
    document.querySelector(".bottom").classList.replace("heart", "spade");
    document.querySelector(".number").classList.replace("heart", "spade");
    document.querySelector(".color").classList.replace("red", "black");
  }
  document.querySelector(".top").innerHTML = `${suit}`;
  document.querySelector(".bottom").innerHTML = `${suit}`;
  document.querySelector(".number").innerHTML = `<p>${val}</p>`;
  document.querySelector(".color").innerHTML = `${val} ${suit}`;
}
