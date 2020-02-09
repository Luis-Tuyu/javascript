//notación utilizada para sustituir la palabra funciton
var num = [1, 3, 4, 6, 7, 8];
var cuadrado = num.map((n) => {
    return n * n;
});


console.log(cuadrado);

//ejemplos
function tutor() {
    this.nombre = "uriel";

    setTimeout(() => {
        this.nombre = "código facilito";
    }, 500);
}

var tutor1 = new tutor();
console.log(tutor1.nombre);

setTimeout(function() { console.log(tutor1.nombre); }, 1000);