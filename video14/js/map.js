//utilizando map, el cual es similar a filter
var arreglo = [1, 4, 6, 8, 3, 67]
    //obtener el cuadrado de un número
var cuadrados = arreglo.map(function(elemento) {
    return elemento * elemento;
});

console.log("video 15-MAP");
console.log(cuadrados);