/*
En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

Reglas:

El objeto tiene como máximo 3 niveles de profundidad.
El valor a buscar aparece como mucho una vez.
El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
Si el valor no existe, devuelve un array vacío.
*/

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  
 for (const key in workshop) {
   if(workshop[key] === gift) {
       return [key];
   }
   if(typeof workshop[key] === 'object') {
        const path = findGiftPath(workshop[key], gift);
        if(path.length > 0) {
           return [key, ...path];       
        }
    }
 }
  return [];
}

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(
  "Test 1 (train):",
  findGiftPath(workshop, 'train'),
  "→ esperado:",
  ['storage', 'shelf', 'box1']
);

console.log(
  "Test 2 (switch):",
  findGiftPath(workshop, 'switch'),
  "→ esperado:",
  ['storage', 'shelf', 'box2']
);

console.log(
  "Test 3 (car):",
  findGiftPath(workshop, 'car'),
  "→ esperado:",
  ['storage', 'box']
);

console.log(
  "Test 4 (doll):",
  findGiftPath(workshop, 'doll'),
  "→ esperado:",
  ['gift']
);

console.log(
  "Test 5 (plane):",
  findGiftPath(workshop, 'plane'),
  "→ esperado:",
  []
);
