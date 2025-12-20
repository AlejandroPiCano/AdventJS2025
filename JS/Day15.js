/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe tener:

Cabecera con letras de columna (A, B, C…).
El contenido de la tabla son los valores de los objetos.
Los valores deben estar alineados a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.
*/ 

/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  if (!data.length) return '';
  const keys = Object.keys(data[0]);
  const columnHeaders = keys.map((_, i) => String.fromCharCode(65 + i));
  const sampleValue = data[0][sortBy];
  const isNumber = typeof sampleValue === 'number';
  data.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (isNumber) return valA - valB;
    return String(valA).localeCompare(String(valB));
  });
  const colWidths = keys.map((key, i) => {
    const headerWidth = columnHeaders[i].length;
    const maxDataWidth = Math.max(...data.map(row => String(row[key]).length));
    return Math.max(headerWidth, maxDataWidth) + 2; // espacio a izquierda y derecha
  });
  const drawLine = () => '+' + colWidths.map(w => '-'.repeat(w)).join('+') + '+';
  const drawRow = (values) =>
    '|' + values.map((v, i) => ' ' + String(v).padEnd(colWidths[i] - 1, ' ')).join('|') + '|';
  const table = [
    drawLine(),
    drawRow(columnHeaders),
    drawLine(),
    ...data.map(row => drawRow(keys.map(k => row[k]))),
    drawLine()
  ];
  return table.join('\n');
}