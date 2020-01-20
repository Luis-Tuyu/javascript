//utilizamdo reduce
var letras = ["H", "o", "l", "a"];

//lo podemos unir con join
palabra = letras.join("");
console.log(palabra);

//lo haremos con reduce
var palabra2 = letras.reduce(function(valor_ant_retornado, valor_actual, index, arreglo) {
    return valor_ant_retornado + valor_actual;
});
//H
//Ho
//Hol
//Hola

console.log("palabra2 : " + palabra2);

//sumar todos los números de un arreglo
var num = [1, 2, 4, 5, 6, 7]
var suma = num.reduce(function(v_ant, v_actual, index, arreglo) {
    return v_ant + v_actual;

}, 5); //si podemos el 5 aqui le damos valor al valor anterior retornado, podemos omitirlo
console.log("imprimir la suma delos valores: " + suma);

//si lo hiciera con un for, son equivalente, solo que uno lleva menos codigo
var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum += num[i];

}
console.log("suma con for: " + sum);