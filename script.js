const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(."caixa-perguntas");
const caixaAlternativas= document.querySelector(."ciaxa-alternativas");
const caixaResultado= document.querySelector(."caixa-resultado")
const textoResultado= document.querySelector(."texto-resultado");

const perguntas=[
  {
    enunciado:"Você prefere comer"
      alternativas:[
  "pizza";
"hamburguer";
]
},
{
    enunciado:"Qual o melhor lugar para comer?"
      alternativas:[
  "Em casa";
"Na lanchonete/restaurante";
]
},
{
    enunciado:"Qual o melhor refrigerante"
      alternativas:[
  "Coca-cola";
"Pepsi";
]
},
{
    enunciado:"Qual é o melhor"
      alternativas:[
  "Nescau";
"Toddy";
]
},
{
    enunciado:"Você prefere comer "
      alternativas:[
  "Legumes e verduraras";
"Frituras e gosduras";
]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal=" ";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++;
  mostraPergunta();
}
mostraPergunta();
