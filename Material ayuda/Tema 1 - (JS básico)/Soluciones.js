// Ejercicios básicos para aprender a usar JS

// Ejercicio 1
// Hacer un "Hola mundo" por consola

console.log("Hola mundo");

// Ejercicio 2
// Hacer un "Hola mundo" en un archivo HTML, pero usando JS y el contenedor "contenido"

document.getElementById("contenido").innerHTML = "<h1>Hola mundo</h1>";

// Ejercicio 3
// Crea una variable que contenga "Me encanta JS" y luego saca por consola "Hola mundo, Me encanta JS".
// Pista: Debes usar la variable de forma obligatoria, es decir, no puedes poner en la misma linea: ....("Hola mundo, Me encanta JS")

var miVariable = "Me encanta JS";

console.log("Hola mundo, " + miVariable);

// Ejercicio 4
// Hacer una caja de texto y un botón, y cuando se presione el botón aparezca en la caja de texto "Hola"
// Pista: Debes crear el código HTML de ambos y luego introducirlo en el html

var cajaTexto = "<input type=\"text\" id=\"cajaTexto\"/>";
var boton = "<button onclick=\"saludar()\">Saludar</button>";

document.getElementById("contenido").innerHTML = (cajaTexto + "<br/>" + boton);

function saludar()
{
    document.getElementById("cajaTexto").value = "Hola";
}

// Ejercicio 5
// Reutiliza el ejercicio 4 y crea una variable (global, es decir, para todo el archivo, que no esté dentro de ninguna función)
// booleana y una función que haga que si la variable es verdadera, en la caja de texto ponga "Variable Verdadera" y si no "Variable falsa"
// Pista: debemos llamar a la función al principio del archivo, para que se ejecute al comienzo (Según cargue la página)
// Opcional: juega con el valor de la variable booleana para comprobar que funciona bien.

var miVariableBooleana = true;

function esVerdadera()
{
    if (miVariableBooleana == true)
    {
        document.getElementById("cajaTexto").value = "Variable Verdadera";
    }
    else if (miVariableBooleana == false)
    {
        document.getElementById("cajaTexto").value = "Variable falsa";
    }
}

esVerdadera();