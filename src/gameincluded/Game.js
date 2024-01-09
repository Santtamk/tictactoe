import React, { useState} from 'react'
import Square from './Square'
import Board from './Board'


const Game = ({squares, onClick}) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board);

  

  
  const handleClick = (i) => {
    const boardCopy = [...board]
    if(winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  return (
    
        <>
          <Board squares={board} onClick={handleClick}/>
          <div >
            <p>
              {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
            </p>
          </div>
        </>
    
    )
}

export const calculateWinner = (square) => {
  const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for( let i=0 ; i<winningCombination.length ; i++ ) {
    const[a,b,c] = winningCombination[i];
    if(square[a] && square[a] === square[b] && square[a] === square[c]){
      return square[a];
    }
  }
  return null;
}


export default Game