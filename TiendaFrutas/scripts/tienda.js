//Variable globales para manejar los arrays en la diferentes funciones
arrayFrutasContador=[0,0,0,0,0,0,0,0,0,0];
arrayFrutasPrecio=[13.4,3.75,1.75,2.69,0.75,2.16,1.60,2.15,2.75,1.75];
arrayFrutasNombres=["Arandanos","Fresa","ManzanaR","ManzanaV","Melon","Naranja","Pera","Platano","Sandia","Uvas"];

function sumaFrutaArandano(){
     arrayFrutasContador[0]++;
     console.log(arrayFrutasContador);
}
function sumaFrutaFresa(){
    arrayFrutasContador[1]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaManzanaR(){
    arrayFrutasContador[2]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaManzanaV(){
    arrayFrutasContador[3]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaMelon(){
    arrayFrutasContador[4]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaNaranja(){
    arrayFrutasContador[5]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaPera(){
    arrayFrutasContador[6]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaPlatano(){
    arrayFrutasContador[7]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaSandia(){
    arrayFrutasContador[8]++;
    console.log(arrayFrutasContador);
}
function sumaFrutaUva(){
    arrayFrutasContador[9]++;
    console.log(arrayFrutasContador);
}

function mostrarResultados(){
    var arrayResultado=new Array(10);
    var resultado="";
    

    for(i=0;i<arrayResultado.length;i++){
        arrayResultado[i]=arrayFrutasNombres[i] + " ---- " + arrayFrutasContador[i] + " kilos " ;
    }
    for(i=0;i<arrayResultado.length;i++){
         resultado= resultado + arrayResultado[i] + "\n" ;
    }
    
    
    var areaTexto=document.getElementById("areaTexto");
    var texto= document.createTextNode(resultado);
    areaTexto.appendChild(texto);
}