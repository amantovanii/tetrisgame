var linhaPos = 43;
var colunaPos = 5;
var time = 0;
var veloPeca = 400;
var posicao = 1;
var pausado = true;
var gameOver = false;
var pontuacao = 0;
var totalLinhas = 0;
var minutos = 0;
var contador = 0;
var pecasSorteadas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var limiteVertical = 3;
var limiteHorizontal = 21;
var nivel = 0;
var ranking = [];

var linhaInicial = 43;
var linhaMax = 43;

// 1 - barra
// 2 - quadrado
// 3 - L
// 4 - J
// 5 - _|_
// 6 - U
var pecaAtual = 1;
var proxPeca = 0;

// matriz de 44x22
var matriz = [
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		 ];

// Para a construção da movimentação das peças assistimos videos e consultamos um arquivo do Instituto Federal de Santa Catarina.
function controleP1() {

    // inicia peça na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 1;
        matriz[linhaPos - 1][colunaPos] = 1;
        matriz[linhaPos - 2][colunaPos] = 1;
        matriz[linhaPos - 3][colunaPos] = 1;
    }

    if (!gameOver) {
        time = setInterval(function () {
            if (posicao == 1) {
                if ((linhaPos > limiteVertical) && (matriz[linhaPos - 4][colunaPos] == 0) && (linhaPos - 4 > 3)) {
                    matriz[linhaPos][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos - 3][colunaPos] = 1;
                } else {
                    reset();
                }
            }

            if (posicao == 2) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 3] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos][colunaPos + 2] = 0;
                    matriz[linhaPos][colunaPos + 3] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 1;
                    matriz[linhaPos][colunaPos + 1] = 1;
                    matriz[linhaPos][colunaPos + 2] = 1;
                    matriz[linhaPos][colunaPos + 3] = 1;
                } else {
                    reset();
                }
            }

            mostrarTela();
        }, veloPeca);
    }
}

//  diracao 1 = direita, direcao 2 = esquerda
function moveP1(direcao) {
    if (direcao == 1) { // direita
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0) && (matriz[linhaPos - 3][colunaPos + 1] == 0) && (matriz[linhaPos - 4][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                matriz[linhaPos - 3][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 1;
                matriz[linhaPos - 1][colunaPos] = 1;
                matriz[linhaPos - 2][colunaPos] = 1;
                matriz[linhaPos - 3][colunaPos] = 1;
            }
        }

        if (posicao == 2) {
            if (matriz[linhaPos][colunaPos + 4] == 0) {
                matriz[linhaPos][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos + 3] = 1;
            }
        }
    }

    if (direcao == 2) { // esquerda
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 2][colunaPos - 1] == 0) && (matriz[linhaPos - 3][colunaPos - 1] == 0) && (matriz[linhaPos - 4][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                matriz[linhaPos - 3][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 1;
                matriz[linhaPos - 1][colunaPos] = 1;
                matriz[linhaPos - 2][colunaPos] = 1;
                matriz[linhaPos - 3][colunaPos] = 1;
            }
        }

        if (posicao == 2) {
            if (matriz[linhaPos][colunaPos - 1] == 0) {
                matriz[linhaPos][colunaPos + 3] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 1;
            }
        }
    }
}

function giraP1() {
    if (posicao == 1) { // deita a barra
        if ((colunaPos < limiteHorizontal - 2) && (matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos][colunaPos + 3] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos - 1][colunaPos] = 0;
            matriz[linhaPos - 2][colunaPos] = 0;
            matriz[linhaPos - 3][colunaPos] = 0;
            posicao = 2;
            matriz[linhaPos][colunaPos + 1] = 1;
            matriz[linhaPos][colunaPos + 2] = 1;
            matriz[linhaPos][colunaPos + 3] = 1;
        }
    } else {
        if ((linhaPos - 3 > limiteVertical) && (matriz[linhaPos - 3][colunaPos] == 0) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos][colunaPos + 1] = 0;
            matriz[linhaPos][colunaPos + 2] = 0;
            matriz[linhaPos][colunaPos + 3] = 0;
            posicao = 1;
            matriz[linhaPos - 1][colunaPos] = 1;
            matriz[linhaPos - 2][colunaPos] = 1;
            matriz[linhaPos - 3][colunaPos] = 1;
        }
    }

}

function controleP2() {
    // inicia peça na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 2;
        matriz[linhaPos - 1][colunaPos] = 2;
        matriz[linhaPos][colunaPos + 1] = 2;
        matriz[linhaPos - 1][colunaPos + 1] = 2;
    }

    if (!gameOver) {
        time = setInterval(function () {
            if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                linhaPos--;
                matriz[linhaPos - 1][colunaPos] = 2;
                matriz[linhaPos - 1][colunaPos + 1] = 2;
            } else {
                reset();
            }

            mostrarTela();

        }, veloPeca);
    }
}

