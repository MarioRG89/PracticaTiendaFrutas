//Variable global fecha
var fechaActual = new Date();
// Definicion de la clase Fruta y las clase fruta verano e invierno hija de la clase fruta
class Fruta {
    constructor(nombre, kilos, precioKilo) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precioKilo = precioKilo;
    }
    getDatos = () => this.nombre + " ---- " + this.kilos + " kilos " + " ---- " + this.precioKilo + " €/kg " + " ---- " + (this.precioKilo * this.kilos) + " € "
}
class FrutaVerano extends Fruta {
    constructor(nombre, kilo, precioKilo, proximidad, region) {
        super(nombre, kilo, precioKilo);
        this.proximidad = proximidad;
        this.region = region;
    }
    getDatos2 = () => " Las/os " + this.nombre + " es una fruta de verano " + " de " + this.proximidad + " estan recogida en " + this.region;
}
class FrutaInvierno extends Fruta {
    constructor(nombre, kilo, precioKilo, conservacion) {
        super(nombre, kilo, precioKilo);
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
            anadirtextoDiv(manzanaR,nombre)
            break;
        case "manzanaV":
            kilos = Number(document.getElementById("manzanaVkilos").value)
            manzanaV.kilos = kilos + manzanaV.kilos
            anadirtextoDiv(manzanaV,nombre)
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
            anadirtextoDiv(pera,nombre)
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

function obtenerprecioTotal() {
    let arrayPrecio = arrayFrutas.map((elemento) =>
        elemento.kilos * elemento.precioKilo);
    let precioTotal = arrayPrecio.reduce((precioTot, precioInd) => precioTot + precioInd);
    return precioTotal;
}
/*funcion que calcula el precio medio a partir del precioTotal obtenido en la funcion precioTotal 
y de los kilos que se obtienen en la misma se incluye el error de la posibilidad de dividir entre 0 
si no  se han agregado kilos de fruta */
function precioMedio() {
    let valorIn = 0;
    let kilosTotal = arrayFrutas.reduce(function (kiloTo, kiloAct) {
        return kiloTo + kiloAct.kilos
    }, valorIn);
    if (kilosTotal == 0) {
        throw new Error("Los kilos totales son 0,no se han agregado kilos de fruta, no se puede dividir entre 0 ")
    } else {
        let precioMedio = obtenerprecioTotal() / kilosTotal;
        return precioMedio;
    }
}
//Obtencion de datos a partir del array de objetos fruta  en los cuales se ha ido recogiendo lo que quiere el usuario en la pagina
function recogidaResultados() {
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
            textoFrutasPrecios = frutas.getDatos() + "\n" + textoFrutasPrecios;
        }
    });
    return textoFrutasPrecios;
}
//Funcion que ordena y recoge los datos de las frutas de verano e invierno
function tipoFruta() {
    var textoFrutas = "";
    arrayFrutas.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return -1;
        } else {
            return 1;
        }
    });
    arrayFrutas.forEach(frutas => {
        if (frutas.kilos > 0) {
            textoFrutas = frutas.getDatos2() + "\n" + textoFrutas;
        }
    });
    return textoFrutas;
}
//funcion añadir texto al div que esta en la derecha y muestra los kilos de fruta que se añaden
function anadirtextoDiv(nomFruta, nombre) {
    let kiloFruta = document.getElementById(nombre + "kilos").value;
    if (kiloFruta >= 1) {
        let divTexto = document.getElementById("contenedorDerecha");
        let parrafoTexto = document.createElement("p");
        let nodoTexto = document.createTextNode("Se añaden " + kiloFruta + " kilos  de " + nomFruta.nombre);
        divTexto.appendChild(parrafoTexto);
        parrafoTexto.classList.add(nombre);
        parrafoTexto.appendChild(nodoTexto);

        //bucle para añadir la clase activa a los parrafos que tengan la misma clase y asi cambiar el color del texto
        for (let i = 0; i < document.querySelectorAll("#contenedorDerecha p").length; i++) {
            const elemento = document.querySelectorAll("#contenedorDerecha p")[i];
            if (elemento.getAttribute("class").includes(nombre)) {
                elemento.classList.add("activa");
            }else{
                elemento.classList.remove("activa")
            }
        }
    }
}
/*Funcion para mostrar los datos que se han recogido y se mostrara en la pagina en el area de texto, tambien se maneja el posible error
al usar la funcion del precioMedio */
function mostrarResultados() {
    try {
        var areaTexto = document.getElementById("areaTexto");
        setTimeout(function() {
            alert(tipoFruta());
            }, 2000);
        var fecha = document.createTextNode("Fecha de compra : " + fechaActual.toLocaleString() + "\n");
        var texto = document.createTextNode(recogidaResultados() + "\n");
        var texto2 = document.createTextNode("Precio total : " + parseFloat(Math.floor(obtenerprecioTotal() * 100) / 100).toFixed(2) + " €" + "\n");
        var texto3 = document.createTextNode("Precio medio : " + precioMedio().toFixed(3) + " €/kg " + "\n");
        areaTexto.appendChild(fecha);
        areaTexto.appendChild(texto);
        areaTexto.appendChild(texto2);
        areaTexto.appendChild(texto3);
        limpiarTodo();
    } catch (error) {
        console.error(error);
    }
}
//funcion que limpia el area de texto, el bloque de la derecha y pone la variable kilos a 0 para poder iniciar compra desde 0 al cabo de 10
function limpiarTodo() {
    setTimeout(function () {
        let div = document.querySelectorAll("#contenedorDerecha p");
        //limpia bloque derecho
        for (let i = 0; i < div.length; i++) {
            div[i].remove();
        }
        //limpia el area de texto
        document.getElementById("areaTexto").innerHTML = "";
        //pone la varible kilo de cada fruta a cero
        arrayFrutas.forEach(frutas => {
            frutas.kilos = 0;
        });
    }, 10000);
}