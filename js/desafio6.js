function muestra() {
    var arreglo = new Array();
    arreglo[0] = document.getElementById("var1").value;
    arreglo[1] = document.getElementById("var2").value;
    arreglo[2] = document.getElementById("var3").value;
    arreglo[3] = document.getElementById("var4").value;
    var resultado = 0;
    for (i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i] * 1;
    }
    document.getElementById("suma_show").innerHTML = "El total de la suma es: " + resultado;
}