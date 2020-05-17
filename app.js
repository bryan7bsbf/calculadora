
/* Examen de la calculadora*/
var calculador = {
init: function () {

var operandoa;
var operandob;
var operacion;
var punto = document.getElementById("punto")
var pantalla = document.getElementById("display")
pantalla.textContent = "0"
}
}

calculador.init();
/* variables*/
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var menos = document.getElementById("menos");
var mas = document.getElementById("mas");
var por = document.getElementById("por");
var dividido =document.getElementById("dividido");
var igual = document.getElementById("igual");
var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var punto = document.getElementById("punto");

/* eventos teclas*/
tecla = document.querySelectorAll('.tecla')
/*efectos teclas*/
for (var i = 0; i < tecla.length; i++) {
tecla[i].addEventListener('mousedown', function() {
this.style.transform="scale(0.9)"
})
}
for (var i = 0; i < tecla.length; i++) {
tecla[i].addEventListener('mouseup', function() {
this.style.transform="scale(1)"
})
}

function mostrar(num){
if (display.innerHTML.length < 8 ) {
if (display.innerHTML == "0") {
display.innerHTML = num
}else{
display.innerHTML += num
}
}
}


uno.onclick=(function(){
mostrar("1")
})
dos.onclick=(function(){
mostrar("2")
})
tres.onclick=(function(){
mostrar("3")
})
cuatro.onclick=(function(){
mostrar("4")
})
cinco.onclick=(function(){
mostrar("5")
})
seis.onclick=(function(){
mostrar("6")
})
siete.onclick=(function(){
mostrar("7")
})
ocho.onclick=(function(){
mostrar("8")
})
nueve.onclick=(function(){
mostrar("9")
})
cero.onclick=(function(){
mostrar("0")
})
/*Funcion del punto*/
punto.onclick=("click",function(){
if(display.textContent==="0"){
display.textContent+=".";
}else if(display.textContent.indexOf(".")!=-1){
display.textContent+="";
}else{
display.textContent+=".";
}
})


/* eventos operaciones*/
on.onclick = function (e) {
 resetear();
 display.textContent= display.textContent + "0";
}
mas.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "+"
 limpiar();
}
menos.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "-"
 limpiar();
}
por.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "*"
 limpiar();
}
dividido.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "/"
 limpiar();
}
igual.onclick = function (e) {
 operandob = display.textContent;
 resolver();

}
sign.onclick = function (e) {
 operandoa = display.textContent;
 operacion = "*"
 operandob = -1
 resolver();
}

function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion= "";
}

function resolver(num){

var res = 0;

switch (operacion) {
case "+":
res = parseFloat(operandoa) + parseFloat(operandob);
break;
case "-":
res = parseFloat(operandoa) - parseFloat(operandob);
break;
case "*":
res = parseFloat(operandoa) * parseFloat(operandob);
break;
case "/":
res = parseFloat(operandoa) / parseFloat(operandob);
break;
case "+/-":
res = parseFloat(operandoa) * parseFloat(operandob);
break;
}



resetear();
display.textContent= res;
}
