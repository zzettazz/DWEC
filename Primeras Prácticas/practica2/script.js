function evaluar()
{
    var opcion1 = "Uno es MAYOR que Dos";
    var opcion2 = "Uno es MENOR que Dos";
    var opcion3 = "Uno es IGUAL que Dos";
    
    var edadUno = Number(document.getElementById("uno").value);
    var edadDos = Number(document.getElementById("dos").value);

    if (edadUno > edadDos) setearTexto("div1",opcion1);
    else if (edadUno < edadDos) setearTexto("div1",opcion2);
    else if (edadUno === edadDos) setearTexto("div1",opcion3);
    else setearTexto("div1","ERROR");

}

function setearTexto(id,texto)
{
    document.getElementById(id).innerHTML=texto;
}

function calcularParImpar()
{
    var esPar = "El número es PAR";
    var esImpar = "El número es IMPAR";

    var numero = Number(document.getElementById("numero").value);

    if (numero % 2 == 0) setearTexto("div2",esPar);
    else if (numero % 2 != 0) setearTexto("div2",esImpar);

}