// Problema 3: matriz transpuesta (lista de listas) usando lambdas.

// La fila j de la transpuesta es la columna j de la original.
const transpuesta = (X) => X[0].map((_, j) => X.map((fila) => fila[j]));

const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('X =');
console.dir(X, { depth: null });
console.log('\nXT =');
console.dir(transpuesta(X), { depth: null });

// Funciona también con matrices no cuadradas.
console.log('\nY (2x3) =');
const Y = [
  [1, 2, 3],
  [4, 5, 6],
];
console.dir(Y, { depth: null });
console.log('\nYT (3x2) =');
console.dir(transpuesta(Y), { depth: null });
