// 1. Filtra i prodotti in stock
// Filtra solo i prodotti in magazzino (inStock: true).

const prodotti = [
  { nome: "Laptop", inStock: true },
  { nome: "Mouse", inStock: false },
  { nome: "Tastiera", inStock: true },
  { nome: "Monitor", inStock: false },
];

const inStockTrue = prodotti.filter((x) => x.inStock);

console.log(inStockTrue);

// 2. Estrai i nomi dei prodotti
// Dato lo stesso array prodotti, crea un array con solo i nomi dei prodotti.

const onlyName = prodotti.map((x) => x.nome);
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
