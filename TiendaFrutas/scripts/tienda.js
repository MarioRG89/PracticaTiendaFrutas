//Variable globales para manejar los arrays en la diferentes funciones
var arrayFrutas = [];
var fechaActual = new Date();
// Definicion de la clase Fruta y las clase fruta verano e invierno hija de la clase fruta
class Fruta {
    constructor(nombre, kilos, precioKilo) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precioKilo = precioKilo;
    }
    getDatos = () => this.nombre + " ---- " + this.kilos + " kilos " + " ---- " + this.precioKilo + " €/kg " + (this.precioKilo * this.kilos).toFixed(2) + " € "
}
class FrutaVerano extends Fruta {
    constructor(nombre, kilo, precioKilo, proximidad, region) {
        super(nombre, kilo, precioKilo);
        this.proximidad = proximidad;
        this.region = region;
    }
    getDatos = () => this.nombre + " es una fruta de verano " + " de " + this.proximidad + " estan recogida en " + this.region;
}
class FrutaInvierno extends Fruta {
    constructor(nombre, kilo, precioKilo, conservacion) {
        super(nombre, kilo, precioKilo);
        this.conservacion = conservacion;
    }
    getDatos = () => this.nombre + " es una fruta de invierno " + " y es recomendable conservalas  " + this.conservacion + " de la nevera ";
}
//funcion para la suma de kilos para todas la frutas
function sumaFruta(nombre) {
    switch (nombre) {
        case "arandano":
            let arandano = new Fruta("Arandanos", Number(prompt("¿cuantos kilos quiere ?")), 13.4);
            arrayFrutas.push(arandano);
            break;
        case "fresa":
            let fresa = new Fruta("Fresa", Number(prompt("¿cuantos kilos quiere ?")), 3.75);
            arrayFrutas.push(fresa);
            break;
        case "manzanaR":
            let manzanaR = new Fruta("Manzana Verde", Number(prompt("¿cuantos kilos quiere ?")), 1.75);
            arrayFrutas.push(manzanaR);
            break;
        case "manzanaV":
            let manzanaV = new Fruta("Manzana Roja", Number(prompt("¿cuantos kilos quiere ?")), 2.69);
            arrayFrutas.push(manzanaV);
            break;
        case "melon":
            let melon = new Fruta("Melon", Number(prompt("¿cuantos kilos quiere ?")), 0.75);
            arrayFrutas.push(melon);
            break;
        case "naranja":
            let naranja = new Fruta("Naranja", Number(prompt("¿cuantos kilos quiere ?")), 2.16);
            arrayFrutas.push(naranja);
            break;
        case "pera":
            let pera = new Fruta("Pera", Number(prompt("¿cuantos kilos quiere ?")), 1.60);
            arrayFrutas.push(pera);
            break;
        case "platano":
            let platano = new Fruta("Platano", Number(prompt("¿cuantos kilos quiere ?")), 2.15);
            arrayFrutas.push(platano);
            break;
        case "sandia":
            let sandia = new Fruta("Sandia", Number(prompt("¿cuantos kilos quiere ?")), 2.75);
            arrayFrutas.push(sandia);
            break;
        case "uvas":
            let uvas = new Fruta("Uvas", Number(prompt("¿cuantos kilos quiere ?")), 1.75);
            arrayFrutas.push(uvas);
            break;
    }
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
        return elemento.getDatos()
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
