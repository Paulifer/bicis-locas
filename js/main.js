function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasenia = document.getElementById("input-password").value;	
  var selector =  document.getElementById("selection")
  

    var validaNombre =document.getElementsByClassName("input-box")[0];
    var validaApellido =document.getElementsByClassName("input-box")[1];
    var validaCorreo =document.getElementsByClassName("input-box")[2];
    var validaContrasenia =document.getElementsByClassName("input-box")[3];
    var validaSelector = document.getElementsByClassName("input-box")[4];
   
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
 	   var spancitoN = document.createElement("span");
       var mensajeN = document.createTextNode("Este campo no debe estar vacio");
       spancitoN.appendChild(mensajeN);
       validaNombre.appendChild(spancitoN);
 	 return false;
 	
 	}else if(spancitoN!=null) {
            validaNombre.removeChild(spancitoN);
        }else if( nombre == "" || nombre.length == 0 || nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
       var spancitoNma = document.createElement("span");
       var mensajeNma = document.createTextNode("Debe contener mayuscula inicial");
       spancitoNma.appendChild(mensajeNma);
       validaNombre.appendChild(spancitoNma);
       return true;
    } 
     if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
 	   var spancitoA = document.createElement("span");
       var mensajeA = document.createTextNode("Este campo no debe estar vacio");
       spancitoA.appendChild(mensajeA);
       validaApellido.appendChild(spancitoA);
 	 return false;
 	
 	}else if( apellido == "" || apellido.length == 0 || apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
       var spancitoAma = document.createElement("span");
       var mensajeAma = document.createTextNode("Debe contener mayuscula inicial");
       spancitoAma.appendChild(mensajeAma);
       validaApellido.appendChild(spancitoAma);
       return true;
    }
    if((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))) {
       var spancitoC = document.createElement("span");
       var mensajeC = document.createTextNode("Este campo no debe estar vacio");
       spancitoC.appendChild(mensajeC);
       validaCorreo.appendChild(spancitoC);
       return false;
    }
    if(contrasenia == "123456" || contrasenia == "987654" || contrasenia.length<=6){ 
       var spancitoCon = document.createElement("span");
       var mensajeCon = document.createTextNode("debe contener almenos 6 caracteres");
       spancitoCon.appendChild(mensajeCon);
       validaContrasenia.appendChild(spancitoCon);
       return false;
    }else if( contrasenia == null || contrasenia.length == 0 || /^\s+$/.test(contrasenia) ){ 
     var spancitoContra = document.createElement("span");
       var mensajeContra = document.createTextNode("Este campo no debe estar vacio");
       spancitoContra.appendChild(mensajeContra);
       validaContrasenia.appendChild(spancitoContra);
       return false;
     }
   	if( selector == null || selector == 0 ) {
  		var spancitoS = document.createElement("span");
       	var mensajeS = document.createTextNode("Selecciona una opcion");
       	spancitoS.appendChild(mensajeS);
       	validaSelector.appendChild(spancitoS);
  		return true;
	}
   


}

