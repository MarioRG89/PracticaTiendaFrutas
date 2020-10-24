//Variable globales para manejar los arrays en la diferentes funciones
var arrayFrutas = [];
var fechaActual = new Date();
// Definicio de la clase Fruta
class Fruta {
    constructor(nombre, kilos, precioKilo) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precioKilo = precioKilo;
    }
    getDatos = () => "Los kilos seleccionados de " + this.nombre + " son " + this.kilos + " al precio el kilo de " + this.precioKilo;
}


//funcion para la suma de la fruta arandano cada vez que pincha imagen
function sumaFrutaArandano() {
    let arandano = new Fruta("Arandanos", Number(prompt("¿cuantos kilos quiere ?")), 13.4);
    console.log(arandano.getDatos());
    arrayFrutas.push(arandano);
}
//funcion para la suma de la fruta fresa cada vez que pincha imagen
function sumaFrutaFresa() {
    let fresa = new Fruta("Fresa", Number(prompt("¿cuantos kilos quiere ?")), 3.75);
    console.log(fresa.getDatos());
    arrayFrutas.push(fresa);
}
//funcion para la suma de la fruta manzana roja cada vez que pincha imagen
function sumaFrutaManzanaR() {
    let manzanaR = new Fruta("Manzana Verde", Number(prompt("¿cuantos kilos quiere ?")), 1.75);
    console.log(manzanaR.getDatos());
    arrayFrutas.push(manzanaR);
}
//funcion para la suma de la fruta manzana verde cada vez que pincha imagen
function sumaFrutaManzanaV() {
    let manzanaV = new Fruta("Manzana Roja", Number(prompt("¿cuantos kilos quiere ?")), 2.69);
    console.log(manzanaV.getDatos());
    arrayFrutas.push(manzanaV);
}
//funcion para la suma de la fruta melon cada vez que pincha imagen
function sumaFrutaMelon() {
    let melon = new Fruta("Melon", Number(prompt("¿cuantos kilos quiere ?")), 0.75);
    console.log(melon.getDatos());
    arrayFrutas.push(melon);
}
//funcion para la suma de la fruta naranja cada vez que pincha imagen
function sumaFrutaNaranja() {
    let naranja = new Fruta("Naranja", Number(prompt("¿cuantos kilos quiere ?")), 2.16);
    console.log(naranja.getDatos());
    arrayFrutas.push(naranja);
}
//funcion para la suma de la fruta pera cada vez que pincha imagen
function sumaFrutaPera() {
    let pera = new Fruta("Pera", Number(prompt("¿cuantos kilos quiere ?")), 1.60);
    console.log(pera.getDatos());
    arrayFrutas.push(pera);
}
//funcion para la suma de la fruta platano cada vez que pincha imagen
function sumaFrutaPlatano() {
    let platano = new Fruta("Platano", Number(prompt("¿cuantos kilos quiere ?")), 2.15);
    console.log(platano.getDatos());
    arrayFrutas.push(platano);
}
//funcion para la suma de la fruta sandia cada vez que pincha imagen
function sumaFrutaSandia() {
    let sandia = new Fruta("Sandia", Number(prompt("¿cuantos kilos quiere ?")), 2.75);
    console.log(sandia.getDatos());
    arrayFrutas.push(sandia);
}
//funcion para la suma de la fruta uva cada vez que pincha imagen
function sumaFrutaUva() {
    let uvas = new Fruta("Uvas", Number(prompt("¿cuantos kilos quiere ?")), 1.75);
    console.log(uvas.getDatos());
    arrayFrutas.push(uvas);
}
//funcion que calcula el precio total a partir de los arrays de  precios y el contador kilos y devuelve el precioTotal que es la suma de los kg de fruta por su precio

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
//Obtencion de datos a partir de los array globales en los cuales se ha ido recogiendo lo que quiere el usuario en la pagina
function recogidaResultados() {
    let numArray2 = arrayFrutas.map(function (elemento) {
        return elemento.nombre + " ---- " + elemento.kilos + " kilos " + " ---- " + elemento.precioKilo + " €/kg " + (elemento.precioKilo * elemento.kilos) + " € "
    });
    numArray2.sort();
    numArray2.reverse();
    let resultado = numArray2.join("\n");
    return resultado;
}
/*Funcion para mostrar los datos que se han recogido y se mostrara en la pagina en el area de texto, tambien se maneja el posible error
al usar la funcion del precioMedio */
function mostrarResultados() {
    try {
        var areaTexto = document.getElementById("areaTexto");
        var fecha = document.createTextNode("Fecha de compra : " + fechaActual.getDay() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + "\n");
        var texto = document.createTextNode(recogidaResultados() + "\n");
        var texto2 = document.createTextNode("Precio total : " + Math.floor(obtenerprecioTotal()).toFixed(2) + " €" + "\n");
        var texto3 = document.createTextNode("Precio medio : " + precioMedio().toFixed(3) + " €/kg " + "\n")
        areaTexto.appendChild(fecha)
        areaTexto.appendChild(texto);
        areaTexto.appendChild(texto2);
        areaTexto.appendChild(texto3);
    } catch (error) {
        console.error(error);
    }
}
