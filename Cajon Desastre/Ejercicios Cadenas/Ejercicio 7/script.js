var mensajeSalida;

function validarNombre(nombre)
{ 
    var expresion = /\d/;
    

    if ( (!expresion.test(nombre)) && (nombre.length >= 3) && (nombre.length <=25) )
    {
        return true;
    }
    else
    {
        var arrayCaracteres = nombre.split("");
        arrayCaracteres.forEach(caracter => {
        if(expresion.test(caracter)){
            mensajeSalida = mensajeSalida+("<h4 style=\"color: red;\"> Hay error en el caracter " + (arrayCaracteres.indexOf(caracter)+1) + "</h4>");
        }
            
        });
        return false;
    }
}

function validarEdad(edad)
{
    if ( (!isNaN(edad)) && (edad >= 5) && (edad <= 110)) 
    {
        return true;
    }
    else
    {   

        if( isNaN(edad) ) {
            mensajeSalida = mensajeSalida + ("<h4 style=\"color: red;\"> La edad debe ser un numero </h4>" );
            
        }
        else if ((edad < 5) || (edad > 110)) {
            
            mensajeSalida = mensajeSalida + ("<h4 style=\"color: red;\"> La edad debe estar entre 5 y 110 </h4>" );
            
        }
        return false;
    }
}

function validarDatos()
{
    var nombre =  document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    if((nombre.trim() == "")  || (edad.trim() == ""))
    {
        alert("Debes escribir algun dato");
    }
    else if(validarNombre(nombre.trim()) && validarEdad(edad.trim()))
    { 
        mensajeSalida = "<h4 style=\"color: darkblue;\"> Esta todo correcto Jose Luis </h4>";
        document.getElementById("resultado").innerHTML = mensajeSalida;
    }
    else
    {
        document.getElementById("resultado").innerHTML = mensajeSalida;
    }

    console.log(mensajeSalida);
}


