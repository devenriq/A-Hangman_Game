const startGameButton = document.querySelector("#start-button");
const board = document.querySelector("#horca").getContext("2d");
const secretWord = "";

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
  let word = palabras[Math.floor(Math.random() * words.length)];
};

const startGame = () => (e) => {
  e.preventDefault();
  startGameButton.style.display = "none";
};

startGameButton.addEventListener("click", startGame());
