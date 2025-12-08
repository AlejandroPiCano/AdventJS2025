
function findUniqueToySolutionOne(toy) { 
  for (let i = 0; i < toy.length; i++) {
    if( toy.toLowerCase().substring(i + 1).indexOf(toy[i].toLowerCase()) == -1 &&
       ( toy.toLowerCase().substring(0, i).indexOf(toy[i].toLowerCase()) == -1) )   {
      return toy[i];
    }
    
  }
  return ''
}

function findUniqueToySolution2(toy) {
  const toyLC = toy.toLowerCase();
  const freq = {};
  
  for (const char of toyLC) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < toy.length; i++) {
    if (freq[toyLC[i]] === 1) return toy[i];
  }

 

console.log(findUniqueToySolution2('Gift'))      // 'G'
console.log(findUniqueToySolution2('sS'))        // ''
console.log(findUniqueToySolution2('reindeeR'))  // 'i'

console.log(findUniqueToySolution2('AaBbCc'))    // ''
console.log(findUniqueToySolution2('abcDEF'))    // 'a'
console.log(findUniqueToySolution2('aAaAaAF'))   // 'F'
console.log(findUniqueToySolution2('sTreSS'))    // 'T'
console.log(findUniqueToySolution2('z'))         // 'z'
console.log(findUniqueToySolution2(''))          // ''