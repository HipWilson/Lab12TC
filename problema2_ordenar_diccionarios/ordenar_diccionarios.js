// Problema 2: ordenar una lista de diccionarios según un key, usando lambdas.

// Lambda comparadora: compara dos diccionarios por el key indicado.
const comparar = (key) => (a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);

// Lambda principal: copia la lista (no la modifica) y la ordena.
const ordenarPor = (lista, key) => [...lista].sort(comparar(key));

const telefonos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];

console.log("Ordenado por key = 'model':");
console.dir(ordenarPor(telefonos, 'model'), { depth: null });

console.log("\nOrdenado por key = 'make':");
console.dir(ordenarPor(telefonos, 'make'), { depth: null });
