//Variable global fecha
var fechaActual = new Date();
// Definicion de la clase Fruta y las clase fruta verano e invierno hija de la clase fruta
class Fruta {
    constructor(nombre, kilos, precioKilo) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precioKilo = precioKilo;
    }
    getDatos = () => this.nombre + " ---- " + this.kilos + " kilos " + " ---- " + this.precioKilo + " €/kg " + " ---- " + (this.precioKilo * this.kilos).toFixed(2) + " € "
}
class FrutaVerano extends Fruta {
    constructor(nombre, kilos, precioKilo, proximidad, region) {
        super(nombre, kilos, precioKilo);
        this.proximidad = proximidad;
        this.region = region;
    }
    getDatos2 = () => " Las/os " + this.nombre + " es una fruta de verano " + " de " + this.proximidad + " estan recogida en " + this.region;
}
class FrutaInvierno extends Fruta {
    constructor(nombre, kilos, precioKilo, conservacion) {
        super(nombre, kilos, precioKilo);
        this.conservacion = conservacion;
    }
    getDatos2 = () => " Las/os " + this.nombre + " es una fruta de invierno " + " y es recomendable conservalas  " + this.conservacion + " de la nevera ";
}
//Objetos de cada fruta
let arandano = new FrutaVerano("Arandanos", 0, 13.4, "proximidad", "Asturias");
let fresa = new FrutaVerano("Fresas", 0, 3.75, "proximidad", "Huelva");
let manzanaR = new FrutaInvierno("Manzanas Roja", 0, 1.75, "fuera");
let manzanaV = new FrutaInvierno("Manzanas Verde", 0, 2.69, "fuera");
let melon = new FrutaVerano("Melones", 0, 0.75, "proximidad", "Villaconejo");
let naranja = new FrutaInvierno("Naranjas", 0, 2.16, "fuera");
let pera = new FrutaInvierno("Peras", 0, 1.60, "dentro");
let platano = new FrutaInvierno("Platanos", 0, 2.15, "fuera");
let sandia = new FrutaVerano("Sandias", 0, 2.75, "proximidad", "Murcia");
let uvas = new FrutaInvierno("Uvas", 0, 1.75, "dentro");
//Array que contiene los objetos fruta
var arrayFrutas = [arandano, fresa, manzanaR, manzanaV, melon, naranja, pera, platano, sandia, uvas];
//funcion para la suma de kilos para todas la frutas
function sumaFruta(nombre) {
    switch (nombre) {
        case "arandano":
            kilos = Number(document.getElementById("arandanokilos").value)
            arandano.kilos = kilos + arandano.kilos
            anadirtextoDiv(arandano, nombre)
            break;
        case "fresa":
            kilos = Number(document.getElementById("fresakilos").value)
            fresa.kilos = kilos + fresa.kilos
            anadirtextoDiv(fresa, nombre)
            break;
        case "manzanaR":
            kilos = Number(document.getElementById("manzanaRkilos").value)
            manzanaR.kilos = kilos + manzanaR.kilos
            anadirtextoDiv(manzanaR, nombre)
            break;
        case "manzanaV":
            kilos = Number(document.getElementById("manzanaVkilos").value)
            manzanaV.kilos = kilos + manzanaV.kilos
            anadirtextoDiv(manzanaV, nombre)
            break;
        case "melon":
            kilos = Number(document.getElementById("melonkilos").value)
            melon.kilos = kilos + melon.kilos
            anadirtextoDiv(melon, nombre)
            break;
        case "naranja":
            kilos = Number(document.getElementById("naranjakilos").value)
            naranja.kilos = kilos + naranja.kilos
            anadirtextoDiv(naranja, nombre)
            break;
        case "pera":
            kilos = Number(document.getElementById("perakilos").value)
            pera.kilos = kilos + pera.kilos
            anadirtextoDiv(pera, nombre)
            break;
        case "platano":
            kilos = Number(document.getElementById("platanokilos").value)
            platano.kilos = kilos + platano.kilos
            anadirtextoDiv(platano, nombre)
            break;
        case "sandia":
            kilos = Number(document.getElementById("sandiakilos").value)
            sandia.kilos = kilos + sandia.kilos
            anadirtextoDiv(sandia, nombre)
            break;
        case "uvas":
            kilos = Number(document.getElementById("uvaskilos").value)
            uvas.kilos = kilos + uvas.kilos
            anadirtextoDiv(uvas, nombre)
            break;
    }
}

