/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let life1 = 3;
  let life2 = 3;
  elf1 = elf1.toUpperCase();
  elf2 = elf2.toUpperCase();

  for (let i = 0; i < Math.max(elf1.length, elf2.length); i++) {    
    const move1 = elf1[i] || '';
    const move2 = elf2[i] || '';

    if(move1 ==  'A')
    {
        if( move2 == 'A') 
        {
           life2--;
           life1--;
        }
        else if( move2 == 'F')
        {
           life2--;
           life1-=2
        }
    }
    else if( move1 ==  'F')
    {
        life2-=2;
        if( move2 == 'A') 
        {
           life1--;           
        }
        else if( move2 == 'F')
        {
           life1-=2;           
        }        
    }
    else if( move1 ==  'B')
    {
         if( move2 == 'F')
        {
           life1-=2;           
        }
    }

    if(life1 == 0 || life2 == 0)
    {
        break;
    }
  }

  return life1 == life2 ? 0 : life1 > life2 ? 1 : 2;
}


function elfBattle(elf1, elf2) {
  const VALID_MOVES = new Set(['A', 'B', 'F']);

const DAMAGE_RULES = {
  A: { A: [1, 1], F: [2, 1], B: [0, 0] },
  F: { A: [1, 2], F: [2, 2], B: [0, 2] },
  B: { A: [0, 0], F: [2, 0], B: [0, 0] }
};

function resolveRound(move1, move2) {
  if (!VALID_MOVES.has(move1) || !VALID_MOVES.has(move2)) {
    return [0, 0];
  }
  return DAMAGE_RULES[move1][move2];
}

function normalizeElfMoves(elf) {
  return elf
    .toUpperCase()
    .split('')
    .filter(move => VALID_MOVES.has(move));
}

  let life1 = 3;
  let life2 = 3;

  const moves1 = normalizeElfMoves(elf1);
  const moves2 = normalizeElfMoves(elf2);

  const rounds = Math.max(moves1.length, moves2.length);

  for (
    let i = 0;
    i < rounds && life1 > 0 && life2 > 0;
    i++
  ) {
    const move1 = moves1[i];
    const move2 = moves2[i];
    
    if (!move1 || !move2) continue;

    const [damage1, damage2] = resolveRound(move1, move2);

    life1 -= damage1;
    life2 -= damage2;
  }

  if (life1 === life2) return 0;
  return life1 > life2 ? 1 : 2;
}



console.log(
  `elfBattle('A', 'B') → resultado: ${elfBattle('A', 'B')} | esperado: 0`
);

console.log(
  `elfBattle('F', 'B') → resultado: ${elfBattle('F', 'B')} | esperado: 1`
);

console.log(
  `elfBattle('AAB', 'BBA') → resultado: ${elfBattle('AAB', 'BBA')} | esperado: 0`
);

console.log(
  `elfBattle('AFA', 'BBA') → resultado: ${elfBattle('AFA', 'BBA')} | esperado: 1`
);

console.log(
  `elfBattle('AFAB', 'BBAF') → resultado: ${elfBattle('AFAB', 'BBAF')} | esperado: 1`
);

console.log(
  `elfBattle('AA', 'FF') → resultado: ${elfBattle('AA', 'FF')} | esperado: 2`
);
