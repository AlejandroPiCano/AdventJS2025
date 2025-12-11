/**
 * Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.
 */
/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const rows = board.trim().split('\n');

  let startRow = -1;
  let startCol = -1;

  for (let r = 0; r < rows.length; r++) {
    const c = rows[r].indexOf('@');
    if (c !== -1) {
      startRow = r;
      startCol = c;
      break;
    }
  }

  let row = startRow;
  let col = startCol;
  let success = false;

  const deltas = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };

  for (const mv of moves) {
    const [dr, dc] = deltas[mv];
    const newRow = row + dr;
    const newCol = col + dc;

    if (
      newRow < 0 || newRow >= rows.length ||
      newCol < 0 || newCol >= rows[0].length
    ) {
      return success ? 'success' : 'crash';
    }

    const cell = rows[newRow][newCol];

    if (cell === '#') {
      return success ? 'success' : 'crash';
    }

    if (cell === '*') success = true;

    row = newRow;
    col = newCol;
  }

  return success ? 'success' : 'fail';
}