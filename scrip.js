//Um array em 2d para representar o tabuleiro
let tabuleiro = [];
//define jogador atual
let jogadorAtual = 'x';
//define o fim do jogo sempre começa em false
let fimJogo = false;

//esta criando uma matrix 3x3 e iniando os elementos com a string vazia
for(let i=0; i<3; i++){ // esta criando as linhas
    tabuleiro[i] = [];
    for(let j=0; j<3; j++){ //esta criando as colunas
        tabuleiro[i][j] = '';
        document.getElementById(`celula-${i}-${j}`).addEventListener('click', cliqueNaCelula);
         /*Chama o objeto document como o metodo getElementById que retotna a referencia do elemento
          atraves do id. Que por sua vez esta adicionando um evento de espera que será atualizado
          com um click, e junto deste click chama a função cliqueNaCelular.
          Observação: O elemento id tem que ser referenciado da mesma forma que foi declarado no html.
        */
    }
}

function cliqueNaCelula(event) { // cria a função cliqueNaCelula que por sua vez recebe um argumento chamado event
    if (fimJogo) return;
    const celula = event.target;
    const linha = celula.parentNode.rowIndex;
    const coluna = celula.cellIndex;
    if (tabuleiro[linha][coluna] === '') {
        tabuleiro[linha][coluna] = jogadorAtual;
        celula.textContent = jogadorAtual;
        celula.classList.add(jogadorAtual);
        verificarVencedor();
        jogadorAtual = jogadorAtual === 'x' ? 'o' : 'x';
    }
}
function verificarVencedor(){
    for(let i=0; i<3; i++){
        if(tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[0][2] && tabuleiro[i][0]!== ''){
            fimJogo = true;
            alert(`Jogador ${tabuleiro[i][0]} venceu!`);
            return;
        }
        if(tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[2][i] && tabuleiro[0][i]!== ''){
            fimJogo = true;
            alert(`Jogador ${tabuleiro[0][i]} venceu!`);
            return;
        }
    }
    if(tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[2][2] && tabuleiro[0][0]!== ''){
        fimJogo = true;
        alert(`Jogador ${tabuleiro[0][0]} venceu!`);
        return;
    }
    if(tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[2][2] && tabuleiro[0][2]!== ''){
        fimJogo = true;
        alert(`Jogador ${tabuleiro[0][2]} venceu!`);
        return;
    }
}
