/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    
  function dfs(maze, i, j) {  
    if (i < 0 || i >= maze.length || j < 0 || j >= maze[0].length || maze[i][j] === '#') {
      return false;
    }
    if (maze[i][j] === 'E') {
      return true;
    }
    maze[i][j] = '#'; // marcar como visitado
    return dfs(maze, i + 1, j) || dfs(maze, i - 1, j) || dfs(maze, i, j + 1) || dfs(maze, i, j - 1);
  }
  let initI = maze.findIndex(r => r.findIndex(c => c === 'S') !== -1);
  let initJ = maze[initI].findIndex(c => c === 'S');

  return dfs(maze, initI, initJ);  
}


console.log(
  canEscape([
    ['S', '.', '#', '.'],
    ['#', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
  ]),
  'expected → true'
)

console.log(
  canEscape([
    ['S', '#', '#'],
    ['.', '#', '.'],
    ['.', '#', 'E']
  ]),
  'expected → false'
)

console.log(
  canEscape([['S', 'E']]),
  'expected → true'
)

console.log(
  canEscape([
    ['S', '.', '.', '.', '.'],
    ['#', '#', '#', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '#', '#', '#', '#'],
    ['.', '.', '.', '.', 'E']
  ]),
  'expected → true'
)

console.log(
  canEscape([
    ['S', '.', '.'],
    ['.', '.', '.'],
    ['#', '#', '#'],
    ['.', '.', 'E']
  ]),
  'expected → false'
)
