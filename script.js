var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var g_Controller = false;
var saida = document.querySelector('.output');

document.body.addEventListener('click',() =>{ recognition.start();} );
recognition.addEventListener('speechend', () =>{ recognition.stop();} );
recognition.addEventListener('error', (event) =>{ saida.textContent = 'Erro no reconhecimento do texto: '+ event.error;});

recognition.onresult = function(event) 
{
    var last = event.results.length -1;
    var texto = event.results[last][0].transcript;
    saida.textContent = 'Resultado recebido: '+ texto + '.';
    disparaEvento(texto);
}

let p = new Promise ( (resolve, reject) => {
  setTimeout(() => {
    if(g_Controller)
        resolve('A promessa foi resolvida');
    else  
        reject ('A promessa foi rejeitada.');
  }, 10000);
})

//1-IMPLEMENTAR..... FUNCAO QUE IRA DISPARAR A ACAO CORRESPONDENTE A PALAVRA
function disparaEvento(palavra)
{
  if (palavra == "escopo"){
    console.log('Recebeu escopo');
    console.log(g_Controller);
    g_Controller = !g_Controller;
    console.log(g_Controller);
  }
  else if (palavra == "promessa"){
    console.log('Recebeu promessa');

    p.then( (mensagem) =>
             {alert(mensagem);} )
        .catch( (mensagem) =>
            {alert(mensagem);});
  }
  else if (palavra == "borbulhamento")
    console.log('Recebeu borbulhamento');
  else
    console.log('Recebeu outra palavra');

}

recognition.onspeechend = function() {
    recognition.stop();
  }
  

//2-IMPLEMENTAR FUNCAO DA PROMESSA

//4 -INCLUIR OS EVENTOS DE CLICK NOS ELEMENTOS <TD> E <TR> DA PAGINA

//5 -METODO PARA ALTERAR O BACKGROUND DAS CELULAS