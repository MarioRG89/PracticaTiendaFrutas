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
    getDatos2 = () =>" Las/os " + this.nombre + " es una fruta de verano " + " de " + this.proximidad + " estan recogida en " + this.region;
}
class FrutaInvierno extends Fruta {
    constructor(nombre, kilo, precioKilo, conservacion) {
        super(nombre, kilo, precioKilo);
        this.conservacion = conservacion;
    }
    getDatos2 = () =>" Las/os " + this.nombre + " es una fruta de invierno " + " y es recomendable conservalas  " + this.conservacion + " de la nevera ";
}
//Objetos de cada fruta
let arandano = new FrutaVerano("Arandanos",0, 13.4,"proximidad","Asturias");
let fresa = new FrutaVerano("Fresas",0, 3.75,"proximidad","Asturias");
let manzanaR = new FrutaInvierno("Manzanas Roja", 0, 1.75,"fuera");
let manzanaV = new FrutaInvierno("Manzanas Verde", 0, 2.69,"fuera");
let melon = new FrutaVerano("Melones", 0, 0.75,"proximidad","Villaconejo");
let naranja = new FrutaInvierno("Naranjas", 0, 2.16,"fuera");
let pera = new FrutaInvierno("Peras", 0, 1.60,"dentro");
let platano = new FrutaInvierno("Platanos", 0, 2.15,"fuera");
let sandia = new FrutaVerano("Sandias", 0, 2.75,"proximidad","Murcia");
let uvas = new FrutaInvierno("Uvas",0, 1.75,"dentro");
//Array que contiene los objetos fruta
var arrayFrutas = [arandano,fresa,manzanaR,manzanaV,melon,naranja,pera,platano,sandia,uvas];
//funcion para la suma de kilos para todas la frutas
function sumaFruta(nombre) {
    switch (nombre) {
        case "arandano": 
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            arandano.kilos=kilos + arandano.kilos
            break;
        case "fresa":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            fresa.kilos=kilos + fresa.kilos
            break;
        case "manzanaR":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            manzanaR.kilos=kilos + manzanaR.kilos
            break;
        case "manzanaV":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            manzanaV.kilos=kilos +manzanaV.kilos
            break;
        case "melon":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            melon.kilos=kilos +melon.kilos
            break;
        case "naranja":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            naranja.kilos= kilos + naranja.kilos
            break;
        case "pera":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            pera.kilos=kilos + pera.kilos
            break;
        case "platano":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            platano.kilos= kilos + platano.kilos
            break;
        case "sandia":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            sandia.kilos= kilos + sandia.kilos
            break;
        case "uvas":
            kilos=Number(prompt("¿cuantos kilos quieres?"))
            uvas.kilos= kilos + uvas.kilos
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
    var textoFrutasPrecios="";
    arrayFrutas.sort(function (a, b){
        if(a.nombre>b.nombre){
            return 1;
        }else{
            return -1;
        }
    });
    arrayFrutas.forEach(frutas => {
        if(frutas.kilos>0){
            textoFrutasPrecios= frutas.getDatos() + "\n" + textoFrutasPrecios ;
        }
    });
   
   
    return textoFrutasPrecios;
}
//Funcion que ordena y recoge los datos de las frutas de verano e invierno
function tipoFruta(){
    var textoFrutas="";
    arrayFrutas.sort(function (a, b){
        if(a.nombre>b.nombre){
            return -1;
        }else{
            return 1;
        }
    });
    arrayFrutas.forEach(frutas => {
        if(frutas.kilos>0){
          textoFrutas= frutas.getDatos2() + "\n" + textoFrutas ;
        }
    });
    return textoFrutas;
}
/*Funcion para mostrar los datos que se han recogido y se mostrara en la pagina en el area de texto, tambien se maneja el posible error
al usar la funcion del precioMedio */
function mostrarResultados() {
    try {
        var areaTexto = document.getElementById("areaTexto");
        alert(tipoFruta());
        var fecha = document.createTextNode("Fecha de compra : " + fechaActual.getDay() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + "\n");
        var texto = document.createTextNode(recogidaResultados() + "\n");
        var texto2 = document.createTextNode("Precio total : " + parseFloat(Math.floor(obtenerprecioTotal()*100)/100).toFixed(2) + " €" + "\n");
        var texto3 = document.createTextNode("Precio medio : " + precioMedio().toFixed(3) + " €/kg " + "\n")
        areaTexto.appendChild(fecha)
        areaTexto.appendChild(texto);
        areaTexto.appendChild(texto2);
        areaTexto.appendChild(texto3);
    } catch (error) {
        console.error(error);
    }
}
