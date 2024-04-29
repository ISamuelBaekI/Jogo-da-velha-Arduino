function main() {
    // Criar o tabuleiro e jogadores
    var velha;
    var tabuleiro = createArray(9);

    // criar o tabuleiro e jogadores, zerar as variaves
    // 
    // 0:posição vazia
    // 
    // 1:jogada na posição do jogador 1
    // 
    // 2:jogada na posição do jogador 2
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = false;
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogador1;

    jogador1 = "jogador1";
    var jogador2;

    jogador2 = "jogador2";
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro
    // Anotar/Registrar a jogada do primeiro jogador
    var jogadordavez;

    jogadordavez = 1;
    velha = 1;
    do {
        window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
        window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
        window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        window.alert("Digite a posição da sua peça jogador " + jogadordavez);
        window.alert("Por favor digite os numeros com espaço");
        jogada = window.prompt('Enter a value for jogada');
        linha = parseInt(jogada.charAt(0));
        coluna = parseInt(jogada.charAt(2));
        window.alert("Linha:" + linha + ", Coluna: " + coluna);

        // Verificar se a posição "jogada" é valida
        // Converter a jogada texto em dois inteiros linha e coluna
        if (tabuleiro[3 * linha + coluna] == 0) {
            tabuleiro[3 * linha + coluna] = jogadordavez;

            // Verificar o tabuleiro se houver ganhador ou empate finalizar o jogo
            // Verificar a jogada vencedora nas linhas
            if (tabuleiro[0] == jogadordavez && tabuleiro[1] == jogadordavez && tabuleiro[2] == jogadordavez || tabuleiro[3] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[5] == jogadordavez || tabuleiro[6] == jogadordavez && tabuleiro[7] == jogadordavez && tabuleiro[8] == jogadordavez) {
                haVencedor = true;
            } else {
                if (tabuleiro[2] == jogadordavez && tabuleiro[5] == jogadordavez && tabuleiro[8] == jogadordavez || tabuleiro[0] == jogadordavez && tabuleiro[3] == jogadordavez && tabuleiro[6] == jogadordavez || tabuleiro[1] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[7] == jogadordavez) {
                    haVencedor = true;
                } else {
                    if (tabuleiro[0] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[8] == jogadordavez || tabuleiro[2] == jogadordavez && tabuleiro[4] == jogadordavez && tabuleiro[6] == jogadordavez) {
                        haVencedor = true;
                    } else {
                        if (jogadordavez == 1) {
                            jogadordavez = 2;
                        } else {
                            jogadordavez = 1;
                        }
                    }
                }
            }
            velha = velha + 1;
        } else {
            window.alert("posição ocupada jogue novamente!");

            // informar ao jogador 1 que a posição é invalida
        }
    } while (!haVencedor && velha < 9);
    if (haVencedor) {
        window.alert("Parabens pela vitoria" + jogadordavez);
    } else {
        window.alert("Deu velha");
    }
}

function validaPosicao() {
    var entradaValida;

    entradaValida = false;
    var entrada;

    window.alert(entrada.length());
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
}

function validatabuleiro() {
    
    return ;
}
