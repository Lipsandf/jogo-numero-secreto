let listaDeNumerosSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let paravraTentativa = tentativas > 1? 'Tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${paravraTentativa} !`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto ){
            exibirTextoNaTela('p', 'O número secreto é memor');
        } else{
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

    }
function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantodadeDeElementosNaLista = listaDeNumerosSorteado.length;

    if(quantodadeDeElementosNaLista == numeroLimite ){
        listaDeNumerosSorteado = [];
    }
    if(listaDeNumerosSorteado.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio();  
    } else{
        listaDeNumerosSorteado.push(numeroEscolhido)
        console.log(listaDeNumerosSorteado)
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}