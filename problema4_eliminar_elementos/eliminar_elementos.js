// Problema 4: eliminar de una lista los elementos indicados, usando lambdas.

// Conserva solo los elementos que NO están en la lista a borrar.
// Si un elemento a borrar no existe en la lista original, se ignora.
const eliminar = (lista, aBorrar) => lista.filter((x) => !aBorrar.includes(x));

const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const aBorrar = ['amarillo', 'cafe', 'blanco'];

console.log('Lista inicial:  ', colores);
console.log('A borrar:       ', aBorrar);
console.log('Lista resultado:', eliminar(colores, aBorrar));
