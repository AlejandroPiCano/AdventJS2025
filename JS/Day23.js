/*
MEDIO
Tu puntuación:

Papá Noel 🎅 tiene que repartir regalos en un pueblo representado como un mapa en cuadrícula.

Cada celda del mapa puede ser:

'S' → Punto de partida de Papá Noel
'G' → Casa que debe recibir un regalo
'.' → Camino libre
'#' → Obstáculo (no se puede pasar)
Papá Noel realiza entregas independientes para cada regalo. Sale de 'S', entrega el regalo en una casa 'G' y vuelve inmediatamente a 'S' para recoger el siguiente. Sin embargo, para este reto, solo queremos calcular la suma de las distancias mínimas de ida desde 'S' hasta cada casa 'G'.

Tu tarea

Escribe la función minStepsToDeliver(map) que devuelva el número total de pasos necesarios para llegar a todas las casas con regalos desde la posición inicial.

Ten en cuenta:

Siempre se parte de la posición inicial 'S'.
Para cada regalo, calcula la distancia mínima desde 'S' hasta esa casa 'G'.
No puedes atravesar obstáculos ('#').
Si alguna casa con regalo es inalcanzable, la función debe devolver -1.
 */

/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const rows = map.length
  const cols = map[0].length

  let start
  const gifts = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 'S') start = [i, j]
      if (map[i][j] === 'G') gifts.push([i, j])
    }
  }

  const queue = [[...start, 0]]
  const distances = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  )
  distances[start[0]][start[1]] = 0

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  while (queue.length) {
    const [x, y, d] = queue.shift()

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        map[nx][ny] !== '#' &&
        distances[nx][ny] > d + 1
      ) {
        distances[nx][ny] = d + 1
        queue.push([nx, ny, d + 1])
      }
    }
  }

  let total = 0

  for (const [x, y] of gifts) {
    if (distances[x][y] === Infinity) return -1
    total += distances[x][y]
  }

  return total
}