// 1 = direita, 2 = esquerda
function moveP2(direcao) {
    if (direcao == 1) { // direita
        if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0)) {
            matriz[linhaPos][colunaPos] = 0;
            matriz[linhaPos - 1][colunaPos] = 0;
            colunaPos++;
            matriz[linhaPos][colunaPos + 1] = 2;
            matriz[linhaPos - 1][colunaPos + 1] = 2;
        }

    }

    if (direcao == 2) { // esquerda
        if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
            matriz[linhaPos][colunaPos + 1] = 0;
            matriz[linhaPos - 1][colunaPos + 1] = 0;
            colunaPos--;
            matriz[linhaPos][colunaPos] = 2;
            matriz[linhaPos - 1][colunaPos] = 2;
        }
    }
}


function controleP3() {
    // inicia peça na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 3;
        matriz[linhaPos][colunaPos + 1] = 3;
        matriz[linhaPos - 1][colunaPos] = 3;
        matriz[linhaPos - 2][colunaPos] = 3;
    }

    if (!gameOver) {
        time = setInterval(function () {
            if (posicao == 1) {
                if ((linhaPos - 3 > limiteVertical) && (matriz[linhaPos - 3][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    linhaPos--;
                    matriz[linhaPos - 2][colunaPos] = 3;
                    matriz[linhaPos][colunaPos + 1] = 3;
                } else {
                    reset();
                }
            }

            if (posicao == 2) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0)) {
                    matriz[linhaPos + 1][colunaPos] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos][colunaPos + 2] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 3;
                    matriz[linhaPos][colunaPos + 1] = 3;
                    matriz[linhaPos][colunaPos + 2] = 3;
                } else {
                    reset();
                }
            }

            if (posicao == 3) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                    matriz[linhaPos][colunaPos + 2] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos + 2][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos - 1] = 3;
                    matriz[linhaPos][colunaPos] = 3;
                } else {
                    reset();
                }
            }

            if (posicao == 4) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 2] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos][colunaPos - 2] = 0;
                    linhaPos--;
                    matriz[linhaPos - 1][colunaPos] = 3;
                    matriz[linhaPos][colunaPos - 1] = 3;
                    matriz[linhaPos][colunaPos - 2] = 3;
                } else {
                    reset();
                }
            }
            mostrarTela();
        }, veloPeca);
    }
}

// 1 = direita, 2 = esquerda
function moveP3(direcao) {
    if (direcao == 1) { // direita
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0) && (matriz[linhaPos - 3][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos + 1] = 3;
                matriz[linhaPos - 1][colunaPos] = 3;
                matriz[linhaPos - 2][colunaPos] = 3;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos + 3] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos + 2] = 3;
                matriz[linhaPos + 1][colunaPos] = 3;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos + 2][colunaPos + 1] == 0)) {
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos + 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 3;
                matriz[linhaPos + 1][colunaPos] = 3;
                matriz[linhaPos + 2][colunaPos] = 3;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos - 2] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 3;
                matriz[linhaPos - 1][colunaPos] = 3;
            }
        }
    }

    if (direcao == 2) { // esquerda
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 2][colunaPos - 1] == 0) && (matriz[linhaPos - 3][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 3;
                matriz[linhaPos - 1][colunaPos] = 3;
                matriz[linhaPos - 2][colunaPos] = 3;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos + 2] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 3;
                matriz[linhaPos + 1][colunaPos] = 3;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos + 2][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos + 2][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos + 1][colunaPos] = 3;
                matriz[linhaPos + 2][colunaPos] = 3;
                matriz[linhaPos][colunaPos - 1] = 3;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos - 3] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos - 2] = 3;
                matriz[linhaPos - 1][colunaPos] = 3;
            }
        }
    }
}

function giraP3() {
    if (posicao == 1) { // vai para a posição 2
        if ((colunaPos < limiteHorizontal - 1) && (matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos + 1][colunaPos] == 0)) { // impede que gire para fora da tabela ou no lugar de outra peça
            matriz[linhaPos - 1][colunaPos] = 0;
            matriz[linhaPos - 2][colunaPos] = 0;
            posicao = 2;
            matriz[linhaPos][colunaPos + 2] = 3;
            matriz[linhaPos + 1][colunaPos] = 3;
        }
    } else {
        if (posicao == 2) { // vai para a posição 3
            if ((colunaPos > 0) && (linhaPos - 2 > limiteVertical) && (matriz[linhaPos + 2][colunaPos] == 0) && (matriz[linhaPos][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos][colunaPos + 2] = 0;
                posicao = 3;
                matriz[linhaPos + 2][colunaPos] = 3;
                matriz[linhaPos][colunaPos - 1] = 3;
            }
        } else {
            if (posicao == 3) { // vai para a posição 4
                if ((colunaPos > 1) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos][colunaPos - 2] == 0)) {
                    matriz[linhaPos + 1][colunaPos] = 0;
                    matriz[linhaPos + 2][colunaPos] = 0;
                    posicao = 4;
                    matriz[linhaPos][colunaPos - 2] = 3;
                    matriz[linhaPos - 1][colunaPos] = 3;
                }
            } else {
                if (posicao == 4) { // vai para a posição 1
                    if ((colunaPos < limiteHorizontal) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos][colunaPos + 1] == 0)) {
                        matriz[linhaPos][colunaPos - 1] = 0;
                        matriz[linhaPos][colunaPos - 2] = 0;
                        posicao = 1;
                        matriz[linhaPos - 2][colunaPos] = 3;
                        matriz[linhaPos][colunaPos + 1] = 3;
                    }
                }
            }
        }
    }
}


