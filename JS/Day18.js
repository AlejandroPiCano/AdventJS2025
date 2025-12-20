/*
El panel de luces navideñas 🎄✨ del taller ha sido un éxito total. Pero los elfos quieren ir un paso más allá: ahora quieren detectar si hay una línea de 4 luces del mismo color también en diagonal.

El panel sigue siendo una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Ahora tu función debe devolver true si existe una línea de 4 luces del mismo color encendidas y alineadas, ya sea horizontal ↔, vertical ↕ o diagonal ↘↙.
* */

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const rows = board.length;
  if (rows === 0) return false;

  const cols = board[0].length;
  if (cols === 0) return false;

  if (rows < 4 && cols < 4) return false;

  const check = (a, b, c, d) =>
    a !== '.' && a === b && b === c && c === d;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (c <= cols - 4 &&
          check(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3])) {
        return true;
      }

      if (r <= rows - 4 &&
          check(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c])) {
        return true;
      }

      if (r <= rows - 4 && c <= cols - 4 &&
          check(
            board[r][c],
            board[r + 1][c + 1],
            board[r + 2][c + 2],
            board[r + 3][c + 3]
          )) {
        return true;
      }

      if (r <= rows - 4 && c >= 3 &&
          check(
            board[r][c],
            board[r + 1][c - 1],
            board[r + 2][c - 2],
            board[r + 3][c - 3]
          )) {
        return true;
      }
    }
  }

  return false;
}