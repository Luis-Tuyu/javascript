//utilizando filter
var numeros = [1, 4, 7, 2, 5, 9];

//solucion sin filter
/*var num_pares = [];

for (var i = numeros.length; i >= 0; i--) {
    var num = numeros[i];
    if (num % 2 == 0) {
        num_pares.push(num);
    }
}
console.log("imprimiendo por consola" + num_pares);
*/


//mejor forma de hacerlo
var num_pares = numeros.filter(function(num) {
    return num % 2 == 0;
});
console.log("numeros pares: " + num_pares);

//filter es un atributo de un arreglo y tiene como parametro una funcion 
//su proposito es crear un nuevo arreglo