//funcion que calcula el precio total a partir del array de objetos fruta  y devuelve el precioTotal que es la suma de los kg de fruta por su precio

function obtenerprecioTotal(arrayFrutas) {
    let precioTotal = 0;
    arrayFrutas.forEach((frutas) => {
        precioTotal = precioTotal + (frutas.precioKilo * frutas.kilos);
    });
    return precioTotal;
}
/*funcion que calcula el precio medio a partir del precioTotal obtenido en la funcion precioTotal 
y de los kilos que se obtienen en la misma se incluye el error de la posibilidad de dividir entre 0 
si no  se han agregado kilos de fruta */
function precioMedio(arrayFrutas) {
    let kilosTotales = 0;
    arrayFrutas.forEach((frutas) => {
        kilosTotales = kilosTotales + frutas.kilos;
    });
    if (kilosTotales == 0) {
        throw ' Los kgs totales no pueden ser 0, no se puede dividir entre 0';
    } else {
        var precioTotal = obtenerprecioTotal(arrayFrutas);
        return (precioTotal / kilosTotales);
    }

}
//Obtencion de datos a partir del array de objetos fruta  en los cuales se ha ido recogiendo lo que quiere el usuario en la pagina
function recogidaResultados(arrayFrutas) {
    var textoFrutasPrecios = "";
    arrayFrutas.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        } else {
            return -1;
        }
    });
    arrayFrutas.forEach(frutas => {
        if (frutas.kilos > 0) {
            textoFrutasPrecios = frutas.getDatos() + "<br>" + textoFrutasPrecios;
        }
    });
    return textoFrutasPrecios;
}

//funcion añadir texto al div que esta en la derecha y muestra los kilos de fruta que se añaden y se pondra el primero en la la lista el ultimo añadido
function anadirtextoDiv(nomFruta, nombre) {
    let kiloFruta = document.getElementById(nombre + "kilos").value;
    if (kiloFruta >= 1) {
        let divTexto = document.getElementById("contenedorDerecha");
        let parrafoTexto = document.createElement("p");
        let nodoTexto = document.createTextNode("Se añaden " + kiloFruta + " kilos  de " + nomFruta.nombre);
        divTexto.appendChild(parrafoTexto);
        parrafoTexto.classList.add(nombre);
        parrafoTexto.appendChild(nodoTexto);
        divTexto.scrollTo(0, 100);
        //bucle para añadir la clase activa a los parrafos que tengan la misma clase y asi cambiar el color del texto
        for (let i = 0; i < document.querySelectorAll("#contenedorDerecha p").length; i++) {
            const elemento = document.querySelectorAll("#contenedorDerecha p")[i];
            if (elemento.getAttribute("class").includes(nombre)) {
                elemento.classList.add("activa");
            } else {
                elemento.classList.remove("activa")
            }
        }
    }
}

