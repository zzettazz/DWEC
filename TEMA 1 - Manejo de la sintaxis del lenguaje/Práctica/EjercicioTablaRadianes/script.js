var decimales = 2;
var separacion_casillas = "style=\"padding:10px\"";

var texto = "";
var tabla = "<table border=\"1\">"+
"<tr>"+
    "<th "+separacion_casillas+">Ángulo</th>"+
    "<th "+separacion_casillas+">Radianes</th>"+
    "<th "+separacion_casillas+">SIN</th>"+
    "<th "+separacion_casillas+">COS</th>"+
"</tr>";

for (i = 0;i<=360;i=i+10)
{
    //INICIO DE ROW
    texto = texto.concat("<tr>")

    //Ángulo
    texto = texto.concat("<th>"+i+"</th>");

    //RADIANES
    var radianes = ((3.14 * i)/180).toFixed(decimales);
    texto = texto.concat("<th "+separacion_casillas+">"+radianes+"</th>");

    //SENO
    var seno = Math.sin(radianes).toFixed(decimales);
    texto = texto.concat("<th "+separacion_casillas+">"+seno+"</th>");

    //COSENO
    var coseno = Math.cos(radianes).toFixed(decimales);
    texto = texto.concat("<th "+separacion_casillas+">"+coseno+"</th>");

    //FINAL DE ROW
    texto = texto.concat("</tr>")
}

tabla = tabla.concat(texto);

tabla = tabla.concat("</table>");

document.getElementById("cuerpo").innerHTML=tabla;