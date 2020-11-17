//Recoge lso eventos de los botones y muestra los datos en la ventana emergente
window.onload = () => {
    
    let ventana= window.opener;
    let boton1 = document.getElementById("botonVolver");
    let boton2 = document.getElementById("botonTerminar");
    let divEmerg= document.getElementById("divEmergente");
    
   
    divEmerg.innerHTML += "<p>" + "Fecha de compra : " + ventana.fechaActual.toLocaleString() + "<br>"  + "</p>" ;
    divEmerg.innerHTML += "<p>" +  ventana.recogidaResultados(ventana.arrayFrutas)  + "</p>";
    divEmerg.innerHTML += "<p>" + "Precio total : " + ventana.obtenerprecioTotal(ventana.arrayFrutas) + " €" + "<br>"  + "</p>";
    divEmerg.innerHTML += "<p>" + ("Precio medio : " + ventana.precioMedio(ventana.arrayFrutas).toFixed(3) + " €/kg " + "<br>") + "</p>" ;
    boton1.addEventListener("click", (event) => {
        window.close();
    }, false);
    boton2.addEventListener("click", (event) => {
        ventana.document.getElementById("formulario").submit();
        ventana.limpiarTodo();
        window.close();
    }, false);
}