//funcion que limpia el area de texto, el bloque de la derecha y pone la variable kilos a 0 para poder iniciar compra desde 0 al cabo de 10
function limpiarTodo() {
    let div = document.querySelectorAll("#contenedorDerecha p");
    let inputs = document.querySelectorAll("input[type=text]");
    //limpia bloque derecho
    for (let i = 0; i < div.length; i++) {
        div[i].remove();
        inputs[i].value = "";
    }
    //pone la varible kilo de cada fruta a cero
    arrayFrutas.forEach(frutas => {
        frutas.kilos = 0;
    });
}
//funcion que recoge todos los eventos que se producen al cargar la pagina
window.onload = function () {
    let formulario = document.getElementById("formulario");
    let radioTarjeta = document.getElementById("tarjetasi");
    let radioTarjeta2 = document.getElementById("tarjetano");
    let imagenes = document.getElementsByTagName("img");
    creacionInputTarjeta();
    document.getElementById("campo").disabled = true;
    document.getElementById("campo").hidden = true;
    document.getElementById("labelCampo").hidden = true;
    formulario.addEventListener("submit", event => {
        let todoCorrecto = true;
        let nombre = document.getElementById("nombre");
        let nombreLabel = document.getElementById("nombreLabel");
        if (!nombre.validity.valid) {
            nombreLabel.style.color = "red";
            event.preventDefault();
            todoCorrecto=false;
        }else{
            nombreLabel.style.color = "black";
        }
        let apellido=document.getElementById("apellido");
        let apellidoLabel=document.getElementById("apellidoLabel");
        if(!apellido.validity.valid){
            apellidoLabel.style.color ="red";
            event.preventDefault();
            todoCorrecto=false;
        }else{
            apellidoLabel.style.color ="black";
        }
        let direccion=document.getElementById("direccion");
        let direccionLabel=document.getElementById("direccionLabel");
        if(!direccion.validity.valid){
            direccionLabel.style.color ="red";
            event.preventDefault();
            todoCorrecto=false;
        }else{
            direccionLabel.style.color ="black";
        }
        let email=document.getElementById("email");
        let emailLabel=document.getElementById("emailLabel");
        if(!email.validity.valid){
            emailLabel.style.color ="red";
            event.preventDefault();
            todoCorrecto=false;
        }else{
            emailLabel.style.color ="black";
        }
        let radioPago=document.getElementsByName("pago");
        let pago=document.getElementById("pagoLegend");
        let radioEle=false;
        for(i=0;i<radioPago.length;i++){
            if(radioPago[i].checked==true){
                radioEle=true;
            }
            if(radioEle==false){
                pago.style.color="red";
                event.preventDefault();
                todoCorrecto=false;
            }else{
                pago.style.color="black";
            }
        }
        let radioTarjeta=document.getElementsByName("tarjeta");
        let tarjeta=document.getElementById("tarjetaLegend");
        let radioEle2=false;
        for(i=0;i<radioTarjeta.length;i++){
            if(radioTarjeta[i].checked==true){
                radioEle2=true;
            }
            if(radioEle2==false){
                tarjeta.style.color="red";
                event.preventDefault();
                todoCorrecto=false;
            }else{
                tarjeta.style.color="black";
            }
        }
        if (todoCorrecto) {
            window.open("./emergente.html", "pop-up", "width=500px height=300px");
            event.preventDefault();
        }
    }, false)
    radioTarjeta.addEventListener("change", function () {
        if (radioTarjeta.checked == true) {
            document.getElementById("campo").disabled = false;
            document.getElementById("campo").hidden = false;
            document.getElementById("labelCampo").hidden = false;
        }
    }, false)
    radioTarjeta2.addEventListener("change", function () {
        if (radioTarjeta2.checked == true) {
            document.getElementById("campo").disabled = true;
            document.getElementById("campo").hidden = true;
            document.getElementById("labelCampo").hidden = true;
        }
    }, false)
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover", function () {
            document.getElementById("div" + i).classList.add("tooltip");
            document.getElementById("span" + i).innerHTML = arrayFrutas[i].getDatos2();
            document.getElementById("span" + i).classList.add("tooltiptext");
        }, false)
    }
    imagenesClick(imagenes);


}
//Funcion que recoge los listener  al hacer click en la imagenes
function imagenesClick(imagenes) {
    imagenes[0].addEventListener("click", sumaFruta("arandano"));
    imagenes[1].addEventListener("click", sumaFruta("fresa"));
    imagenes[2].addEventListener("click", sumaFruta("manzanaR"));
    imagenes[3].addEventListener("click", sumaFruta("manzanaV"));
    imagenes[4].addEventListener("click", sumaFruta("melon"));
    imagenes[5].addEventListener("click", sumaFruta("naranja"));
    imagenes[6].addEventListener("click", sumaFruta("pera"));
    imagenes[7].addEventListener("click", sumaFruta("platano"));
    imagenes[8].addEventListener("click", sumaFruta("sandia"));
    imagenes[9].addEventListener("click", sumaFruta("uvas"));
}
//funcion que crea el input cuando das en el radio button de si de tarjeta cliente
function creacionInputTarjeta() {
    let campoTarjeta = document.getElementById("tarjeta");
    let labelCampo=document.createElement("label");
    let campo = document.createElement("input");
    campoTarjeta.appendChild(labelCampo);
    campoTarjeta.appendChild(campo);
    labelCampo.innerHTML="Codigo Cliente";
    labelCampo.setAttribute("id","labelCampo");
    labelCampo.setAttribute("for","codigoCliente")
    campo.setAttribute("id", "campo");
    campo.setAttribute("name","codigoCliente");
    campo.setAttribute("type", "text");
    campo.setAttribute("required", "");
    campo.setAttribute("pattern", "[a-zA-Z]{3}[0-9]{4}[/|_|.|#|&]$");
}

