var consola = "";
var contador = 0;
var contadorIntervalo = 0;
var bucleEnMarcha = false;
let intervalo; // Mover la declaración de intervalo fuera de la función

function agregarLinea(linea) {
    consola += linea;
    document.getElementById("miDiv").innerHTML = consola;
}

document.addEventListener('keydown', teclaPresionada);

function teclaPresionada(event) {
    event.preventDefault();
    agregarLinea('<h4>Tecla presionada:' + event.key + '</h4>');
}

var botonFeo = document.getElementById("botonFeo");

botonFeo.onmouseover = function () {
    if (!bucleEnMarcha) {
        if (contador < 10) {
            var nuevaPosicionX = Math.floor(Math.random() * window.innerWidth);
            var nuevaPosicionY = Math.floor(Math.random() * window.innerHeight);

            botonFeo.style.left = nuevaPosicionX + 'px';
            botonFeo.style.top = nuevaPosicionY + 'px';

            contador++;
        } else {
            botonFeo.innerText = "ME TIENES FRITO";

            botonFeo.style.left = 200 + 'px';
            botonFeo.style.top = 200 + 'px';

            setTimeout(comenzarIntervalo, 2000); // Retraso de 2 segundos
        }
    }
};

function modificarIntervalo(accion) {
    // Quita la palabra clave "let" para que intervalo sea una variable global
    if (accion == "comenzar") {
        intervalo = setInterval(locura, 100);
        bucleEnMarcha = true;
    } else if (accion == "finalizar") {
        clearInterval(intervalo);
        intervalo = null;
        bucleEnMarcha = false;
    }
}

function comenzarIntervalo() {
    modificarIntervalo("comenzar");
}

function locura() {
    if (contadorIntervalo < 50) {
        var nuevaPosicionX = Math.floor(Math.random() * window.innerWidth);
        var nuevaPosicionY = Math.floor(Math.random() * window.innerHeight);

        botonFeo.style.left = nuevaPosicionX + 'px';
        botonFeo.style.top = nuevaPosicionY + 'px';

        contadorIntervalo++;
        console.log("BUCLE: " + contadorIntervalo);
    } else {
        contador = 0;
        contadorIntervalo = 0;

        botonFeo.innerText = "CÓGEME SI PUEDES";

        botonFeo.style.left = 200 + 'px';
        botonFeo.style.top = 200 + 'px';

        modificarIntervalo("finalizar");

        console.log("FIN DEL BUCLE");
    }
}
