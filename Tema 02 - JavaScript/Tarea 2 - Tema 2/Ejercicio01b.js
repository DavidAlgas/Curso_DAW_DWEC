var oculto = true;

function ocultarMostrar() {
    if (this.oculto) {
        document.getElementById('quijote').style.visibility = "hidden";
        document.getElementById('celestina').style.visibility = "hidden";
        this.oculto = false;
    } else {
        document.getElementById('quijote').style.visibility = "visible";
        document.getElementById('celestina').style.visibility = "visible";
        this.oculto = true;
    }

}