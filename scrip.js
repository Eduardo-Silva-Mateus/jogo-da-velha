/*criando variavel "cellElements" que por padrão está chamando o objeto "document" 
e por sua vez está chamendo o metodo "querySelectorAll" que está indexdo com o valor data-celula
que está nomeado no documento HTML*/
const cellElements = document.querySelectorAll("[data-celula]");

/*criando variavel "boar" que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const bord = document.querySelector("[data-tabuleiro]");

/*criando variavel "msgtxtElements" que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const msgtxtElements = document.querySelector("[date-msg-txt]"); 

/*criando variavel  "winningmsg"que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelector"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const winningmsg = document.querySelector("[winning]");

/*criando variavel que por padrão está chamando o objeto "document" 
e chamando o metodo "querySelectorAll"que está indexdo com o valor data-celula
que est´nomeado no documento HTML*/
const bntReiniciar = document.querySelector("[date-reiniciar]");

let isCircleTurn;// define a variavel "e"

//criando um array para ver quais são as possibilidade de vitória
const combinacaoDeVitoria =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0,3 , 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2 ,4, 6],
];
//Criando o método para começar o jogo
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

//cria leitura para fim do jogo
const fimDeJogo = (empate) => {
//verifica se deu empate
  if(empate){

    msgtxtElements.innerText = "Empate!";

  } else {

    msgtxtElements.innerText = isCircleTurn ? 'O Venceu!' : 'X Venceu!';

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

 const mudaTurno=() =>{

  isCircleTurn = !isCircleTurn; // a variavel tem que ser diferende dela mesma

  setHover();

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

inciaJogo(); //iniciando o jogo

bntReiniciar.addEventListener('click', inciaJogo); //criando modificação após o cliquie no botão