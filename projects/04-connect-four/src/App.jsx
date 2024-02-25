import { useState } from 'react'
import './App.css'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  return (
    <div className={className}>
      {children}
    </div>
  )
} 

function App() {
  const [board, setBoard] = useState(Array(16).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1>Connect 4</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
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
