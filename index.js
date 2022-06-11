var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function () {
  setGame();
}

function setGame() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      if (r == 0 || r == 1) {
        tile.classList.add("horizontal-line");
      }
      if (c == 0 || c == 1) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", setTile);
      document.getElementById("board").append(tile);
    }
  }
}

function setTile() {
  if (gameOver) {
    return;
  }

  let coords = this.id.split("-")
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  board[r][c] = currPlayer;
  this.innerText = currPlayer;

  if (currPlayer == playerO) {
      currPlayer = playerX;
  }
  else {
    currPlayer = playerO;
  }
}
