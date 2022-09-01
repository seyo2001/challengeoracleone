// window. = function() {

//   setTimeout(document.querySelector('#loader').style.display = 'none',300);
	
// }



function encriptacion() {
  var texto = document.getElementById("textoEncriptar").value.toLocaleLowerCase();
  var txtCifrado = texto.replace(/e/img,"enter");
  var txtCifrado = txtCifrado.replace(/o/img,"ober");
  var txtCifrado = txtCifrado.replace(/i/img,"imes");
  var txtCifrado = txtCifrado.replace(/a/img,"ai");
  var txtCifrado = txtCifrado.replace(/u/img,"ufat");

  document.getElementById("imgDerecha").style.display = "none";
  document.getElementById("textImagenDerecha").style.display = "none";
  document.getElementById("textArea").innerHTML=txtCifrado;
  document.getElementById("textoEncriptar").value="";
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
}


function desencriptacion() {
    var texto = document.getElementById("textoEncriptar").value.toLocaleLowerCase();
  
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
  
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("textImagenDerecha").style.display = "none";
    document.getElementById("textArea").innerHTML=txtCifrado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
    document.getElementById("textoEncriptar").value="";
  }

  function copy(){

    var content = document.getElementById("textArea");
    
    content.select();
    document.execCommand('copy');
    document.getElementById("textoEncriptar").value="";

    alert("El Texto Encriptado ha sido Copiado!");

  }