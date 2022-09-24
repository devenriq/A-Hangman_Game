const drawCanvas = () => {
  board.lineWith = 8;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#cbd5e1";
  board.strokeStyle = "#8A3871";

  board.fillRect(0, 0, 1200, 860);
  board.beginPath();
  board.moveTo(650, 500);
  board.lineTo(900, 500);
  board.stroke();
  board.closePath();
};

const drawLine = () => {
  board.lineWith = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#cbd5e1";
  board.strokeStyle = "#8A3871";

  const width = 600 / secretWord.length;
  for (let i = 0; i < secretWord.length; i++) {
    board.moveTo(500 + width * i, 640);
    board.lineTo(540 + width * i, 640);
  }
  board.stroke();
  board.closePath();
};

const writeCorrectLetter = (index) => {
  board.font = "bold 53px Inter";
  board.lineWith = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#cbd5e1";

  let anchura = 600 / secretWord.length;
  board.fillText(secretWord[index], 505 + anchura * index, 620);
  board.stroke();
};

const writeIncorrectWord = (word, errorsLeft) => {
  board.font = "bold 40px Inter";
  board.lineWith = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#cbd5e1";
  board.fillText(word, 535 + 40 * (10 - errorsLef), 710, 40);
};
