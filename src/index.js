const startGameButton = document.querySelector("#start-button");
const board = document.querySelector("#horca").getContext("2d");
let secretWord = "";
let letters = [];
let mistakes = 8;

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

const addIncorrectWord = () => {
  mistakes = -1;
  console.log(mistakes);
};

const startGame = () => (e) => {
  e.preventDefault();
  startGameButton.style.display = "none";
  chooseSecretWord();
  drawCanvas();
  drawLine();

  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    if (checkLettersInserted(words) && secretWord.includes(words)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === words) {
          writeCorrectLetter(i);
        }
      }
    } else {
      addIncorrectWord(words);
      writeIncorrectWord(words, mistakes);
    }
  };
};

startGameButton.addEventListener("click", startGame());
