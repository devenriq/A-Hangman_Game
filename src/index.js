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
  let charKey = key.charCodeAt(0);
  if (
    (charKey >= 65 && letters.indexOf(key)) ||
    (charKey <= 90 && letters.indexOf(key))
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
  mistakes -= 1;
  console.log(mistakes);
};

const startGame = () => (e) => {
  e.preventDefault();
  startGameButton.style.display = "none";
  chooseSecretWord();
  drawCanvas();
  drawLine();

  document.onkeydown = (e) => {
    let downLetter = e.key;
    let upperLetter = e.key.toUpperCase();
    if (!checkLettersInserted(upperLetter) && secretWord.includes(downLetter)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === downLetter) {
          writeCorrectLetter(i);
          console.log(secretWord[i]);
        }
      }
    } else {
      addIncorrectWord();
      writeIncorrectWord(upperLetter, mistakes);
      console.log("second");
    }
  };
};

startGameButton.addEventListener("click", startGame());
