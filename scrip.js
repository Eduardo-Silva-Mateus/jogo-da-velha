const cellElements = document.querySelectorAll("[data-celula]");
const bord = document.querySelector("[data-tabuleiro]");
const msgtxtElements = document.querySelector("[date-msg-txt]"); 
const winningmsg = document.querySelector("[winning]");
const bntReiniciar = document.querySelector("[date-reiniciar]");

let isCircleTurn;

const combinacaoDeVitoria =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0,3 , 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2 ,4, 6],
];

const inciaJogo = () =>{

  isCircleTurn = false;

  for(const cell of cellElements) {

    cell.classList.remove('circulo');
    cell.classList.remove('x');
    cell.removeEventListener('click', verificarClique);
    cell.addEventListener('click', verificarClique, {once: true});

  }

  setHover();

  bord.classList.add('x');

  winningmsg.classList.remove('show_msgVitoria');

};

const fimDeJogo = (empate) => {

  if(empate){

    msgtxtElements.innerText = "Empate!";

  } else {

    msgtxtElements.innerText = isCircleTurn ? 'O Venceu!' : 'X Venceu!';

  }

  winningmsg.classList.add('show_msgVitoria');

 };

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

  isCircleTurn = !isCircleTurn;

  setHover();

 };

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

inciaJogo();

bntReiniciar.addEventListener('click', inciaJogo);