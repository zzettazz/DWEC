var ventana;

function cambiarUsuario()
{
    ventana = window.open("", "Ventana Emergente", "width=400,height=200");

    ventana.document.write("Usuario: <input type=\"text\" disabled/><input type=\"button\" onclick=\"ventana.close()\" value=\"Cambiar\"/>");
}