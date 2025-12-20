/*
¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los tramos de su viaje, pero están todos desordenados.

Tu misión es reconstruir la ruta completa desde el origen hasta el destino final.

Ten en cuenta: El primer elemento del array es siempre el primer tramo del viaje. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.
*/

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  if (!Array.isArray(routes) || routes.length === 0) {
    return [];
  }

  const routeMap = new Map();
  const destinations = new Set();

  for (const route of routes) {
    if (!Array.isArray(route) || route.length < 2) {
      return [];
    }
    routeMap.set(route[0], route[1]);
    destinations.add(route[1]);
  }

  let start = null;

  for (const origin of routeMap.keys()) {
    if (!destinations.has(origin)) {
      start = origin;
      break;
    }
  }

  if (start === null) {
    return [];
  }

  const result = [start];
  let current = start;

  while (routeMap.has(current)) {
    const next = routeMap.get(current);
    result.push(next);
    routeMap.delete(current);
    current = next;
  }

  return result;
}