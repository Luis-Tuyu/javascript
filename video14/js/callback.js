//por la duda con e callback decidi practica con esto, yo del futuro
a1 = [2, 4, 8, 9]

function saludar(nombre) {
    alert("hola " + nombre)
}

function proc_entrada_us(callback) {
    var nombre = prompt('ingresa nombre');
    callback(nombre);
}

proc_entrada_us(saludar);