function controleP4() {
    // inicia peça na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 4;
        matriz[linhaPos][colunaPos - 1] = 4;
        matriz[linhaPos - 1][colunaPos] = 4;
        matriz[linhaPos - 2][colunaPos] = 4;
    }

    if (!gameOver) {
        time = setInterval(function () {

            if (posicao == 1) {
                if ((linhaPos - 3 > limiteVertical) && (matriz[linhaPos - 3][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    linhaPos--;
                    matriz[linhaPos - 2][colunaPos] = 4;
                    matriz[linhaPos][colunaPos - 1] = 4;
                } else {
                    reset();
                }
            }

            if (posicao == 2) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos][colunaPos + 2] = 0;
                    linhaPos--;
                    matriz[linhaPos - 1][colunaPos] = 4;
                    matriz[linhaPos][colunaPos] = 4;
                    matriz[linhaPos][colunaPos + 1] = 4;
                    matriz[linhaPos][colunaPos + 2] = 4;
                } else {
                    reset();
                }
            }

            if (posicao == 3) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos + 2][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos + 1] = 4;
                    matriz[linhaPos][colunaPos] = 4;
                } else {
                    reset();
                }
            }

            if (posicao == 4) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 2] == 0)) {
                    matriz[linhaPos + 1][colunaPos] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos][colunaPos - 2] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 4;
                    matriz[linhaPos][colunaPos - 1] = 4;
                    matriz[linhaPos][colunaPos - 2] = 4;
                } else {
                    reset();
                }
            }
            mostrarTela();
        }, veloPeca);
    }
}

// 1 = direita, 2 = esquerda
function moveP4(direcao) {
    if (direcao == 1) { // direita
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos - 1][colunaPos] = 4;
                matriz[linhaPos - 2][colunaPos] = 4;
                matriz[linhaPos][colunaPos - 1] = 4;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos + 3] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos - 1][colunaPos] = 4;
                matriz[linhaPos][colunaPos + 2] = 4;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos + 2][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos + 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos][colunaPos + 1] = 4;
                matriz[linhaPos + 2][colunaPos] = 4;
                matriz[linhaPos + 1][colunaPos] = 4;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos - 2] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos + 1][colunaPos] = 4;
                matriz[linhaPos][colunaPos] = 4;
            }
        }
    }

    if (direcao == 2) { // esquerda
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 2][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos - 1][colunaPos] = 4;
                matriz[linhaPos - 2][colunaPos] = 4;
                matriz[linhaPos][colunaPos - 1] = 4;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 2] = 0;
                colunaPos--;
                matriz[linhaPos - 1][colunaPos] = 4;
                matriz[linhaPos][colunaPos] = 4;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos + 2][colunaPos - 1] == 0)) {
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos + 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                colunaPos--;
                matriz[linhaPos + 1][colunaPos] = 4;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos + 2][colunaPos] = 4;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos - 3] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos + 2][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0
                colunaPos--;
                matriz[linhaPos + 1][colunaPos] = 4;
                matriz[linhaPos][colunaPos] = 4;
                matriz[linhaPos][colunaPos - 1] = 4;
                matriz[linhaPos][colunaPos - 2] = 4;
            }
        }
    }
}

function giraP4() {
    if (posicao == 1) {
        if ((colunaPos < limiteHorizontal - 1) && (matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos - 2][colunaPos] = 0;
            matriz[linhaPos][colunaPos - 1] = 0;
            posicao = 2;
            matriz[linhaPos][colunaPos + 1] = 4;
            matriz[linhaPos][colunaPos + 2] = 4;
        }
    } else {
        if (posicao == 2) {
            if ((colunaPos < limiteHorizontal - 1) && (matriz[linhaPos + 1][colunaPos] == 0) && (matriz[linhaPos + 2][colunaPos] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos + 2][colunaPos + 1] == 0)) { // impede que gire para fora da tabela
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 2] = 0;
                posicao = 3;
                matriz[linhaPos + 1][colunaPos] = 4;
                matriz[linhaPos + 2][colunaPos] = 4;
            }
        } else {
            if (posicao == 3) {
                if ((colunaPos < limiteHorizontal - 1) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos + 2][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos - 2] == 0)) { // impede que gire para fora da tabela
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos + 2][colunaPos] = 0;
                    posicao = 4;
                    matriz[linhaPos][colunaPos - 1] = 4;
                    matriz[linhaPos][colunaPos - 2] = 4;
                }
            } else {
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 2] = 0;
                posicao = 1;
                matriz[linhaPos - 1][colunaPos] = 4;
                matriz[linhaPos - 2][colunaPos] = 4;
            }
        }
    }

}



