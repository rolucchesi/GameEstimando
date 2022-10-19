const perguntaAtual = document.querySelector('.pergunta-atual')
const respostaAtual = document.querySelector('.resposta-atual')
const btnStart = document.querySelector('#btn-start')
const btnEnviarPergunta = document.querySelector('#btn-enviar-pergunta')
const telaPergunta = document.querySelector('.tela-pergunta')
const arrayPalavrasAtual = []
let palavraAleatoria

const listaPalavras = [
    {word:'Qual fruta favorita?',categoria:'maçã'},
    {word:'Qual sorvete favorito?',categoria:'chocolate'},
    {word:'Quantos % não usam cueca',categoria:'60%'},
    {word:'Qual seu emprego?',categoria:'Engenheiro'},
    {word:'Qual esporte pratica?',categoria:'Corrida'},

];

btnStart.addEventListener('click',function() {
    gerarArrayPalavras(5);
    perguntaAtual.textContent = arrayPalavrasAtual[0].word
    respostaAtual.textContent = 'Resposta vencedora é: ' + arrayPalavrasAtual[0].categoria
    telaPergunta.classList.remove('hidden')
})

btnEnviarPergunta.addEventListener('click',function(){
    respostaAtual.classList.remove('hidden')
})

const gerarArrayPalavras = function (n) {
    arrayPalavrasAtual.length = 0
    for (let i = 0;i<n;i++){
        arrayPalavrasAtual.push(gerarPalavraAleatoria())
    }
}

const gerarPalavraAleatoria = function () {
    palavraAleatoria = listaPalavras[Math.trunc(Math.random() * listaPalavras.length)]
    return arrayPalavrasAtual.includes(palavraAleatoria) ?  gerarPalavraAleatoria(): palavraAleatoria
};