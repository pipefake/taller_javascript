function muestra() {
    var arreglo = document.getElementById("muestra").value.split(",");
    var suma = 0;
    for (i = 0; i < arreglo.length; i++) {
        suma += arreglo[i] * 1;

    }
    var media = suma / arreglo.length;
    document.getElementById("media_show").innerHTML = "La media es: " + media;

    return media;


}

function desviacion() {
    var arreglo = document.getElementById("muestra").value.split(",");

    var sumadesviacion = 0;
    var desviacion = 0;

    var media = muestra();
    for (i = 0; i < arreglo.length; i++) {
        sumadesviacion += (Math.pow((arreglo[i] - media), 2));

    }
    desviacion = Math.sqrt(sumadesviacion / (arreglo.length - 1)).toFixed(2);
    document.getElementById("desviacion_show").innerHTML = "La desviacion estandar es: " + desviacion;
}