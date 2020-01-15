//ordenar números en js con sort
function ordenar(a,b)
{if(a>b)
    {
        return 1;
    }else if(b>a)
    {return -1;
    }else if(a ==  b){return 0;}
    //return a -b, esto es lo mismo que arriba
}
var arreglo = [2,5,1,10,20];
//pasamos como argumento una funcion
arreglo.sort(ordenar); //sirve para ordenarlo de manera unicode, es decir alfabeticamente
console.log(arreglo);

var arreglo2=['a','b', 'z', 'j'];
arreglo2.sort();
console.log(arreglo2);

//invertir arreglo
arreglo2 =  arreglo2.reverse();
console.log(arreglo2);

//convertir una cadena en un arreglo
var arreglo_string = "h,o,l,a,c,o,m,o,e,s,t,a,s".split(",");
console.log(arreglo_string);

//pasar de un arreglo a una cedena
var cadena =  arreglo_string.join("-");
console.log("una cadena separado con ,"+cadena);