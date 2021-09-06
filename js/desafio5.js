function palindromo() {




    var palindromo = document.getElementById("palindromo").value;

    palindromo = palindromo.toLowerCase().replace(/\s/g, "");

    fraserReverse = palindromo.split("").reverse().toString();

    for (var i = 0; i < ((fraserReverse.length) - 1); i++) {
        fraserReverse = fraserReverse.replace(",", "");
    };
    // Comparo las dos frases.
    if (palindromo == fraserReverse) {
        // Si el resultado es positivo
        resultado = "es un Palindromo";
    } else {
        // Si el resultado es negativo
        resultado = "no es un Palindromo";
    }
    // Muestro el el resultado
    document.getElementById("palindromo_show").innerHTML = "Tu palabra : " + resultado;
}
// Llamo a la función comparación con el parámetro del user