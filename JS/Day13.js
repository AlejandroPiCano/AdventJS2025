/*
Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función runFactory(factory).

factory es un string[] donde cada celda puede ser:

> < ^ v movimientos
. salida correcta
Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

Resultado

Devuelve uno de estos valores:

'completed' si llega a un .
'loop' si visita una posición dos veces
'broken' si sale fuera del tablero
 */



/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  let row = 0;
  let col = 0;
  const visited = {};
  while (true) {
   
    if (row < 0 || row >= factory.length || col < 0 || col >= factory[0].length) {
      return 'broken';
    }
    
    const cell = factory[row][col];
    
    if(cell === '.') {
        return 'completed';
   }

   if(visited[`${row},${col}`]) {
         return 'loop';
   }
   visited[`${row},${col}`] = true;
   switch(cell) {
       case '>':
           col++;
           break;
        case '<':
            col--;
            break;
        case '^':
            row--;
            break;
        case 'v':
            row++;
            break;
   }      
}
}


console.log(
  "Test 1:",
  runFactory([
    '>>.'
  ]),
  "→ esperado:",
  'completed'
);

console.log(
  "Test 2:",
  runFactory([
    '>>>'
  ]),
  "→ esperado:",
  'broken'
);

console.log(
  "Test 3:",
  runFactory([
    '>><'
  ]),
  "→ esperado:",
  'loop'
);

console.log(
  "Test 4:",
  runFactory([
    '>>v',
    '..<'
  ]),
  "→ esperado:",
  'completed'
);

console.log(
  "Test 5:",
  runFactory([
    '>>v',
    '<<<'
  ]),
  "→ esperado:",
  'broken'
);

console.log(
  "Test 6:",
  runFactory([
    '>v.',
    '^..'
  ]),
  "→ esperado:",
  'completed'
);

console.log(
  "Test 7:",
  runFactory([
    'v.',
    '^.'
  ]),
  "→ esperado:",
  'loop'
);
