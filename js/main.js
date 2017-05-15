function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var selector = document.getElementById("select").value;
	var twitter = document.getElementById("input-social").value;

	var nombreV = document.getElementById("el-nombre");
	var apellidoV = document.getElementById("el-apellido");
	var emailV = document.getElementById("el-email");
	var passwordV = document.getElementById("el-password");
	var selectV = document.getElementById("el-select");


	if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
		var respuestaNom = document.createElement("span");		
		var textoNom = document.createTextNode("La primera letra debe ser en mayúscula");
		respuestaNom.appendChild(textoNom);		
		nombreV.appendChild(respuestaNom);

	}

	if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido))){
		var respuestaApe = document.createElement("span");				
		var textoApe = document.createTextNode("La primera letra debe ser en mayúscula");
		respuestaApe.appendChild(textoApe);		
		apellidoV.appendChild(respuestaApe);
	}


	if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email)) ) {
		var respuestaEmail = document.createElement("span");				
		var textoEmail = document.createTextNode("Ingrese correctamente su email");
		respuestaEmail.appendChild(textoEmail);		
		emailV.appendChild(respuestaEmail);
	}	

	if((password == "password") || (password == 123456) || (password == 098754) || (password.length < 5) || (password.length > 7 )) {
		var respuestaPass = document.createElement("span");				
		var textoPass = document.createTextNode("Debe tener 6 dígitos, no debe ser password, ni 123456 ni 098754");
		respuestaPass.appendChild(textoPass);		
		passwordV.appendChild(respuestaPass);
	}

	if(selector == "0" || selector =="") {
		var respuestaSelect = document.createElement("span");				
		var textoSelect = document.createTextNode("Elige una opción");
		respuestaSelect.appendChild(textoSelect);		
		selectV.appendChild(respuestaSelect);

	}

	//Function para que queden los input vacios 
	campoVacio(); 
}

function campoVacio(){
	document.getElementById("name").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("input-email").value = "";
	document.getElementById("input-password").value = "";
	document.getElementById("select").value = "0";
	document.getElementById("input-social").value = "";
	document.getElementById("el-checkbox").checked = "";	
}



	
