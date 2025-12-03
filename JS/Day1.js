/**
 * Santa has received a list of gifts, but some are defective. A gift is defective if its name contains the # character.

Help Santa by writing a function that takes a list of gift names and returns a new list that only contains the non-defective gifts.
 */

/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
   return gifts.filter(gift => !gift.includes('#'));
}
