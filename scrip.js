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
        /*
        */
        document.getElementById(`celula-${i}-${j}`).addEventListener('click', cliqueNaCelular);
    }
}
function cliqueNaCelular(event) {
    if (fimJogo) return;
    const cell = event.target;
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    if (tabuleiro[row][col] === '') {
        tabuleiro[row][col] = jogadorAtual;
        cell.textContent = jogadorAtual;
        cell.classList.add(jogadorAtual);
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
