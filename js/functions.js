function circulo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("circulo");
}
function arriba(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("arriba");
}
function abajo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("abajo");
}
function rectangulovertical(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rectangulovertical");
}

function rectangulohorizontal(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rectangulohorizontal");
}
function derecha(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("derecha");
}
function izquierda(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("izquierda");
}
function diagonalasuperior(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("diagonalasuperior");
}
function diagonalinferior(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("diagonalinferior");
}
function rombo(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("rombo");
}
function imagen(){
    var selector=document.getElementById("figura");
        selector.className=" ";
        selector.classList.toggle("imagen");
}

// capturamos los valores de los campos atraves de sus id y el atributo .value para darle funcion a los datos capturados

function capturardatos (){
    var nombre = document.getElementById("cNombres").value;
    var edad = document.getElementById("cEdad").value;
    var nacimiento = document.getElementById("cFecha").value;
    var genero = document.getElementById("cGenero").value;
    var email = document.getElementById("cemail").value;
    var descripcion = document.getElementById("dDescripcion").value;
    var color = document.getElementById("ccolor").value;
    

// CAPTURAMOS los parrafos donde mostraremos la informacion

var name = document.getElementById("mNombres");
var age = document.getElementById("mEdad");
var date = document.getElementById("mFecha");
var gene = document.getElementById("mGenero");
var correo = document.getElementById("memail");
var description = document.getElementById("mDescripcion");

name.textContent = nombre;
age.textContent = edad;
date.textContent = nacimiento;
gene.textContent = genero;
correo.textContent = email;
description.textContent = descripcion;
   

// capturamos el contenedor del avatar para luego cambiar su color de fondo

var selector = document.getElementById("card-avatar");
// if (color == "amarillo") {
// selector.style.backgroundColor = "#00000";
// }else if(color == "Azul"){
    // selector.style.backgroundColor = "#2396bd" 
// } 
// esta es una opcion para que el color cambie en el captur datos
switch (color) {
    case "rojo":
        selector.style.backgroundColor="#f3290e";
        
        break;
    case "amarillo":
        selector.style.backgroundColor="#f7e706";

        break;
    case "azul":
        selector.style.backgroundColor="#6579e8";
        break;
        
}

// capturar la foto del avatar para cambiarla segun su foto de genero

var imgAvatar = document.getElementById("foto");

if (genero == "Masculino") {
    imgAvatar.src = "img/avatarhom1.png";
} else if (genero == "Femenino") {
    imgAvatar.src = "img/avatarmu1.png";
    
} else if (genero == "otro") {
    imgAvatar.src = "img/avatar.png";
    
}

}

function devolver (){
    var nombre = document.getElementById("cNombres").value;
    var edad = document.getElementById("cEdad").value;
    var nacimiento = document.getElementById("cFecha").value;
    var genero = document.getElementById("cGenero").value;
    var email = document.getElementById("cemail").value;
    var descripcion = document.getElementById("dDescripcion").value;
    var color = document.getElementById("ccolor").value;

}