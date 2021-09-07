function mostrar_imc() {
    var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;
    var imc = (peso / (estatura * estatura)).toFixed(2);
    document.getElementById("imc_show").innerHTML = "Su IMC es : " + imc;
}