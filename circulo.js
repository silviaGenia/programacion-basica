var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var ai, bi;
var colorcito = "#FAA";

for(l = 0; l < lineas; l++){
  yi = 10 * l;
  xf = 10 * ( l + 1);
dibujarLinea(colorcito, 0, yi, xf, 300);
console.log("linea " + l);
l = l + 1;
}

for(l = 0; l < lineas; l++){
  ai = 10 * l;
  bf = 10 * ( l + 1);
dibujarLinea(colorcito, 300, ai, bf, 0);
console.log("linea " + l);
l = l + 1;
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 300, 300, 300);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

  lienzo.beginPath();
  lienzo.stroKesStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
