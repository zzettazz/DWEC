var aMostrar = "";
aMostrar = aMostrar.concat("URL Completa: || "+window.location.href+"<br/>");
aMostrar = aMostrar.concat("Pathname: || "+window.location.pathname+"<br/>");
aMostrar = aMostrar.concat("Protocolo/Puerto: || "+window.location.protocol+"<br/>");
aMostrar = aMostrar.concat("Servidor/Hostname: || "+window.location.host+"<br/>");
document.getElementById("resultado").innerHTML=aMostrar;
