import React from 'react'

const Square = ({ value, onClick}) => {

  const style={
    backgroundColor: "lightblue",
    border: "2px solid darkblue",
    fontsize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  }

  return (
    <>
        <button style={style} onClick={onClick}>{value}</button>
    </>
  )
}

export default Square