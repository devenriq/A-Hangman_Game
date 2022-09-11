const startGameButton = document.querySelector("#start-button");
const board = document.querySelector("#horca").getContext("2d");
let secretWord = "";

let words = [
  "cuchara",
  "tenedor",
  "cuchillo",
  "plato",
  "olla",
  "sartén",
  "horno",
  "freidora",
  "refrigeradora",
  "batidora",
  "taza",
  "vaso",
];

const chooseSecretWord = () => {
  let word = words[Math.floor(Math.random() * words.length)];
  secretWord = word;
  console.log(secretWord);
};

const startGame = () => (e) => {
  e.preventDefault();
  startGameButton.style.display = "none";
  chooseSecretWord();
  drawCanvas();
  drawLine();
};

startGameButton.addEventListener("click", startGame());