function controleP5() {
    // inicia peca na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 5;
        matriz[linhaPos - 1][colunaPos] = 5;
        matriz[linhaPos][colunaPos - 1] = 5;
        matriz[linhaPos][colunaPos + 1] = 5;
    } // NÃO MEXER NISSO ESTA CERTO

    if (!gameOver) {
        time = setInterval(function () {
            if (posicao == 1) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos - 1] = 5;
                    matriz[linhaPos][colunaPos + 1] = 5;
                    matriz[linhaPos - 1][colunaPos] = 5;
                } else {
                    reset();
                }
            }

            if (posicao == 2) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos - 1][colunaPos] = 0;
                    matriz[linhaPos + 1][colunaPos] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 5;
                    matriz[linhaPos - 1][colunaPos] = 5;
                    matriz[linhaPos + 1][colunaPos] = 5;
                    matriz[linhaPos][colunaPos + 1] = 5;
                } else {
                    reset();
                }
            }

            if (posicao == 3) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos + 1][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 5;
                    matriz[linhaPos][colunaPos + 1] = 5;
                    matriz[linhaPos][colunaPos - 1] = 5;
                } else {
                    reset();
                }
            }

            if (posicao == 4) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos + 1][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos - 1] = 5;
                    matriz[linhaPos - 1][colunaPos] = 5;
                } else {
                    reset();
                }
            }
            mostrarTela();
        }, veloPeca);
    }
}

// 1 = direita, 2 = esquerda
function moveP5(direcao) {
    if (direcao == 1) {
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (colunaPos + 1 < limiteHorizontal)) {
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos++;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos][colunaPos + 1] = 5;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos][colunaPos + 1] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 5;
                matriz[linhaPos][colunaPos - 1] = 5;
                matriz[linhaPos][colunaPos + 1] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 5;
                matriz[linhaPos][colunaPos - 1] = 5;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
            }
        }
    }

    if (direcao == 2) {
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                colunaPos--;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos][colunaPos - 1] = 5;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) {
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 5;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
                matriz[linhaPos][colunaPos + 1] = 5;
                matriz[linhaPos][colunaPos - 1] = 5;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos][colunaPos - 1] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 5;
                matriz[linhaPos + 1][colunaPos] = 5;
                matriz[linhaPos - 1][colunaPos] = 5;
                matriz[linhaPos][colunaPos - 1] = 5;
            }
        }
    }
}

function giraP5() {
    var controladora = 0;


    if (posicao == 1) {
        if ((colunaPos < limiteHorizontal) && (linhaPos < linhaMax) && (matriz[linhaPos + 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos][colunaPos - 1] = 0;

            matriz[linhaPos + 1][colunaPos] = 5;
            controladora = 1;
        }
    }

    if (posicao == 2) {
        if ((colunaPos < limiteHorizontal) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos - 1][colunaPos] = 0;

            matriz[linhaPos][colunaPos - 1] = 5;
            controladora = 1;
        }
    }

    if (posicao == 3) {
        if ((colunaPos < limiteHorizontal) && (linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos][colunaPos + 1] = 0;

            matriz[linhaPos - 1][colunaPos] = 5;
            controladora = 1;
        }
    }

    if (posicao == 4) {
        if ((colunaPos < limiteHorizontal) && (matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos + 1][colunaPos] = 0;

            matriz[linhaPos][colunaPos + 1] = 5;
            controladora = 1;
        }
    }

    if (controladora == 1) {
        switch (posicao) {
            case 1:
                posicao = 2;
                break;
            case 2:
                posicao = 3;
                break;
            case 3:
                posicao = 4;
                break;
            case 4:
                posicao = 1;
                break;
        }
    }

}

