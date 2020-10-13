//Variable globales para manejar los arrays en la diferentes funciones
arrayFrutasContador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
arrayFrutasPrecio = [13.4, 3.75, 1.75, 2.69, 0.75, 2.16, 1.60, 2.15, 2.75, 1.75];
arrayFrutasNombres = ["Arandanos", "Fresa", "ManzanaR", "ManzanaV", "Melon", "Naranja", "Pera", "Platano", "Sandia", "Uvas"];
//funcion para la suma de la fruta arandano cada vez que pincha imagen
function sumaFrutaArandano() {
    arrayFrutasContador[0]++;
}
//funcion para la suma de la fruta fresa cada vez que pincha imagen
function sumaFrutaFresa() {
    arrayFrutasContador[1]++;
}
//funcion para la suma de la fruta manzana roja cada vez que pincha imagen
function sumaFrutaManzanaR() {
    arrayFrutasContador[2]++;
}
//funcion para la suma de la fruta manzana verde cada vez que pincha imagen
function sumaFrutaManzanaV() {
    arrayFrutasContador[3]++;
}
//funcion para la suma de la fruta melon cada vez que pincha imagen
function sumaFrutaMelon() {
    arrayFrutasContador[4]++;
}
//funcion para la suma de la fruta naranja cada vez que pincha imagen
function sumaFrutaNaranja() {
    arrayFrutasContador[5]++;
}
//funcion para la suma de la fruta pera cada vez que pincha imagen
function sumaFrutaPera() {
    arrayFrutasContador[6]++;
}
//funcion para la suma de la fruta platano cada vez que pincha imagen
function sumaFrutaPlatano() {
    arrayFrutasContador[7]++;
}
//funcion para la suma de la fruta sandia cada vez que pincha imagen
function sumaFrutaSandia() {
    arrayFrutasContador[8]++;
}
//funcion para la suma de la fruta uva cada vez que pincha imagen
function sumaFrutaUva() {
    arrayFrutasContador[9]++;
}
//funcion que calcula el precio total a partir de los arrays de  precios y el contador kilos y devuelve el precioTotal que es la suma de los kg de fruta por su precio

function obtenerprecioTotal() {
    let arrayPrecio=arrayFrutasPrecio.map((elemento,indice)=> 
    elemento * arrayFrutasContador[indice]);
    let precioTotal=arrayPrecio.reduce((precioTot,precioInd)=>precioTot +precioInd);
    return precioTotal;
}
/*funcion que calcula el precio medio a partir del precioTotal obtenido en la funcion precioTotal 
y de los kilos que se obtienen en la misma se incluye el error de la posibilidad de dividir entre 0 
si no  se han agregado kilos de fruta */
function precioMedio() {
    let kilosTotal = arrayFrutasContador.reduce((kiloTot,kiloAc)=> kiloTot + kiloAc);
    if (kilosTotal == 0) {
        throw new Error("Los kilos totales son 0,no se han agregado kilos de fruta, no se puede dividir entre 0 ")
    }else{
        let precioMedio = obtenerprecioTotal() / kilosTotal;
        return precioMedio;
    }
}
//Obtencion de datos a partir de los array globales en los cuales se ha ido recogiendo lo que quiere el usuario en la pagina
function recogidaResultados() {    
    let arrayContadorString=arrayFrutasContador.map(palabra=>palabra.toString());
    let numArray2 = arrayFrutasNombres.map((elemento,indice)=> 
     elemento + " ---- " + arrayContadorString[indice] + " kilos "
     );
    numArray2.sort();
    numArray2.reverse();
    let resultado=numArray2.join("\n");
    return resultado;
}
/*Funcion para mostrar los datos que se han recogido y se mostrara en la pagina en el area de texto, tambien se maneja el posible error
al usar la funcion del precioMedio */
function mostrarResultados() {
    try {
        var areaTexto = document.getElementById("areaTexto");
        var texto = document.createTextNode(recogidaResultados() + "\n");
        var texto2 = document.createTextNode("Precio total : " + obtenerprecioTotal() + " €" + "\n");
        var texto3 = document.createTextNode("Precio medio : " + precioMedio() + " €/kg " + "\n")
        areaTexto.appendChild(texto);
        areaTexto.appendChild(texto2);
        areaTexto.appendChild(texto3);
    } catch (error) {
        console.error(error);
    }
}
