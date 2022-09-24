const startGameButton = document.querySelector("#start-button");
const board = document.querySelector("#horca").getContext("2d");
let secretWord = "";
let letters = [];

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

const checkLettersInserted = (key) => {
  let estado = false;
  if (
    (key >= 65 && letters.indexOf(key)) ||
    (key <= 90 && letters.indexOf(key))
  ) {
    letters.push(key);
    console.log(key);
    return estado;
  } else {
    estado = true;
    console.log(key);
    return estado;
  }
};

const startGame = () => (e) => {
  e.preventDefault();
  startGameButton.style.display = "none";
  chooseSecretWord();
  drawCanvas();
  drawLine();

  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    checkLettersInserted(letter);
  };
};

startGameButton.addEventListener("click", startGame());
