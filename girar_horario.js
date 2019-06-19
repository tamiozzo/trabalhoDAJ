window.onload = function(){
	cores = ['#999', '#03f', '#ff6', '#ff0', '#60c', '#F00'];

	elementos = [document.getElementsByClassName("es")[0], 
	document.getElementsByClassName("pr")[0], 
	document.getElementsByClassName("cl")[0], 
	document.getElementsByClassName("bo")[0], 
	document.getElementsByClassName("ca")[0], 
	document.getElementsByClassName("pro")[0]];
	trocaCoresHorario(1);



	function trocaCoresHorario(vez){
		i = 0;
		for(elemento of elementos){
			elemento.style.backgroundColor = cores[vez+i];
			
			if(vez+i<5){
				console.log("valor de vez+i=" + (vez+i));
				i++;
			}else{
				console.log("chegou no 5");
				console.log("valor de vez+i=" + (vez+i));
				i = 0 - vez;
			}
		}
		if (vez < 5) {
			vez++;
		}else{
			vez = 0;
		}
		setTimeout(() => {trocaCoresHorario(vez)}, 1000);
	}

};
