//cambia el color del fondo
function colorchange()
{var seleccion = document.getElementById("myseleccion").value;
document.getElementById("texto").innerHTML = "Seleccionaste: "+ seleccion;
document.body.style.backgroundColor = seleccion;
}
//cambia el color del texto
function changecolor_text()
{var colortxt =  document.getElementById("texto_color").value ; 
t.style.color = colortxt;
}
//ejecutamos el prompt
//var dato = prompt("ingresa un color","0");
//console.log(dato);
//var resultado = changecolor2_text(dato);
//cambiar el color del texto con prompt, c será el texto ingresado en prompt
function changecolor2_text(c)
{ 
    if(c == "rojo")
    {text2.style.color = "#EB1440";
    document.getElementById("mensaje").innerHTML = "color: "+c;
    }else if(c == "verde"){
        text2.style.color = "green";
        document.getElementById("mensaje").innerHTML = "color: "+c;
    }else{
        //lo pondremos en una etiqueta html
        document.getElementById("mensaje").innerHTML = "ERROR, color no válido";
    }  
}

//con botones
function changecolor_boton(color)
{document.body.style.backgroundColor =  color;
}