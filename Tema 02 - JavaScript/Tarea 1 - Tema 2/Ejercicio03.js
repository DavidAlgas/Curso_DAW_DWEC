var nombre = prompt("Ingrese su Nombre: ", "");
var nota = parseInt(prompt("Ingrese Nota: ", ""));

if (nota >= 5) {
    document.write(nombre + " esta aprobado con un " + nota);
} else {
    var frase = nombre + " esta suspendido con un " + nota;
    document.write(frase.fontcolor("red"));
}