function capturar()
{
    var color= prompt("ingresa un color", "");
    return color;
}
var color_us=capturar();
var id=document.getElementById("prueba");
console.log("id:");
console.log(id);
if(color_us === "verde")
{
    console.log("color: "+color_us);
}else if(color_us === "amarillo")
{
    console.log("color: "+color_us)
}else if(color_us === "azul")
{
    console.log("color: "+color_us)
}else if(color_us === "rojo")
{
console.log("color: "+color_us);
}else {
    console.log("Error, recarga la página e ingresa un color valido");
    //obtenedremos un elemento del DOM y lo cambiaremos
    var clas=document.getElementsByClassName("uno");
    console.log("imprimimos la etiqueta", clas);
    
}
//obtener un id

