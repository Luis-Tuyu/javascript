function clic() {
    alert("xd");
}

//del segundo boton donde esta el div
//nombre del id         //  click, funcion, condicion
document.getElementById("b1").addEventListener("click", clic2,true);
document.getElementById("mi_div").addEventListener("click", another_clic,false)
//agregagmos un listener para cambiar de fondo con listener
document.getElementById("b2").addEventListener("click", change_color);
function clic2() {
    alert("alerta2");
}

function another_clic() {
    alert("esto fue disparado por el otro botón");
}

function change_color()
{
    document.body.style.backgroundColor = "red";
    console.log("cambio de de fondo a rojo");
}