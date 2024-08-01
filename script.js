const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Você prefere comer",
      alternativas:[
        {
       texto: "pizza",
afirmação:"afirmação"
},
{
  texto:"hamburguer",
  afirmação:"afirmação"
}
]
  },
  {
    enunciado:"Qual o melhor lugar para comer?"
      alternativas:[
    {
       texto: "em casa",
afirmação:"afirmação"
},
{
  texto:"na lanchonete",
  afirmação:"afirmação"
}
]
  },
{
    enunciado:"Qual o melhor refrigerante"
      alternativas:[
    {
       texto: "coca-cola",
afirmação:"afirmação"
},
{
  texto:"pepsi",
  afirmação:"afirmação"
}
]
  },
{
    enunciado:"Qual é o melhor"
      alternativas:[
    {
       texto: "nescau",
afirmação:"afirmação"
},
{
  texto:"toddy",
  afirmação:"afirmação"
}
]
  },
{
    enunciado:"Você prefere comer "
      alternativas:[
    {
       texto: "frutas e verduras",
afirmação:"afirmação"
},
{
  texto:"fritura e gorduras",
  afirmação:"afirmação"
}
]
  },

let atual = 0;
let perguntaAtual;
let historiaFinal=" ";

function mostraPergunta() {
if (atual >= perguntas.lenght) {
mostraResultado();
return;
} 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmação;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent="em 2049";
  textoresultado.textcontent = historiafinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
