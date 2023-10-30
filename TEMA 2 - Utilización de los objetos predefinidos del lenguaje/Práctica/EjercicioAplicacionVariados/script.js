var serv = window.location.host;
var puertoFix = (serv.substring((serv.length-4),serv.length));

var aMostrar = "";
aMostrar = aMostrar.concat("URL Completa: || "+window.location.href+"<br/>");
aMostrar = aMostrar.concat("Pathname: || "+window.location.pathname+"<br/>");
aMostrar = aMostrar.concat("Protocolo: || "+window.location.protocol+"<br/>");
aMostrar = aMostrar.concat("Puerto: || "+puertoFix+"<br/>")
aMostrar = aMostrar.concat("Servidor/Hostname: || "+(serv.substring(0,(serv.length-5)))+"<br/>");
document.getElementById("resultado").innerHTML=aMostrar;