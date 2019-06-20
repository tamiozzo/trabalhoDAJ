/*var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList; recognition.continuous = false; recognition.lang = 'pt-BR';
var saida = document.querySelector('.output');
document.body.addEventListener('click',() =>{ recognition.start();} );
recognition.addEventListener('speechend', () => { recognition.stop();} );
recognition.addEventListener('error', (event) => { saida.textContent = 'Erro no reconhecimento do texto: ' + event.error;});
recognition.onresult = function(event) {
var last = event.results.length - 1;
var texto = event.results[last][0].transcript; saida.textContent = 'Resultado recebido: ' + texto + '.'; disparaEvento(texto);
}
//1- IMPLEMENTAR..... FUNCAO QUE IRA DISPARAR A ACAO CORRESPONDENTE A PALAVRA
function disparaEvento(palavra){}
//2- IMPLEMENTAR FUNCAO DA PROMESSA
//4 - INCLUIR OS EVENTOS DE CLICK NOS ELEMENTOS <TD> E <TR> DA PAGINA //5 - METODO PARA ALTERAR O BACKGROUND DAS CELULAS
//
//
*/
window.onload = function(){
	cores = ['#999', '#03f', '#ff6', '#F00', '#60c', '#ff0'];

	elementos = [document.getElementsByClassName("es")[0], 
	document.getElementsByClassName("pr")[0], 
	document.getElementsByClassName("cl")[0],
	document.getElementsByClassName("pro")[0], 
	document.getElementsByClassName("ca")[0],
	document.getElementsByClassName("bo")[0] 
	];
	trocaCoresAntiHorario(1);
	//trocaCoresHorario(1);

	function trocaCoresAntiHorario(vez){
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

	function trocaCoresHorario(vez){
		i = 0;
		for(elemento of elementos){
			elemento.style.backgroundColor = cores[5- (vez+i)];
			console.log("valor de vez = "+ vez);
			console.log("valor de i = " + i);
			console.log("valor de 5-(vez+i) =" + (5- (vez+i)));
			if(vez+i > 0){
				i--;
			}else{
				console.log("chegou no 0");
				i = 5 - vez;
			}
		}
		if (vez != 5) {
			vez++;
		}else{
			vez = 0;
		}
		setTimeout(() => {trocaCoresAntiHorario(vez)}, 1000);
	}

};