function controleP6() {
    // inicia peça na tabela
    if (linhaPos == linhaInicial) {
        matriz[linhaPos][colunaPos] = 6;
        matriz[linhaPos][colunaPos - 1] = 6;
        matriz[linhaPos][colunaPos + 1] = 6;
        matriz[linhaPos - 1][colunaPos - 1] = 6;
        matriz[linhaPos - 1][colunaPos + 1] = 6;
    }

    if (!gameOver) {
        time = setInterval(function () {
            if (posicao == 1) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 2][colunaPos - 1] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0)) {

                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos][colunaPos - 1] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 6;
                    matriz[linhaPos - 1][colunaPos - 1] = 6;
                    matriz[linhaPos - 1][colunaPos + 1] = 6;
                } else {
                    reset();
                }
            }

            if (posicao == 2) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 2][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos + 1] == 0)) {
                    matriz[linhaPos - 1][colunaPos + 1] = 0;
                    matriz[linhaPos + 1][colunaPos + 1] = 0;
                    matriz[linhaPos + 1][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos - 1][colunaPos + 1] = 6;
                    matriz[linhaPos - 1][colunaPos] = 6;
                    matriz[linhaPos + 1][colunaPos + 1] = 6;
                } else {
                    reset();
                }
            }

            if (posicao == 3) {
                if ((linhaPos - 1 > limiteVertical) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0)) {
                    matriz[linhaPos][colunaPos] = 0;
                    matriz[linhaPos + 1][colunaPos + 1] = 0;
                    matriz[linhaPos + 1][colunaPos - 1] = 0;
                    linhaPos--;
                    matriz[linhaPos][colunaPos] = 6;
                    matriz[linhaPos][colunaPos + 1] = 6;
                    matriz[linhaPos][colunaPos - 1] = 6;
                } else {
                    reset();
                }
            }

            if (posicao == 4) {
                if ((linhaPos - 2 > limiteVertical) && (matriz[linhaPos - 2][colunaPos] == 0) && (matriz[linhaPos - 2][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos - 1] == 0)) {
                    matriz[linhaPos - 1][colunaPos - 1] = 0;
                    matriz[linhaPos + 1][colunaPos - 1] = 0;
                    matriz[linhaPos + 1][colunaPos] = 0;
                    linhaPos--;
                    matriz[linhaPos - 1][colunaPos] = 6;
                    matriz[linhaPos - 1][colunaPos - 1] = 6;
                    matriz[linhaPos + 1][colunaPos - 1] = 6;
                } else {
                    reset();
                }
            }
            mostrarTela();
        }, veloPeca);
    }
}

// 1 = direita, 2 = esquerda
function moveP6(direcao) {
    if (direcao == 1) { // direita
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0)) {
                matriz[linhaPos][colunaPos - 1] = 0;
                matriz[linhaPos - 1][colunaPos - 1] = 0;
                matriz[linhaPos - 1][colunaPos + 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos + 1] = 6;
                matriz[linhaPos - 1][colunaPos + 1] = 6;
                matriz[linhaPos - 1][colunaPos - 1] = 6;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 2] == 0) && (matriz[linhaPos + 1][colunaPos + 2] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 6;
                matriz[linhaPos + 1][colunaPos + 1] = 6;
                matriz[linhaPos - 1][colunaPos + 1] = 6;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos + 2] == 0) && (matriz[linhaPos + 1][colunaPos + 2] == 0) && (matriz[linhaPos + 1][colunaPos] == 0)) {
                matriz[linhaPos][colunaPos - 1] = 0;
                matriz[linhaPos + 1][colunaPos - 1] = 0;
                matriz[linhaPos + 1][colunaPos + 1] = 0;
                colunaPos++;
                matriz[linhaPos + 1][colunaPos - 1] = 6;
                matriz[linhaPos][colunaPos + 1] = 6;
                matriz[linhaPos + 1][colunaPos + 1] = 6;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos + 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos - 1] = 0;
                matriz[linhaPos + 1][colunaPos - 1] = 0;
                colunaPos++;
                matriz[linhaPos][colunaPos] = 6;
                matriz[linhaPos - 1][colunaPos] = 6;
                matriz[linhaPos + 1][colunaPos] = 6;
            }
        }
    }

    if (direcao == 2) { // esquerda
        if (posicao == 1) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos - 1][colunaPos - 2] == 0)) {
                matriz[linhaPos - 1][colunaPos + 1] = 0;
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos - 1][colunaPos - 1] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos - 1] = 6;
                matriz[linhaPos - 1][colunaPos - 1] = 6;
                matriz[linhaPos - 1][colunaPos + 1] = 6;
            }
        }

        if (posicao == 2) {
            if ((matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos + 1] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 6;
                matriz[linhaPos - 1][colunaPos] = 6;
                matriz[linhaPos + 1][colunaPos] = 6;
            }
        }

        if (posicao == 3) {
            if ((matriz[linhaPos][colunaPos - 2] == 0) && (matriz[linhaPos + 1][colunaPos - 2] == 0) && (matriz[linhaPos + 1][colunaPos] == 0)) {
                matriz[linhaPos][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos - 1] = 0;
                colunaPos--;
                matriz[linhaPos + 1][colunaPos - 1] = 6;
                matriz[linhaPos][colunaPos - 1] = 6;
                matriz[linhaPos + 1][colunaPos + 1] = 6;
            }
        }

        if (posicao == 4) {
            if ((matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 2] == 0) && (matriz[linhaPos - 1][colunaPos - 2] == 0)) {
                matriz[linhaPos][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                colunaPos--;
                matriz[linhaPos][colunaPos] = 6;
                matriz[linhaPos - 1][colunaPos - 1] = 6;
                matriz[linhaPos + 1][colunaPos - 1] = 6;
            }
        }
    }
}

