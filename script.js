function anadirElemento() {
    const boton = document.getElementById("botonAgregar");
    const input = document.getElementById("input");
    const lista = document.getElementById("list");

    boton.addEventListener("click", function(){
        let valor = input.value;
        if (valor) {
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = valor;
            lista.appendChild(nuevoElemento);
            input.value = "";
        }
    });
}

function eliminarElemento() {
    const boton = document.getElementById("botonEliminar");
    const input = document.getElementById("input");
    const lista = document.getElementById("list");
    const elementos = lista.getElementsByTagName("li");

    boton.addEventListener("click", function(){
        let valor = input.value;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].textContent === valor) {
                lista.removeChild(elementos[i]);
                break; 
            }
        }
        input.value = "";
    });
}