function clic() {
    alert("xd");
}

//del segundo boton donde esta el div
//nombre del id         //  click, funcion, condicion
document.getElementById("b1").addEventListener("click", clic2, true);
document.getElementById("mi_div").addEventListener("click", another_clic, false)

function clic2() {
    alert("alerta2");
}

function another_clic() {
    alert("esto fue disparado por el otro botón");
}