function giraP6() {
    if (posicao == 1) {
        if ((colunaPos < limiteHorizontal) && (linhaPos < linhaMax) && (matriz[linhaPos + 1][colunaPos] == 0) && (matriz[linhaPos + 1][colunaPos + 1] == 0) && (matriz[linhaPos - 1][colunaPos] == 0)) { // impede que gire para fora da tabela
            matriz[linhaPos][colunaPos - 1] = 0;
            matriz[linhaPos - 1][colunaPos - 1] = 0;
            matriz[linhaPos][colunaPos + 1] = 0;
            posicao = 2;
            matriz[linhaPos + 1][colunaPos] = 6;
            matriz[linhaPos - 1][colunaPos] = 6;
            matriz[linhaPos + 1][colunaPos + 1] = 6;
        }
    } else {
        if (posicao == 2) {
            if ((colunaPos < limiteHorizontal) && (matriz[linhaPos][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos - 1] == 0)) { // impede que gire para fora da tabela
                matriz[linhaPos - 1][colunaPos] = 0;
                matriz[linhaPos - 1][colunaPos + 1] = 0;
                matriz[linhaPos + 1][colunaPos] = 0;
                posicao = 3;
                matriz[linhaPos][colunaPos - 1] = 6;
                matriz[linhaPos + 1][colunaPos - 1] = 6;
                matriz[linhaPos][colunaPos + 1] = 6;
            }
        } else {
            if (posicao == 3) {
                if ((colunaPos < limiteHorizontal) && (matriz[linhaPos - 1][colunaPos] == 0) && (matriz[linhaPos - 1][colunaPos - 1] == 0) && (matriz[linhaPos + 1][colunaPos] == 0)) { // impede que gire para fora da tabela
                    matriz[linhaPos][colunaPos - 1] = 0;
                    matriz[linhaPos][colunaPos + 1] = 0;
                    matriz[linhaPos + 1][colunaPos + 1] = 0;
                    posicao = 4;
                    matriz[linhaPos - 1][colunaPos] = 6;
                    matriz[linhaPos + 1][colunaPos] = 6;
                    matriz[linhaPos - 1][colunaPos - 1] = 6;
                }
            } else {
                if (posicao == 4) {
                    if ((colunaPos < limiteHorizontal) && (matriz[linhaPos - 1][colunaPos + 1] == 0) && (matriz[linhaPos][colunaPos - 1] == 0) && (matriz[linhaPos][colunaPos + 1] == 0)) { // impede que gire para fora da tabela
                        matriz[linhaPos - 1][colunaPos] = 0;
                        matriz[linhaPos + 1][colunaPos] = 0;
                        matriz[linhaPos + 1][colunaPos - 1] = 0;
                        posicao = 1;
                        matriz[linhaPos][colunaPos - 1] = 6;
                        matriz[linhaPos][colunaPos + 1] = 6;
                        matriz[linhaPos - 1][colunaPos + 1] = 6;
                    }
                }
            }
        }
    }
}

// monta tabela na tela
function mostrarTela() {
    var tabela = "<table>";
    for (i = 0; i <= linhaMax; i++) {
        tabela += "<tr>";
        for (j = 0; j <= limiteHorizontal; j++) {
            if (matriz[i][j] == 0) {
                tabela += "<td> " + matriz[i][j] + " </td>";
            } else {
                switch (matriz[i][j]) {
                    case 1:
                        tabela += "<td class='blue'> " + matriz[i][j] + " </td>";
                        break;
                    case 2:
                        tabela += "<td class='red'> " + matriz[i][j] + " </td>";
                        break;
                    case 3:
                        tabela += "<td class='green'> " + matriz[i][j] + " </td>";
                        break;
                    case 4:
                        tabela += "<td class='orange'> " + matriz[i][j] + " </td>";
                        break;
                    case 5:
                        tabela += "<td class='purple'> " + matriz[i][j] + " </td>";
                        break;
                    case 6:
                        tabela += "<td class='yellow'> " + matriz[i][j] + " </td>";
                        break;

                }
            }
        }
        tabela += "</tr>";
    }
    document.getElementById("aqui").innerHTML = tabela;
}

// pega o keypress
document.addEventListener("keyup", movimentoTela, false);

