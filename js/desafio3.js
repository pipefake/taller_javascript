function calcular_descuento() {
    var num_barras_no_dia = document.getElementById("barrasnodia").value;
    var precioxbarra = 450;
    var precio = num_barras_no_dia * precioxbarra;
    var descuento = precio * 0.5;
    var netoapagar = precio - descuento;
    document.getElementById("precioxbarra_show").innerHTML = "El precio por barra es: " + precioxbarra;
    document.getElementById("precio_show").innerHTML = "El precio es: " + precio;
    document.getElementById("descuento_show").innerHTML = "El descuento es: " + descuento;
    document.getElementById("netoapagar_show").innerHTML = "El neto a pagar es: " + netoapagar;

}