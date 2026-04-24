//1 Dato un array di numeri, stampa solo i numeri pari.
const x = [1, 2, 3, 4, 5, 6];
const y = [];
for (i = 0; i < x.length; i++) {
  if (x[i] % 2 === 0) {
    y.push(x[i]);
  }
}

console.log(y);

//2 Dato un array di numeri, crea un nuovo array con i numeri maggiori di 10.
const arrayEser2 = [4, 12, 7, 25, 3, 18];
const arrayOver10 = [];

for (i = 0; i < arrayEser2.length; i++) {
  if (arrayEser2[i] > 10) {
    arrayOver10.push(arrayEser2[i]);
  }
}

console.log(arrayOver10);

const test = arrayEser2.filter((x) => x > 10);

console.log(test);

//3 Dato un array di stringhe, restituisci un array con la lunghezza di ogni parola.

const arrayString = ["ciao", "javascript", "dev"];
const stringLength = [];

arrayString.forEach((x) => stringLength.push(x.length));

console.log(stringLength);

// 4 Dato un array di oggetti utenti, trova il primo utente con età maggiore di 30.

const utenti = [
  { nome: "Luca", eta: 25 },
  { nome: "Anna", eta: 32 },
  { nome: "Marco", eta: 28 },
  { nome: "Marco", eta: 35 },
];

for (i = 0; i < utenti.length; i++) {
  if (utenti[i].eta > 30) {
    console.log(utenti[i]);
    break;
  }
}

const utentiOver30 = utenti.find((x) => x.eta > 30);
console.log(utentiOver30);