// função que faz a chamada
function movimentoTela(e) {
    var keyCode = e.keyCode;
    clearInterval(time);
    // direita
    if (keyCode == 39) {
        switch (pecaAtual) {
            case 1:
                moveP1(1);
                break;
            case 2:
                moveP2(1);
                break;
            case 3:
                moveP3(1);
                break;
            case 4:
                moveP4(1);
                break;
            case 5:
                moveP5(1);
                break;
            case 6:
                moveP6(1);
                break;

        }
    }

    if (keyCode == 37) {
        switch (pecaAtual) {
            case 1:
                moveP1(2);
                break;
            case 2:
                moveP2(2);
                break;
            case 3:
                moveP3(2);
                break;
            case 4:
                moveP4(2);
                break;
            case 5:
                moveP5(2);
                break;
            case 6:
                moveP6(2);
                break;

        }
    }



    if (keyCode == 40) {
        switch (pecaAtual) {
            case 1:
                giraP1();
                break;
            case 2:

                break;
            case 3:
                giraP3();
                break;
            case 4:
                giraP4();
                break;
            case 5:
                giraP5();
                break;
            case 6:
                giraP6();
                break;

        }
    }

    if (keyCode == 38) {
        clearInterval(time);
        veloPeca = 50;
        pausado = false;
        document.getElementById("pausa").innerHTML = "<p>pause</p>";
    }

    mostrarTela();

    if (!pausado) {
        switch (pecaAtual) {
            case 1:
                controleP1();
                break;
            case 2:
                controleP2();
                break;
            case 3:
                controleP3();
                break;
            case 4:
                controleP4();
                break;
            case 5:
                controleP5();
                break;
            case 6:
                controleP6();
                break;

        }
    }
}

function reset() {
    clearInterval(time);
    pausado = false;


    for (i = 0; i <= limiteHorizontal; i++) {
        if (matriz[linhaMax][i] != 0) {
            gameOver = true;

            document.getElementById("geral").innerHTML = "<div class='overflow'> <div class='nome'> <h2> Game Over! </h2> <input type='text' id='camponome' placeholder='Digite seu nome' /> <button onclick='cadastrarNoRanking()'>OK</button></div> </div>";
            break;
        }
    }

    if (!gameOver) {

        checarLinha();


        if (!pausado) {


            linhaPos = linhaInicial;
            colunaPos = 5;
            posicao = 1;


            if (pontuacao < 250) {
                veloPeca = 400; // nível 1
                document.getElementById("nivel").innerHTML = "<h2>Nível</h2><span> 1 </span>";
                nivel = 1;
            } else {
                if ((pontuacao > 250) && (pontuacao < 500)) {
                    veloPeca = 300; // nível 2
                    document.getElementById("nivel").innerHTML = "<h2>Nível</h2><span> 2 </span>";
                    nivel = 2;
                } else {
                    if ((pontuacao > 500) && (pontuacao < 750)) {
                        veloPeca = 200; // nível 3
                        document.getElementById("nivel").innerHTML = "<h2>Nível</h2><span> 3 </span>";
                        nivel = 3;
                    } else {
                        veloPeca = 100; // nível 4
                        document.getElementById("nivel").innerHTML = "<h2>Nível</h2><span> 4 </span>";
                        nivel = 4;
                    }
                }
            }


            if (proxPeca == 0) {
                pecaAtual = selectpecaleatorio();
                proxPeca = selectpecaleatorio();

            } else {
                pecaAtual = proxPeca;
                proxPeca = selectpecaleatorio();

            }
        }

        switch (pecaAtual) {
            case 1:
                controleP1();
                break;
            case 2:
                controleP2();
                break;
            case 3:
                controleP3();
                break;
            case 4:
                controleP4();
                break;
            case 5:
                controleP5();
                break;
            case 6:
                controleP6();
                break;
            case 7:
                controlePeca7();
                break;
        }
    }
}


