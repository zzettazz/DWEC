// DECLARACIÓN DE VARIABLES
var intervalo;
var palabrasDeMenosDe5Letras = [];
var palabrasConCO = [];
var palabrasSinFiltrar = [];
var palabrasDeFrase = [];
var palabrasAPorO = [];

// METODO LLAMADO DESDE EL HTML
function comprobar()
{
    // ¿POR QUÉ USAMOS UN INTERVALO? = PORQUE QUEREMOS QUE HAYA RETARDO
    // ENTRE LA LLAMADA Y LA EJECUCIÓN DEL MÉTODO (POR EJEMPLO 200 milis.)
    intervalo = setInterval(hacerComprobacion,200);
}

function hacerComprobacion()
{
    // MUY IMPORTANTE PARA REFRESCAR LAS VARIABLES
    resetearVariables();
    
    // OBTENEMOS EL VALOR DEL CAMPO DE TEXTO DEL HTML
    var frase = document.getElementById("frase").value;

    // DIVIDIMOS LA FRASE EN PALABRAS DIVIDIDAS POR ESPACIOS EN UN ARRAY
    var palabrasSinFiltrar = frase.split(" ");

    // RECORREMOS EL ARRAY PARA COMPROBAR QUE NO NOS HAN METIDO ESPACIOS EN BLANCO DE SOBRA
    palabrasSinFiltrar.forEach(palabras => {
        // REEMPLAZAMOS LOS ESPACIOS DE CADA PALABRA
        var palabraSinEspacios = palabras.replace(/\s+/g, '');

        // SI RESULTA QUE NO ESTÁ VACÍA, LA METEMOS EN EL ARRAY
        if (palabraSinEspacios != "") palabrasDeFrase.push(palabraSinEspacios);
    });

    // APARTADO A
    var listaA = null;

    // RECORREMOS EL ARRAY CON LAS PALABRAS
    palabrasDeFrase.forEach(palabra => {

        // SI TIENE MENOS DE 5 CARACTERES LA INCLUIMOS EN LA LISTA
        if (palabra.length < 5 ) palabrasDeMenosDe5Letras.push(palabra);
    });

    // SI EL CAMPO DE TEXTO NO ESTÁ VACÍO Y EXISTEN PALABRAS DE MENOS DE 5 LETRAS
    if (document.getElementById("frase").value != "" && palabrasDeMenosDe5Letras[0] != null)
    {
        // HACEMOS USO DE LA FUNCION PARA CREAR UNA LISTA PASANDO ARRAY Y TÍTULO
        listaA = crearLista(palabrasDeMenosDe5Letras,"Palabras de menos de 5 letras");
    }

    // APARTADO B
    var listaB = null;

    // RECORREMOS EL ARRAY CON LAS PALABRAS
    palabrasDeFrase.forEach(palabra => {

        // SI LA PALABRA CONTIENE "CO" AÑADIMOS LA PALABRA A UN NUEVO ARRAY
        if (palabra.includes("co")) palabrasConCO.push(palabra);
    });

    // MISMA COMPARACIÓN QUE EL APARTADO A
    if (document.getElementById("frase").value != "" && palabrasConCO[0] != null)
    {
        // USAMOS EL METODO PARA CREAR UNA LISTA
        listaB = crearLista(palabrasConCO,"Palabras con CO");
    }

    // APARTADO C
    var listaC = null;

    // DEBE SER LISTA B PORQUE NECESITAMOS SABER
    // ANTES SI EXISTEN PALABRAS CON CO
    if (listaB != null)
    {
        var primerCo = [];

        // COGEMOS LA PRIMERA PALABRA DE LA LISTA "CO"
        // Y LA REEMPLAZAMOS POR PEPE
        primerCo[0] = ("("+palabrasConCO[0]+") = Pepe");

        // CREMOS LA LISTA
        listaC = crearLista(primerCo,"Primera Palabra con CO");
    }

    // APARTADO D
    var listaD = null;

    // DEBEMOS EVALUAR LA LISTA A PORQUE ES LA CONTINENE
    // TODAS LAS PALABRAS, SI NO HAY PALABRAS, NO TIENE SENTIDO
    // CREAR LA LISTA D
    if (listaA != null)
    {
        // RECORREMOS EL ARRAY CON LAS PALABRAS
        palabrasDeFrase.forEach(palabra => {

            // REEMPLAZAMOS LAS "a" (MINÚSCULAS) por "o" (MINÚSCULAS)
            var palabraFormateada = palabra.replace(/a/g, 'o');
            // REEMPLAZAMOS LAS "A" (MAYÚSCULAS) por "O" (MAYÚSCULAS)
            var palabraFormateadaTotal = palabraFormateada.replace(/A/g, 'O');

            // METEMOS LA PALABRA FORMATEADAS EN EL ARRAY
            palabrasAPorO.push(palabraFormateadaTotal);
        });
    
        // CREAMOS LA LISTA
        listaD = crearLista(palabrasAPorO,"Palabras \"a\" por \"o\"");
    }

    // APARTADO E
    var listaE = null;
    var arrayE = [];
    var totalRepeticiones = 0;

    // EVALUAMOS LA LISTA A PORQUE SI NO EXISTE, ESTE APARTADO NO TIENE SENTIDO
    if (listaA != null)
    {
        // NOS ASEGURAMOS DE QUE EL NUMERO DE PALABRAS NO SEA SUPERIOR A 10
        if (palabrasDeFrase.length < 10) totalRepeticiones = palabrasDeFrase.length;
        else if (palabrasDeFrase.length >= 10) totalRepeticiones = 10;

        // NOS COPIAMOS COMO MAXIMO LAS 10 PALABRAS A UN NUEVO ARRAY
        for (var i = 0; i < totalRepeticiones; i++)
        {
            arrayE[i] = palabrasDeFrase[i];
        }

        // CREAMOS LA LISTA
        listaE = crearLista(arrayE,"Primeras 10 palabras");
    }

    // AL FINAL BORRAMOS EL INTERVALO PARA EVITAR UN BUCLE
    clearInterval(intervalo);

    // MOSTRAMOS EL RESULTADO
    var resultadoAMostrar = "";

    // LE PASAMOS AL METODO CONSTRUIR LISTAS TODAS LAS LISTAS DENTRO DE UN ARRAY
    // PARA EVALUAR CADA UNA DESDE ESE METODO
    resultadoAMostrar = construirListas([listaA,listaB,listaC,listaD,listaE]);

    // MOSTRAMOS EL RESULTADO EN EL HTML Y SI NO, LO MOSTRAMOS VACIO
    if (resultadoAMostrar != "") document.getElementById("resultado").innerHTML=resultadoAMostrar;
    else document.getElementById("resultado").innerHTML="";
}

