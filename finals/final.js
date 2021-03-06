window.onload = function() {

    // setting varaibles for the game
    var STREAK = 6;
    var EMPTY = 0;
    var RED = 1;
    var YELLOW = 2;
    var WIDTH = 7;
    var HEIGHT = 6;
    var X_SIZE = 100;
    var Y_SIZE = 101;
    var XOFF = 15;
    var YOFF = 6;
    var DIRS = [
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, 1]
    ];
    //creating varaibles for different audio sounds used for the game.
    var WIN_SOUND = new Audio("http://www.freesfx.co.uk/rx2/mp3s/9/10060_1361272688.mp3");
    var DRAW_SOUND = new Audio("http://www.freesfx.co.uk/rx2/mp3s/9/10182_1367780534.mp3");
    var DROP_SOUNDS = [new Audio("http://www.freesfx.co.uk/rx2/mp3s/7/8668_1354102011.mp3"),
      new Audio("http://www.freesfx.co.uk/rx2/mp3s/7/8669_1354102011.mp3")
    ];
    var CLEAR_SOUND = new Audio("http://www.freesfx.co.uk/rx2/mp3s/7/8671_1354102012.mp3");

    //setting varaibles for the various elements used.
    var previewPiece;
    var piecesPlayed;
    var board = document.querySelector("#board");
    var playerSpan = document.querySelector("#player");
    var pieces = document.querySelector("#pieces");
    var turn = YELLOW;
    var grid;
    var finished = false;

    function eventToColumn(event) {
      var column = Math.floor(event.offsetX / 90);
      if (column < 0) {
        column = 0
      };
      if (column + 1 > WIDTH) {
        column = WIDTH - 1
      };
      return column;
    }

    function reset() {
       var piecesToRemove =  document.querySelectorAll(".circle");
        for (var i = 0; i < piecesToRemove.length; i++) {
            piecesToRemove[i].remove();
        }
      board.addEventListener("mousemove", onBoardMove);
    board.addEventListener("click", onBoardClicked);

       var gamePieces = pieces.querySelectorAll("div.circle");
      if (gamePieces.length > 0) {
        for (var i = 0; i < gamePieces.length; i++) {
          var piece = gamePieces[i];
          piece.style.top = "1500px";
           piece.style.bottom ="1000px";
        }
        CLEAR_SOUND.play();
      }
      grid = [ // transposed for simplicity
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      piecesPlayed = 0;
      turn = YELLOW;
      finished = false;
      hidePreview();

        nextTurn();

      /*setTimeout(function() {
        while (pieces.firstChild) {
          pieces.removeChild(pieces.firstChild);
        }
        nextTurn();
      }, 200)*/
    }
    document.querySelector("#reset").addEventListener("click", reset);

    function onResetClick() {
      reset();
    }

    function onBoardMove(event) {

      if (finished) {
        return;
      }

      var column = eventToColumn(event);
      preivewPiece = createPreviewPiece();
      previewPiece.className = "circle " + (turn === YELLOW ? "yellow" : "red");
      previewPiece.style.left = (XOFF + column * X_SIZE) + "px";
      previewPiece.style.top = (-2 * Y_SIZE / 3) + "px";

    }




    function createPreviewPiece() {
      if (!previewPiece) {
        previewPiece = document.createElement("div");
        pieces.appendChild(previewPiece);
      }
      return previewPiece;
    }

    function hidePreview() {

      if (previewPiece) {

        previewPiece = null;
      }
    }

    function onBoardClicked(event) {
      if (finished) {
        return;
      }
        // circles start from bottom
      var column = eventToColumn(event);
      var row = HEIGHT - 1;
      for (; row >= 0; row--) {
        if (grid[column][row] == EMPTY) {
          break;
        }
      }

      if (row < 0) {
        return;
      }

      playedPiece = createPreviewPiece();
      playedPiece.classList.add("falling");
      grid[column][row] = turn;
      piecesPlayed++;
      playMove(row, column, playedPiece, turn);
      previewPiece = null;
    }

    function playMove(row, column, playedPiece, color) {
      DROP_SOUNDS[Math.floor(2 * Math.random())].play();
      playedPiece.style.left = (XOFF + column * X_SIZE) + "px";
      playedPiece.style.top = (YOFF + row * Y_SIZE) + "px";
      if (checkWin()) {
        setTimeout(function() {
          WIN_SOUND.play();
        }, 250);
        playerSpan.textContent = "Player " + turn + " WINS!!!";
        finished = true;
      } else if (checkDraw(piecesPlayed)) {
        DRAW_SOUND.play();
        playerSpan.textContent = "It's a Tie";
        finished = true;
      } else {
        nextTurn();
      }
    }

    function checkDraw(piecesPlayed) {
      return piecesPlayed >= (WIDTH * HEIGHT);
    }

    function checkWin() {
      for (var row = 0; row < HEIGHT; row++) {
        for (var col = 0; col < WIDTH; col++) {
          for (var direction = 0; direction < DIRS.length; direction++) {
            var offsets = DIRS[direction];
            var color = grid[col][row];
            if (color > 0 && checkStreakInDirection(col, row, offsets, color) >= STREAK) {
              return true;
            }
          }
        }
      }

      return false;
    }

    function checkStreakInDirection(col, row, offsets, color) {
      var streak = 1;
      for (var i = streak; i < STREAK; i++) {
        col += offsets[0];
        row += offsets[1];
        if (col < 0 || col >= WIDTH || row < 0 || row >= HEIGHT || grid[col][row] != color) {
          break;
        }
        streak++;
      }

      return streak;
    }

    function nextTurn() {

      turn = (turn === YELLOW) ? RED : YELLOW;
      playerSpan.textContent = "PLAYER " + turn + "'S TURN";
    }

    reset();
}
