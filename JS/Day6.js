/**
 * In Santa's workshop, the elves have found a mountain of magical gloves in complete disarray. Each glove is described by two values:

hand: indicates whether it is a left (L) or right (R) glove
color: the color of the glove (string)
Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.

You must return a list with the colors of all the pairs found. Keep in mind that there may be several pairs of the same color. The order is determined by whichever pair can be made first.
 */

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */

function matchGloves(gloves) {
  const seen = {}
  const pairs = []

  for (let i = 0; i < gloves.length; i++) {
    const { hand, color } = gloves[i]

    if (!seen[color]) {
      seen[color] = { L: 0, R: 0, firstIndex: i }
    }

    seen[color][hand]++

    if (seen[color].L > 0 && seen[color].R > 0) {
      pairs.push(seen[color])
      seen[color].L--
      seen[color].R--
    }
  }

  pairs.sort((a, b) => a.firstIndex - b.firstIndex)

  return pairs.map(p => gloves[p.firstIndex].color)
}
