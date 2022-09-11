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