function construirListas(listas)
{
    // INICIALIZAMOS LA VARIABLE RESULTADO
    var total = "";

    // ITERAMOS SOBRE EL ARRAY QUE LE HEMOS PASADO
    listas.forEach(lista => {
        // SI LA LISTA NO ESTÁ VACÍA, LA AÑADIMOS AL RESULTADO
        if (lista != null) total = total+lista+"<br/>";
    });

    // DELVOLVEMOS EL RESULTADO
    return total;
}

// FUNCIÓN PARA CREAR UNA LISTA USANDO CODIGO HTML
function crearLista(elArray,titulo)
{
    // CREAMOS EL FIELDSET CON EL TITULO DE LA LISTA
    var lista="<fieldset style=\"width: 30%;\"><legend>"+titulo+"</legend><ul>";
    
    // ITERAMOS POR CADA PALABRA DEL ARRAY Y LA AÑADIMOS A LA LISTA
    elArray.forEach(palabra => {
        lista = lista + ("<li>"+palabra+"</li>");
    });

    // AÑADIMOS EL FINAL DEL CODIGO HTML DE LA LISTA
    var lista = lista + "</ul></fieldset>";

    return lista;
}

// ESTA VARIABLE SIRVE PARA RESETEAR LAS VARIABLES SELECCIONADAS
// TIENE UTILIDAD POR EJEMPLO PARA REFRESCAR CADA VEZ QUE PULSAMOS UNA TECLA
function resetearVariables()
{
    palabrasDeMenosDe5Letras = [];
    palabrasConCO = [];
    palabrasSinFiltrar = [];
    palabrasDeFrase = [];
    palabrasAPorO = [];
}