function selectpecaleatorio() {
    if (pecasSorteadas[0] == 12) {
        pecasSorteadas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    do {
        var numero = Math.floor((Math.random() * 6));
        numero++;
    } while ((pecasSorteadas[numero] == 1) && (pecasSorteadas[numero + 6] == 1));

    if (pecasSorteadas[numero] == 0) {
        pecasSorteadas[numero] = 1;
    } else {
        pecasSorteadas[numero + 6] = 1;
    }

    pecasSorteadas[0]++;

    return numero;
}


function pausa() {
    if (pausado) {
        pausado = false;
        document.getElementById("pausa").innerHTML = "<p>pause</p>";
        switch (pecaAtual) {
            case 1:
                controleP1();
                break;
            case 2:
                controleP2();
                break;
            case 3:
                controleP3();
                break;
            case 4:
                controleP4();
                break;
            case 5:
                controleP5();
                break;
            case 6:
                controleP6();
                break;
            case 7:
                controlePeca7();
                break;
        }
    } else {
        document.getElementById("pausa").innerHTML = '<p> play <p/>';
        pausado = true;
        clearInterval(time);
    }
}


function checarLinha() {
    var qntLinhas = 0;
    for (i = linhaMax; i > limiteVertical; i--) {
        for (j = 0; j <= limiteHorizontal; j++) {
            if (matriz[i][j] == 0) {
                break;
            } else {
                if (j == limiteHorizontal) {
                    reorganizaMatriz(i);
                    qntLinhas++;
                }
            }
        }
    }
    pontuacao = pontuacao + (10 * (qntLinhas * qntLinhas));
    document.getElementById("pontos").innerHTML = "<h2>Pontos</h2><span>" + pontuacao + "</span>";

    totalLinhas += qntLinhas;
    document.getElementById("qntLinhas").innerHTML = "<h2>Linhas</h2><span>" + totalLinhas + "</span>";
}


function reorganizaMatriz(linha) {
    for (i = linha; i < linhaMax; i++) {
        for (j = 0; j <= limiteHorizontal; j++) {
            matriz[i][j] = matriz[i + 1][j];
        }
    }
    mostrarTela();
}


function cronometro() {
    var segundos = setInterval(function () {
        contador++;
        if (contador == 60) {
            minutos++;
            contador = 0;
        }

        if (gameOver) {
            clearInterval(segundos);
        }

        if ((minutos < 10) && (contador < 10)) {
            document.getElementById("tempo").innerHTML = "<h2>Tempo</h2><span> 0" + minutos + ":0" + contador + "</span>";
        } else {
            if (minutos < 10) {
                document.getElementById("tempo").innerHTML = "<h2>Tempo</h2><span> 0" + minutos + ":" + contador + "</span>";
            } else {
                document.getElementById("tempo").innerHTML = "<h2>Tempo</h2><span> " + minutos + ":" + contador + "</span>";
            }
        }
    }, 1000);
}


function dimTabuleiro(elemento) {
    var tipo = elemento.value;
    if (tipo == "1") {

        limiteVertical = 3;
        limiteHorizontal = 9;
        linhaInicial = 23;
        linhaPos = 23;
        linhaMax = 23;

        for (i = 0; i < 23; i++) {
            matriz[i][10] = 8;
        }

        document.getElementById("tabuleiro").removeAttribute("class");
        document.getElementById("tabuleiro").className = "pequeno";
    } else {

        limiteVertical = 3;
        limiteHorizontal = 21;
        linhaInicial = 43;
        linhaPos = 43;
        linhaMax = 43;
        document.getElementById("tabuleiro").removeAttribute("class");
        document.getElementById("tabuleiro").className = "grande";
    }
}

// inicia o jogo
function iniciojogo() {
    document.getElementById("geral").innerHTML = "";
    mostrarTela();
    reset();
    cronometro();
}

function cadastrarNoRanking() {
    var player = new Object();
    player.nome = document.getElementById("camponome").value;
    player.pontuacao = pontuacao;
    player.nivel = nivel;
    player.tempo = minutos + ':' + contador;

    ranking.push(player);

    ranking.sort(compare);
    ranking.reverse();

    showRanking();
}

function compare(a, b) {
    if (a.pontuacao < b.pontuacao)
        return -1;
    if (a.pontuacao > b.pontuacao)
        return 1;
    return 0;
}

function showRanking() {
    console.log("teste");
    var conteudoranking = '<table> <tr> <th> Posição </th> <th> Nome </th> <th> Pontuação </th> <th> Nível </th> <th> Tempo </th> </tr>';
    var i = 0;

    while (i < ranking.length) {
        conteudoranking += '<tr>';
        conteudoranking += '<td>' + (i + 1) + '</td> <td>' + ranking[i].nome + '</td> <td>' + ranking[i].pontuacao + "</td> <td>" + ranking[i].nivel + "</td> <td>" + ranking[i].tempo + "</td>";
        i++;
        conteudoranking += '</tr>';
    }

    conteudoranking += '</table>';

    document.getElementById("geral").innerHTML = "<div class='overflow'> <div class='nome'> <h2> Ranking </h2> <p id='listaRanking'> " + conteudoranking + " </p> <button id='btnPlayAgain' onclick='reiniciarJogo();'> Jogar Novamente </button> </div> </div>";
}

function zeraMatriz() {
    for (var l = 0; l < 48; l++) {
        for (var c = 0; c < 22; c++) {
            matriz[l][c] = 0;
        }
    }
}

function reiniciarJogo() {
    limpaVariavel();
    document.getElementById("geral").innerHTML = "	<div id='geral'> 		<div id='iniciar'>	<h1>Escolha seu tamanho de jogo!</h1> 			<div> 				<select onchange='dimTabuleiro(this);''> 					<option value='1'>20x10</option> 					<option value='2' selected>44x22</option> 				</select> 				<button onclick='iniciojogo();'> Iniciar jogo </button> 			</div> 		</div> 	</div>";
}

function limpaVariavel() {
    zeraMatriz();
    linhaPos = 43;
    colunaPos = 5;
    time = 0;
    veloPeca = 400;
    posicao = 1;
    pausado = true;
    gameOver = false;
    pontuacao = 0;
    totalLinhas = 0;
    minutos = 0;
    contador = 0;
    pecasSorteadas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    limiteVertical = 4;
    limiteHorizontal = 21;
    nivel = 0;
    document.getElementById("tabuleiro").removeAttribute("class");
    document.getElementById("tabuleiro").className = "grande";
}
