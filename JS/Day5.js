
/**
 * Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos.
 */

function timeUntilTakeOff(fromTime, takeOffTime) {
let pattern = /[*@\| ]/;
const fts = fromTime.split(pattern);
const tots = takeOffTime.split(pattern);

const fromDate = new Date(Date.UTC(fts[0], fts[1]-1, fts[2], fts[3], fts[4], fts[5]));
const takeOffDate = new Date(Date.UTC(tots[0], tots[1]-1, tots[2], tots[3], tots[4], tots[5]));

const diffInSeconds = Math.floor((takeOffDate.getTime() - fromDate.getTime())) / 1000;
return diffInSeconds;
}

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// justo en el momento exacto
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
// 0

// 12 segundos después del despegue
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))