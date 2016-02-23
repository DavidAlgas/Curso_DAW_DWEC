/************************************************************************************************************************
 ***********************************************   -- VARIABLES GLOBALES --  ********************************************
 ************************************************************************************************************************/

//Variable con los colores que jugamos
var coloresJuego = ["red", "yellow", "green", "blue"];

//Variable con la contreseña que jugamos
var passGenerada = [];

//Variable array con la respuesta en cada intento
var respuesta = [];

//Variable con la posicion y el turno
var posicion = 0;
var turno = 0;

//Variable para saber si el usuario a ganado y saber el fin del juego
var gana = false;

//Variable para mostrar y ocultar el resultado
var verOcultar = false;


//1. GENERAMOS LA CONTRASEÑA
GenerarPass();


/************************************************************************************************************************
 ***********************************************   -- FUNCIONES --  *****************************************************
 ************************************************************************************************************************/


//2. CONTROLAMOS LOS COLORES QUE PULSAMOS
function Pulsar(colorPulsado) {

    //2.1 ALMACENAMOS EL COLOR PULSADO Y CAMBIAMOS EL COLOR EN LA RESPUESTA HTML 
    respuesta[posicion] = coloresJuego[colorPulsado];
    document.getElementById(turno + "ans" + posicion).style.backgroundColor = coloresJuego[colorPulsado];

    //2.2 COMPROBAMOS SI SE HA LLENADO UNA RESPUESTA
    if (respuesta.length < 4) {
        posicion++;
    } else {
        //2.3 COMPROBAMOS LA RESPUESTA Y RESETEAMOS LOS CONTADORES
        checkRespuesta();
        respuesta = [];
        posicion = 0;
        turno++;

        //2.4 COMPROBAMOS SI HEMOS GANADO O PERDIDO
        HasGanado();
    }
}



//2.3 COMPROBAMOS SI LA RESPUESTA OFRECIDA COINCIDE CON LA PASSWORD Y DAMOS PISTAS EN FUNCION DE LOS ACIERTOS
function checkRespuesta() {
    var posicionAcertada = [];
    var colorAcertado = [];

    //Recorremos y comparamos la contraseñaGenerada con la Respuesta
    for (i = 0; i < passGenerada.length; i++) {
        //Si en la posicion i coinciden ambas la posicion y el color es correcto
        if (passGenerada[i] == respuesta[i]) {
            posicionAcertada[i] = true;
            colorAcertado[i] = true;
        } else {
            //Si no hay que comprobar si en la respuesta estan los colores de la contraseña
            posicionAcertada[i] = false;
            colorAcertado[i] = false;
            for (a = 0; a < passGenerada.length; a++) {
                if (respuesta[i] == passGenerada[a]) {
                    colorAcertado[i] = true;
                }
            }
        }
    }

    //Mostramos las pistas segun el numero de aciertos y las posiciones
    for (i = 0; i < passGenerada.length; i++) {
        if (posicionAcertada[i] == true) {
            document.getElementById(turno + "pista" + i).style.backgroundColor = "black";
        } else if (colorAcertado[i] == true) {
            document.getElementById(turno + "pista" + i).style.backgroundColor = "white";
        }
    }

    //Comprobamos que todas las posiciones son correctas. Si todas son correctas ganamos la partida
    for (i = 0; i < passGenerada.length; i++) {
        if (posicionAcertada[i] == true) {
            gana = true;
        } else {
            gana = false;
            break;
        }
    }
}


//2.4 COMPROBAMO SI HEMOS GANADO O PERDIDO
function HasGanado() {

    //Si ha ganado mostramos la contraseña y informamos de que ha ganado
    if (gana == true) {
        //Mostramos la contraseña
        for (i = 0; i < coloresJuego.length; i++) {
            document.getElementById("pass" + i).style.background = passGenerada[i];
        }
        alert("Usted Gana");
        var again = confirm("¿Volver a Jugar?");
        if (again) {
            location.reload();
        } else {
            window.close();
        }

    } else if (turno >= 7) {
        //Mostramos la contraseña
        for (i = 0; i < coloresJuego.length; i++) {
            document.getElementById("pass" + i).style.background = passGenerada[i];
        }
        alert("Nº de Fallos Sobrepasado");

        var again = confirm("¿Volver a Jugar?");
        if (again) {
            location.reload();
        } else {
            window.close();
        }
    }
}


//1. GENERAMOS LA CONTRASEÑA
function GenerarPass() {
    for (i = 0; i < coloresJuego.length; i++) {
        passGenerada[i] = coloresJuego[Math.floor(Math.random() * 4)];
        document.getElementById("pass" + i).style.background = "black";
        document.getElementById("pass" + i).style.backgroundImage = "URL(images/candado.png)";
    }
}


/*****************************************************************************
 ************************* - FUNCIONES DE LOS BOTONES - **********************
 *****************************************************************************/

//FUNCION PARA CREAR UNA NUEVA PARTIDA
function Reload() {
    location.reload();
}

//FUNCION PARA MOSTRAR U OCULTAR LA PASSWORD A ADIVINAR
function verRespuesta() {
    if (verOcultar == false) {
        //Mostramos la contraseña
        for (i = 0; i < coloresJuego.length; i++) {
            document.getElementById("pass" + i).style.background = passGenerada[i];
        }
        document.getElementById("btn02").innerHTML = "Ocultar Solucion"
        verOcultar = true;
    } else {
        //Ocultamos la contraseña
        for (i = 0; i < coloresJuego.length; i++) {
            document.getElementById("pass" + i).style.background = "black";
            document.getElementById("pass" + i).style.backgroundImage = "URL(images/candado.png)";
        }
        document.getElementById("btn02").innerHTML = "Ver Solucion"
        verOcultar = false;
    }
}