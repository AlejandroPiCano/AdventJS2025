/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  if (tree1.value != tree2.value) return [false, tree1?.value || '']
 
    if(tree1.left && !tree2.right) return [false, tree1.value]
    if(!tree1.left && tree2.right) return [false, tree1.value]
    if(tree1.right && !tree2.left) return [false, tree1.value]
    if(!tree1.right && tree2.left) return [false, tree1.value]

    if(!tree1.left && !tree1.right && !tree2.left && !tree2.right) {
        return [true, tree1.value]
    }

    const leftResult = isTreesSynchronized(tree1.left, tree2.right)
    const rightResult = isTreesSynchronized(tree1.right, tree2.left)

    return [leftResult[0] && rightResult[0], tree1.value]    
}



const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}


console.log(isTreesSynchronized(tree1, tree2)) 
// [true, '🎄']

console.log(isTreesSynchronized(tree1, tree3)) 
// [false, '🎄']

console.log(isTreesSynchronized(tree1, tree4)) 
// [false, '🎄']

console.log(
  isTreesSynchronized(
    { value: '🎅' },
    { value: '🧑‍🎄' }
  )
) 
// [false, '🎅']
