/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */

function clearGifts(warehouse, drops) {

    const rows = warehouse.length;
    const cols = warehouse[0].length;

    for (const col of drops) {
        // Caída del regalo
        for (let row = rows - 1; row >= 0; row--) {
            if (warehouse[row][col] === '.') {
                warehouse[row][col] = '#';
                break;
            }
        }

        // Limpieza de filas completas (pueden ser varias)
        let removed = 0;

        for (let r = rows - 1; r >= 0; r--) {
            if (warehouse[r].every(cell => cell === '#')) {
                warehouse.splice(r, 1);
                removed++;
            }
        }

        // Insertar filas vacías arriba
        while (removed--) {
            warehouse.unshift(Array(cols).fill('.'));
        }
    }

    return warehouse;
}


// TEST 1
logClearTest(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1],
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ]
);

// TEST 2
logClearTest(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2],
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ]
);
