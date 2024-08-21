/*criando variavel "cellElements" que por padrão está chamando o objeto "document" 
e por sua vez está chamendo o metodo "querySelectorAll" que está indexdo com o valor data-celula
que está nomeado no documento HTML*/
const cellElements = document.querySelectorAll("[data-celula]");

/*criando variavel "boar" que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const bord = document.querySelector("[data-tabuleiro]");

/*criando variavel "msgtxtElements" que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const msgtxtElements = document.querySelector("[date-msg-txt]"); 

/*criando variavel  "winningmsg"que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const winningmsg = document.querySelector("[winning]");

/*criando variavel que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelectorAll"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const bntReiniciar = document.querySelector("[date-reiniciar]");

const restartPlacar = document.querySelector("[date-reiciniarplacar]");

const reiniciaPartida = document.querySelector("[bntJogo]")

const turnoAtual = document.querySelector("[data-turno]");
let turno = "X"; //Predefine o turno inicial como X

let isCircleTurn;// define a variavel "e"

//criar as três variaveis para fazer a atualização da pontuação
let placarX = document.querySelector("[data-X]");
let placarO = document.querySelector("[data-O]");
let placarEmpate= document.querySelector("[data-Empate]");

//três variáveis para fazer atualização da pontuação
let ponto_X=0;
let ponto_O=0;
let ponto_Empate=0;



//criando um array para ver quais são as possibilidade de vitória
const combinacaoDeVitoria =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0,3 , 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2 ,4, 6],
];
//Criando o método para começar o jogo
const inciaJogo = () =>{

  isCircleTurn = false; // definindo que a vez do circulo é falsa

  for(const cell of cellElements) {

    cell.classList.remove('circulo');
    cell.classList.remove('x');
    cell.removeEventListener('click', verificarClique);
    cell.addEventListener('click', verificarClique, {once: true});

  }

  //define onde o mouse passa
  setHover();

  bord.classList.add('x');

  winningmsg.classList.remove('show_msgVitoria');

};

const fimDeJogo = (empate) => {
  //verifica se deu empate
  if (empate) {
    ponto_Empate = ponto_Empate + 1; //Incrementa o contador
    msgtxtElements.innerText = "Empate!";
    placarEmpate.innerText = ponto_Empate; //Após ser incremnetado o 
  
  } else {
    if (isCircleTurn) {
      msgtxtElements.innerText = 'O venceu!';
      ponto_O++; // Incrementa o contador de vitórias do O
      placarO.innerText = ponto_O;
    } else {
      msgtxtElements.innerText = 'X venceu!';
      ponto_X++; // Incrementa o contador de vitórias do X
      placarX.innerText = ponto_X;
    }
  }

  winningmsg.classList.add('show_msgVitoria');
};

 //verifica quak jogador venceu
const verificaVitoria =(jogadorAtual) => {

  return combinacaoDeVitoria.some((combinacao) => {

    return combinacao.every((index) => {

      return cellElements[index].classList.contains(jogadorAtual);

    });

  });

};

const verificaEmpate = () =>{

  return [...cellElements].every(cell => {

    return cell.classList.contains('x') || cell.classList.contains('circulo')

  });

};

const placarAtual = () =>{
  placar_Empate.innerText(ponto_Empate)
  placar_O.innerText(ponto_O);
  placar_X.innerText(ponto_X);
}

const reiniciaPlacar = () => {
  ponto_X=0;
  ponto_O=0;
  ponto_Empate=0;

  placarX.innerText =ponto_X;
  placarO.innerText = ponto_O;
  placarEmpate.innerText = ponto_Empate;
};

const placeMark = (cell, classAdd) =>{

  cell.classList.add(classAdd);

};

const setHover = () =>{

  bord.classList.remove('circulo');
  bord.classList.remove('x');

  if(isCircleTurn){

    bord.classList.add('circulo');

  }else{


    bord.classList.add('x');
  }

};

const atualizaTurno= () =>{
  if(isCircleTurn){
    turno="O";
    turnoAtual.innerText=turno;
 }
  else{
    turno="X";
    turnoAtual.innerText=turno;
}  
}


 const mudaTurno=() =>{

  isCircleTurn = !isCircleTurn; // a variavel tem que ser diferende dela mesma

  setHover();
  atualizaTurno();

 };

 //criando metodo para verificar clique
const verificarClique= (e) => {

  const cell = e.target;

  const classAdd = isCircleTurn ? 'circulo' : 'x';

  placeMark(cell, classAdd);

  const vitoria = verificaVitoria(classAdd);
  
  const empate = verificaEmpate();

  if(vitoria){

    fimDeJogo(false);


  }else if(empate){

    fimDeJogo(true);

  }else{

    mudaTurno();

  }
  
};

const reiniciaJogo = ()=>{
  isCircleTurn = false; // definindo que a vez do circulo é falsa

  for(const cell of cellElements) {

    cell.classList.remove('circulo');
    cell.classList.remove('x');
    cell.removeEventListener('click', verificarClique);
    cell.addEventListener('click', verificarClique, {once: true});

  }

  //define onde o mouse passa
  setHover();

  bord.classList.add('x');
};

inciaJogo(); //iniciando o jogo

bntReiniciar.addEventListener('click', inciaJogo); //criando modificação após o cliquie no botão

restartPlacar.addEventListener('click', reiniciaPlacar);

reiniciaPartida.addEventListener('click', reiniciaJogo);

atualizaTurno();

placarAtual();