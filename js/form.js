
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event){
	event.preventDefault();

	var form = document.querySelector("#form-add");
	var paciente = obtemPacienteForm(form)
	
	adicionaPacienteTabela(paciente)



	

	
	var pacientes = document.querySelectorAll(".paciente");
	checkInvalidez(pacientes)


}

function adicionaPacienteTabela(paciente){

	var pacienteTr = montaTr(paciente)
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr)


}

function checkInvalidez(pacientes){


	pacientes.forEach(function(paciente){
		if(paciente.querySelector(".info-imc").textContent == "IMC Inválido"){
			paciente.classList.add("paciente-invalido")}

	})

}

function obtemPacienteForm(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		
	}
	paciente.imc = calculaImc(paciente)
	return paciente 
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");

	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe)

	return td;
}

checkInvalidez(pacientes)