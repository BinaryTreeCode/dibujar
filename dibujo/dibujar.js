var input_final = document.getElementById("punto_final");
var input_Y = document.getElementById("pocición_en_Y");
var circule_color = document.getElementById("paleta_color");

var h = document.getElementById("hoja");
var lienzo = h.getContext("2d");  

var imagen = new Image();
imagen.src = "canvas.png";

imagen.onload = function ()
{
    lienzo.drawImage(imagen,0,0);
}

var input_inicial = document.getElementById("punto_inical");
var final_value;
var inicio_value;
var color_value;

var boton = document.getElementById("botoncito");
boton.addEventListener("click", linea_vertical);

function linea_vertical()
{
    inicio_value = parseInt(input_inicial.value);
    final_value = parseInt(input_final.value);
    posicion_value = parseInt(input_Y.value);

    color = ("black");
    inicio = inicio_value * 50;
    final = final_value * 50;
    posicion = posicion_value * 50;
    dibujar_linea(color, posicion, inicio, posicion, final);
}

function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
