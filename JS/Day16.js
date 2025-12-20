/*
Santa quiere repartir regalos de la forma más eficiente posible 🎁. Tiene una lista de regalos, cada uno con un peso, y un trineo que solo puede cargar hasta un peso máximo.

Los regalos se entregan en orden, y Santa no puede cambiar ese orden. Cuando un regalo no cabe en el trineo actual, Santa envía el trineo y prepara uno nuevo.

Tu tarea es escribir una función que calcule el número mínimo de trineos necesarios para entregar todos los regalos.

Eso sí, ten en cuenta que a veces hay un regalo que no cabe en el trineo, entonces hay que devolver null porque ese trineo no sirve para ese pack de regalos.
*/ 

/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */

function packGifts(gifts, maxWeight) {
  if(gifts.length ==0)
    return 0
  let result = 1;
  let currentPack = 0;
  
  
  for(let i=0;i<gifts.length;i++)
  {
    let gift = gifts[i];
    if(currentPack + gift <= maxWeight)
    {
      currentPack+=gift;
    }
    else if(gift <= maxWeight)
    {
      currentPack = gift;
      result++;
    }
    else
    {
      return null
    }
  }

  return result;
}