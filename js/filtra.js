var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

	digitado = new RegExp(this.value, "i");
	console.log(digitado);

	
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){

		pacientes.forEach(function(paciente){

			var nome = paciente.querySelector(".info-nome").textContent
			if(!digitado.test(nome, "i")){
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}
		
		})
	} else {

		pacientes.forEach(function(paciente){
			paciente.classList.remove("invisivel")
	}) 
	} 

})