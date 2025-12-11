/**
 El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.
*/
/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  function isUnsafe(warehouse, row, col) {
  const maxRow = warehouse.length - 1;
  const maxCol = warehouse[row].length - 1;
  
  const isTopSafe = row === 0 || warehouse[row - 1][col] !== '#';
  const isBottomSafe = row === maxRow || warehouse[row + 1][col] !== '#';
  const isLeftSafe = col === 0 || warehouse[row][col - 1] !== '#';
  const isRightSafe = col === maxCol || warehouse[row][col + 1] !== '#';
  
  return isTopSafe && isBottomSafe && isLeftSafe && isRightSafe;
}
  let result = 0;
  
  for(let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      if(warehouse[i][j] === '*' && isUnsafe(warehouse, i, j)) {
        result++;
      }
    }
  }
  
  return result;
}


console.log(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
])); // ➞ 0
// Todos los regalos están junto a una cámara

console.log(findUnsafeGifts([
  '...',
  '.*.',
  '...'
])); // ➞ 1
// Este regalo no tiene cámaras alrededor

console.log(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
])); // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

console.log(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
])); // ➞ 4
