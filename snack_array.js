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
