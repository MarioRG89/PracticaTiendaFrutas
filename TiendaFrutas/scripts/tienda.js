//Variable globales para manejar los arrays en la diferentes funciones
arrayFrutasContador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
arrayFrutasPrecio = [13.4, 3.75, 1.75, 2.69, 0.75, 2.16, 1.60, 2.15, 2.75, 1.75];
arrayFrutasNombres = ["Arandanos", "Fresa", "ManzanaR", "ManzanaV", "Melon", "Naranja", "Pera", "Platano", "Sandia", "Uvas"];
//funcion para la suma de la fruta arandano cada vez que pincha imagen
function sumaFrutaArandano() {
    arrayFrutasContador[0]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta fresa cada vez que pincha imagen
function sumaFrutaFresa() {
    arrayFrutasContador[1]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta manzana roja cada vez que pincha imagen
function sumaFrutaManzanaR() {
    arrayFrutasContador[2]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta manzana verde cada vez que pincha imagen
function sumaFrutaManzanaV() {
    arrayFrutasContador[3]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta melon cada vez que pincha imagen
function sumaFrutaMelon() {
    arrayFrutasContador[4]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta naranja cada vez que pincha imagen
function sumaFrutaNaranja() {
    arrayFrutasContador[5]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta pera cada vez que pincha imagen
function sumaFrutaPera() {
    arrayFrutasContador[6]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta platano cada vez que pincha imagen
function sumaFrutaPlatano() {
    arrayFrutasContador[7]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta sandia cada vez que pincha imagen
function sumaFrutaSandia() {
    arrayFrutasContador[8]++;
    console.log(arrayFrutasContador);
}
//funcion para la suma de la fruta uva cada vez que pincha imagen
function sumaFrutaUva() {
    arrayFrutasContador[9]++;
    console.log(arrayFrutasContador);
}
//funcion que calcula el precio total a partir de los precios y los kilos y devuelve el precioTotal
function precioTotal() {
    var precioTotal = 0;
    for (i = 0; i < arrayFrutasPrecio.length; i++) {
        precioTotal = precioTotal + (arrayFrutasContador[i] * arrayFrutasPrecio[i]);
    }
    return precioTotal;
}
/*funcion que calcula el precio medio a partir del precioTotal obtenido en la funcion precioTotal 
y de los kilos que se obtienen en la misma se incluye el error de la posibilidad de dividir entre 0 
si no  se han agregado kilos de fruta */
function precioMedio() {
    let kilosTotal = arrayFrutasContador.reduce((kiloTot,kiloAc)=> kiloTot + kiloAc);
    if (kilosTotal == 0) {
        throw new Error("Los kilos totales son 0,no se han agregado kilos de fruta, no se puede dividir entre 0 ")
    }
    let precioMedio = precioTotal() / kilosTotal;
    return precioMedio;
}
//Obtencion de datos a partir de los array globales en los cuales se ha ido recogiendo lo que quiere el usuario en la pagina
function recogidaResultados() {
    var arrayResultado = new Array(10);
    var resultado = "";
    for (i = 0; i < arrayResultado.length; i++) {
        arrayResultado[i] = arrayFrutasNombres[i] + " ---- " + arrayFrutasContador[i] + " kilos ";
    }
    for (i = 0; i < arrayResultado.length; i++) {
        resultado = resultado + arrayResultado[i] + "\n";
    }
    return resultado;
}
/*Funcion para mostrar los datos que se han recogido y se mostrara en la pagina en el area de texto, tambien se maneja el posible error
al usar la funcion del precioMedio */
function mostrarResultados() {
    try {
        var areaTexto = document.getElementById("areaTexto");
        var texto = document.createTextNode(recogidaResultados());
        var texto2 = document.createTextNode("Precio total :" + precioTotal() + " €" + "\n");
        var texto3 = document.createTextNode("Precio medio :" + precioMedio() + " €/kg " + "\n")
        areaTexto.appendChild(texto);
        areaTexto.appendChild(texto2);
        areaTexto.appendChild(texto3);
    } catch (error) {
        console.error(error);
    }
}
