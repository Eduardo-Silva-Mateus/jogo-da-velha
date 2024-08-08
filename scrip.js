//Um array em 2d para representar o tabuleiro
let tabuleiro = [];
//define jogador atual
let jogadorAtual = 'X';
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
          com um click, e junto deste click chama a função cliqueNaCelula.
          Observação: O elemento id tem que ser referenciado da mesma forma que foi declarado no html.
        */
    }
}


// cria a função cliqueNaCelula que por sua vez recebe um objeto chamado event
function cliqueNaCelula(event) { 
    const celula = event.target; 
    /*variavel definica como const para não sofrer alterações. Rebendo um objeto de event.target
    o target retornará o objeto que o elemento originalmente foi clicado*/
    const linha = celula.parentNode.rowIndex;
    /*variavel definica como const para não sofrer alterações. Chamando a varíavel celula e com
    o parentNote está lendo o local onde foi clicado. Já o rowIndex irá retornar a prosição da linha na tabela*/
    const coluna = celula.cellIndex;
    /*variavel definica como const para não sofrer alterações. O cellIndex retornará a posição da celula na tabela*/
    if (tabuleiro[linha][coluna] === '') { //verifica se a celula que for clicada está vazia
        tabuleiro[linha][coluna] = jogadorAtual;//Atualiza o estado do jogo
        celula.textContent = jogadorAtual;// atualiza o valor da celula alterando para o valor do jogadorAtual
        celula.classList.add(jogadorAtual);//Bota o símbolo do jogador atual.
        verificarVencedor();//chama a função verificarVencedor
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Muda de jogador a cada jogada
    }
}
function verificarVencedor() {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') {
            fimJogo = true;
            alert(`Jogador ${tabuleiro[i][0]} venceu!`);
            return;
        }
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '') {
            fimJogo = true;
            alert(`Jogador ${tabuleiro[0][i]} venceu!`);
            return;
        }
        
    }
        if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '') {
        fimJogo = true;
        alert(`Jogador ${tabuleiro[0][0]} venceu!`);
        return;
        }
        if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '') {
        fimJogo = true;
        alert(`Jogador ${tabuleiro[0][2]} venceu!`);
        return;
        }
        let empate = true;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
              empate = false;
              break;
            }
          }
          if (!empate) break;
        }
        if (empate) {
          fimJogo = true;
          alert('Empate!');
        }
    }
    
    function updateStatus(texto) {
        document.getElementById('status').textContent = texto;
      }
      
      // Reiniciar jogo
      document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);
      
      function reiniciarJogo() {
        tabuleiro = [];
        jogadorAtual = 'X';
        fimJogo = false;
        for (let i = 0; i < 3; i++) {
          tabuleiro[i] = [];
          for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = '';
            document.getElementById(`celula-${i}-${j}`).textContent = '';
          }
        }
      }