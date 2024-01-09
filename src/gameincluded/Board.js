import React from 'react'
import Square from './Square';
import { calculateWinner } from './Game';

const style = {
    border: "4px solid black",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "10rem auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  }


  

const Board = ({ squares, onClick }) => {
  const board = squares
  const winner = calculateWinner(board)
  const xIsNext = true


  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

export default Board