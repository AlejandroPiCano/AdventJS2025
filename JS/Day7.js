/*
It’s time to decorate the Christmas tree 🎄! Write a function that receives:

height → the height of the tree (number of rows).
ornament → the ornament character (for example, "o" or "@").
frequency → how often (in asterisk positions) the ornament appears.
The tree is drawn with asterisks *, but every frequency positions, the asterisk is replaced by the ornament.

The position counting starts at 1, from the top to the bottom, left to right. If frequency is 2, the ornaments appear in positions 2, 4, 6, etc.

The tree must be centered and have a one-line trunk # at the end.
 */

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = "";
  let pos = 1;

  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let row = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
      row += (pos % frequency === 0) ? ornament : "*";
      pos++;
    }

    result += spaces + row + "\n";
  }

  result += " ".repeat(height - 1) + "#";
  return result;
}