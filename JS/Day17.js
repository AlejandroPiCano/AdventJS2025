/*
En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan
 */

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length;
  if (rows === 0) return false;
  const cols = board[0].length;
  if (cols === 0) return false;


  if (rows < 4 && cols < 4) return false;


  const checkSequence = (a, b, c, d) => {
    return a !== '.' && a === b && b === c && c === d;
  };


  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (checkSequence(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3])) {
        return true;
      }
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      if (checkSequence(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c])) {
        return true;
      }
    }
  }

  return false;
}
