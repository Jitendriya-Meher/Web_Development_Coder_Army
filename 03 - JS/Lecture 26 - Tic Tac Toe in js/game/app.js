const board = document.querySelector(".board");
const winnerMsg = document.getElementById("winningMessage");

let turn = 'O';
const winner = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];
let total_turn = 0;
let gameOver = false;

let boardArr = new Array(9).fill('E');

function checkWinner() {

    for ( let i of winner){
        let [i1,i2,i3] = i;

        if( boardArr[i1] !== 'E' && boardArr[i1] === boardArr[i2] && boardArr[i3] === boardArr[i2]){
            gameOver = true;
            return true;
        }
    }
}

function boardLogic(element){

    if( boardArr[element.id] !=='E'){
        return;
    }
    if( gameOver){
        return;
    }

    total_turn++;

    if( turn === 'O' ){
        element.innerHTML = "O";
        boardArr[element.id] ='O';
        if( checkWinner()){
            winnerMsg.innerHTML = "Winner is O";
            return;
        }
        turn = 'X';
    }
    else{
        element.innerHTML = 'X';
        boardArr[element.id] = 'X';
        if( checkWinner()){
            winnerMsg.innerHTML = "Winner is X";
            return;
        }
        turn = 'O';
    }

    if( total_turn === 9){
        winnerMsg.innerHTML = "Match Tie";
        gameOver = true;
    }
}

board.addEventListener(('click'), (e) => {
    boardLogic(e.target);
});

const reset = document.getElementById('restartButton');

reset.addEventListener('click', () => {
    turn = 'O';
    total_turn = 0;
    gameOver = false;
    boardArr = new Array(9).fill('E');
    winnerMsg.innerHTML = "";

    const cells = document.querySelectorAll(".cell");

    for( let i = 0; i < cells.length; i++ ){
        cells[i].innerHTML = "";
    }
});