// 1. Filtra i prodotti in stock
// Filtra solo i prodotti in magazzino (inStock: true).

const prodotti2 = [
  { nome: "Laptop", inStock: true },
  { nome: "Mouse", inStock: false },
  { nome: "Tastiera", inStock: true },
  { nome: "Monitor", inStock: false },
];

const inStockTrue = prodotti2.filter((x) => x.inStock);

console.log(inStockTrue);

// 2. Estrai i nomi dei prodotti
// Dato lo stesso array prodotti, crea un array con solo i nomi dei prodotti.

const onlyName = prodotti2.map((x) => x.nome);
console.log(onlyName);

// 3. Trova il primo utente premium
const utenti = [
  { nome: "Luca", isPremium: false },
  { nome: "Anna", isPremium: true },
  { nome: "Marco", isPremium: false },
  { nome: "Giada", isPremium: true },
];

const firstPremium = utenti.find((x) => x.isPremium);

console.log(firstPremium);

// 4. Stampa i nomi in maiuscolo
// Usa forEach per stampare in console il nome di ogni studente con la prima lettera maiuscola (es. "Mario", "Luca", "Chiara").

const studenti = [
  { nome: "mario", eta: 20 },
  { nome: "luca", eta: 22 },
  { nome: "chiara", eta: 19 },
];

const primaMaiusc = studenti.map(
  (x) => x.nome.split("").at([0]).toUpperCase() + x.nome.slice(1),
);

// studenti.forEach((stud) => {
//   const capitalized = stud.nome.charAt(0).toUpperCase() + stud.nome.slice(1);
//   console.log(capitalized);
// });

console.log(primaMaiusc);

// 5. Crea un array con nome e prezzo scontato
const prodotti = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 25 },
  { nome: "Tastiera", prezzo: 70 },
];

const prodottiScontati = prodotti.map((x) => ({
  nome: x.nome,
  prezzoScontato: x.prezzo * 0.9,
}));

console.log(prodottiScontati);
