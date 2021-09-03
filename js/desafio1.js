function mostrar_valorpaga() {
    var horas_trabajadas = document.getElementById("Htrabajadas").value;
    var valor_hora = document.getElementById("Valorhora").value;
    var valor_paga = horas_trabajadas * valor_hora;
    document.getElementById("valorpaga").innerHTML = "El total a pagar es: " + valor_paga;
}