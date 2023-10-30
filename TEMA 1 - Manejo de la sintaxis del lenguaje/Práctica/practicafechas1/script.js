const patronFechas = /^[\d]{2}\/[\d]{2}\/[\d]{4}$/;

function comprobarFecha()
{
    var fechaIntroducida = document.getElementById("fechaNacimiento").value;

    var fechaTraducida = refactorizarFecha(fechaIntroducida);
    var hoy = new Date();

    var anyoHoy = hoy.getFullYear();
    var anyoFechaIntroducida = fechaTraducida.getFullYear();

    var diferencia = 0;

    if (anyoHoy > anyoFechaIntroducida) diferencia = (anyoHoy - anyoFechaIntroducida);
    else diferencia = (anyoFechaIntroducida - anyoHoy);

    document.getElementById("resultado").value = diferencia;
}

function calcularDiferencia()
{
    var texto1 = document.getElementById("fecha1").value;
    var texto2 = document.getElementById("fecha2").value;

    var cumplePatron1 = patronFechas.test(texto1);
    var cumplePatron2 = patronFechas.test(texto2);

    if (cumplePatron1 && cumplePatron2)
    {
        var fecha1 = refactorizarFecha(texto1);
        var fecha2 = refactorizarFecha(texto2);

        // Calcula la diferencia en milisegundos
        var diferenciaEnMilisegundos = fecha1 - fecha2;

        // Calcula la diferencia en días
        var diferenciaEnDias = Math.abs(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
        if (diferenciaEnDias > 31) while (diferenciaEnDias > 31){diferenciaEnDias = (diferenciaEnDias-3)};

        // Calcula la diferencia en meses
        var diferenciaEnMeses = Math.abs((fecha1.getFullYear() - fecha2.getFullYear()) * 12 + (fecha1.getMonth() - fecha2.getMonth()));
        if (diferenciaEnMeses > 12) while (diferenciaEnMeses > 12){diferenciaEnMeses = (diferenciaEnMeses-12)};

        // Calcula la diferencia en años
        var diferenciaEnAnios = Math.abs(fecha1.getFullYear() - fecha2.getFullYear());

        var diasTxt = "día";
        var mesesTxt = "mes";
        var anyosTxt = "año";

        if (diferenciaEnDias > 1 || diferenciaEnDias == 0) diasTxt="días";
        if (diferenciaEnMeses > 1 || diferenciaEnMeses == 0) mesesTxt="meses";
        if (diferenciaEnAnios > 1 || diferenciaEnAnios == 0) anyosTxt="años";

        var respuesta = "La diferencia es de "+
        diferenciaEnDias+" "+diasTxt+", "+
        diferenciaEnMeses+" "+mesesTxt+" y "+
        diferenciaEnAnios+" "+anyosTxt+".";

        document.getElementById("textorespuesta").value = respuesta;

    }
    else
    {
        alert("Alguna fecha no cumple el patrón (DD/MM/YYYY)");
    }
}

function refactorizarFecha(fechaIntr)
{
    var dia = fechaIntr.substring(0,2);
    var mes = fechaIntr.substring(3,5);
    var anyo = fechaIntr.substring(6,10);
    var fechaTxt = anyo+"-"+mes+"-"+dia;

    var fecha = new Date(fechaTxt);

    return fecha
}