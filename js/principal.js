var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);


var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
	console.log(pacientes[i]);



	var infopeso = pacientes[i].querySelector(".info-peso");
	var infoaltura = pacientes[i].querySelector(".info-altura");
	var infogordura = pacientes[i].querySelector(".info-gordura")
	var infoimc = pacientes[i].querySelector(".info-imc")

	var paciente = {
		peso: infopeso.textContent,
		altura: infoaltura.textContent,
		gordura: infogordura.textContent,
		
	}

	infoimc.textContent = calculaImc(paciente)
}




function calculaImc(paciente){
	console.log(paciente)
	var imc = 0;
	var pesoValido = true;
	var alturaValida = true;
	

	if(paciente.peso < 0 || paciente.peso > 150) {
		pesoValido = false;
	} 
	if(paciente.altura < 0 || paciente.altura > 2.5){
		alturaValida = false;
	}

	if(pesoValido && alturaValida){
		imc = paciente.peso / paciente.altura**2;

		return imc.toFixed(2);
	} else {
		var imc = "IMC Inválido";
		
		return imc;
	}
}

