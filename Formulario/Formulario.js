document.addEventListener("DOMContentLoaded",cargar,false);
document.getElementsById("lapiz").addEventListener("click",habilitar,false);

function cargar(){
    document.getElementById("suma").addEventListener("click",nuevaFila);
}


function nuevaFila(){

    var nodoPadre = document.getElementById("divGeneral");

    
    var fila = document.createElement("div");
    fila.classList.add("fila");

    var dni= document.createElement("div");
    var textoDni = document.createTextNode("DNI");
    var inputDni = document.createElement("input");

    dni.classList.add("dni");

    var nombre = document.createElement("div");
    var textoNombre = document.createTextNode("Nombre");
    var inputNombre = document.createElement("input");

    nombre.classList.add("nombre");
    
    var apellidos = document.createElement("div");
    var textoApellidos = document.createTextNode("Apellidos");
    var inputApellidos = document.createElement("input");
    
    apellidos.classList.add("apellidos");


    
    var borrar = document.createElement("img");
    borrar.setAttribute("src","equis.png");
    borrar.classList.add("equis");

    
    var editar = document.createElement("img");
    editar.setAttribute("src","lapiz.png");
    editar.classList.add("lapiz");
//-----------------------------------------------------------
    nodoPadre.appendChild(fila);

    dni.appendChild(textoDni);
    dni.appendChild(inputDni);
    fila.appendChild(dni);
    
    nombre.appendChild(textoNombre);
    nombre.appendChild(inputNombre);
    fila.appendChild(nombre);

    apellidos.appendChild(textoApellidos);
    apellidos.appendChild(inputApellidos);
    fila.appendChild(apellidos);


    fila.appendChild(borrar);

    fila.appendChild(editar);
    

}

function habilitar(){
    document.getElementById("DNI").disabled=false;
    document.getElementById("Nombre").disabled=false;
    document.getElementById("Apellidos").disabled=false;
    document.getElementById("lapiz").disabled=true;
}