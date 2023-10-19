var usarTexto = true;

// EJERCICIO A
var fechaHoy = new Date();
mostrarEnFormato(fechaHoy,true);

// EJERICIO B
var fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);
mostrarEnFormato(fecha85,true);

// EJERICIO C
var fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);
mostrarEnFormato(fecha187,true);

// EJERICIO D
var fecha85mas2anyos = new Date(fechaHoy);
fecha85mas2anyos.setFullYear(fecha85mas2anyos.getFullYear() + 2);
mostrarEnFormato(fecha85mas2anyos,true);

// EJERICIO E
var fecha187Menos24 = new Date(fecha187);
fecha187Menos24.setHours(fecha187Menos24.getHours() - 24);
mostrarEnFormato(fecha187Menos24,true);

// EJERICIO F
var fechaResto = (fecha85 - fecha187);
console.log(fechaResto);

function mostrarEnFormato(fecha,mostrarHoras)
{
    var dia = fecha.getDate();
    var mes = (fecha.getMonth()+1);
    var anyo = fecha.getFullYear();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var milisegundos = fecha.getMilliseconds();

    if (mostrarHoras === true)
    {
        if (usarTexto === true)
        {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            options.timeZoneName = 'short';
            
            console.log(fecha.toLocaleString('es-ES', options)+"\t|\t"+horas+":"+minutos+":"+segundos+" :: "+milisegundos);
        }
        else if (usarTexto === false)
        {
            console.log(dia+"/"+mes+"/"+anyo+"\t|\t"+horas+":"+minutos+":"+segundos+" :: "+milisegundos);
        }
    }
    else if (mostrarHoras === false)
    {
        if (usarTexto === true)
        {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            options.timeZoneName = 'short';
            
            console.log(fecha.toLocaleString('es-ES', options));
        }
        else if (usarTexto === false)
        {
            console.log(dia+"/"+mes+"/"+anyo);
        }
    }
    else
    {
        console.log("ERROR");
    }

}