let frutas = [{
        nombre: "banano",
        preciokilo: "3000",
    },
    {
        nombre: "mora",
        preciokilo: "2000",
    },
    {
        nombre: "sandia",
        preciokilo: "1000",
    }
]

function calcularpreciofruta() {
    var auxnombre = document.getElementById("fruta").value;
    var auxkilos = document.getElementById("kilos").value;
    var total = 0;
    for (i = 0; i < frutas.length; i++) {

        if (frutas[i].nombre === auxnombre) {
            total = frutas[i].preciokilo * auxkilos;
            document.getElementById("preciofruta_show").innerHTML = total;
            break;
        } else {
            document.getElementById("preciofruta_show").innerHTML = "Esta fruta no existe en el diccionario";
        }

    }



}