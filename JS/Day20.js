
/*
En el taller de Santa, los elfos están guardando regalos 🎁 en un almacén vertical. Los regalos se dejan caer uno a uno por una columna y se van apilando.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función dropGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
*/

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  for (const col of drops) {
    for (let row = warehouse.length - 1; row >= 0; row--) {
        if (warehouse[row][col] == '.') {
            warehouse[row][col] = '#';
            break;
        }
    }
  }
  return warehouse;
}

function logTest(inputGrid, drops, expected) {
  const result = dropGifts(
    JSON.parse(JSON.stringify(inputGrid)), // copia profunda
    drops
  );

  console.log('Resultado:');
  console.table(result);

  console.log('Esperado:');
  console.table(expected);

  const isEqual =
    JSON.stringify(result) === JSON.stringify(expected);

  console.log(isEqual ? '✅ OK' : '❌ ERROR');
  console.log('--------------------------');
}

// TEST 1
logTest(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0],
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '.']
  ]
);

// TEST 2
logTest(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2],
  [
    ['#', '.', '.'],
    ['#', '#', '#'],
    ['#', '#', '#']
  ]
);

// TEST 3
logTest(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2],
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '#', '#']
  ]
);

// TEST 4
logTest(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0],
  [
    ['#', '#'],
    ['#', '#']
  ]
);