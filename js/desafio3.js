function calcular_descuento() {
    var num_barras_no_dia = document.getElementById("barrasnodia").value;
    var precio = num_barras_no_dia * 450;
    var descuento = precio * 0.5;
    var netoapagar = precio - descuento;
    document.getElementById("precio_show").innerHTML = "El precio es: " + precio;
    document.getElementById("descuento_show").innerHTML = "El descuento es: " + descuento;
    document.getElementById("netoapagar_show").innerHTML = "El neto a pagar es: " + netoapagar;

}