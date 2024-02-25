import { useState } from 'react'
import './App.css'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index)
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
} 

function App() {
  const [board, setBoard] = useState(Array(16).fill(null))

  const [turn, setTurn] = useState(TURNS.RED)

  const updateBoard = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);
  }

  return (
    <main className='board'>
      <h1>Connect 4</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.RED}>
          {TURNS.RED}
        </Square>
        <Square isSelected={turn === TURNS.YELLOW}>
          {TURNS.YELLOW}
        </Square>
      </section>
    </main>
  )
}

export default App
