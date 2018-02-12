var teclas = {
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var miColor = 'black';
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea(miColor, x-1, y-1, x+1, y+1, papel);

function changeColor() {
  miColor = document.getElementById('miColor').value;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento){

  //if(evento.keyCode == teclas.UP)//

    //console.log("vamos pa arriba");/
//  if(evento.keyCode == teclas.DOWN)//
    //console.log("vamos pa abajo");//
  var colorcito = miColor;
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      console.log(colorcito);
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    //default:
    //console.log("otra tecla");
  //  break;
  }
}
