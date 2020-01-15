//permite iterar cad uno de los elementos del arreglo   
var nums = [1, 5, 7, 3, 7, 8, 2];
console.log("Usando foreach");
nums.forEach(function(elemento, index, arreglo) {
    console.log(elemento);
    console.log(index);
    console.log(arreglo);
});

console.log("elevar al cuadrado un elemento");
//elevar al cuadrado todos los números del arreglo
nums.forEach(function(elemento2, index2, arreglo2) {
    arreglo2[index2] = Math.pow(elemento2, 2);
    console.log(arreglo2[index2]);
});

console.log(nums);