var template = `Luis`;
console.log(template);

var cadena = "hola          mundo ";
console.log(cadena);

//interpolación
var interpolación = `Hola ${template} estamos imprimiendo una interpolación`;
var inter2 = `Bienvenido ${"codigo"+" facilito"}, ya es de noche`;
console.log(interpolación);
console.log(inter2);

//tagged templates
console.log("Tagges template");

function tagged(cadena, valor) {
    console.log(cadena);
    console.log(valor);
}
var accion = "programar";
tagged `Hola, buenos días ${"Luis"+"francisco"}, es un buen día para ${"programar"}`;