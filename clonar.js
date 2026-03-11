const notas = [7, 7, 8, 9];

/* const nota = 9.75;
const novaNota = nota; 

let nota = 9.75;
let novaNota = nota;

nota = 10;

const novaListaNotas = notas;

novaListaNotas.push(10);
*/

const novaListaNotas = [...notas, 10];

console.log(notas);
console.log(novaListaNotas);
