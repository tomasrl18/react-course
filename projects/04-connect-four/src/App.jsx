import { useState } from 'react'
import './App.css'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const WINNER_COMBINATIONS = [
  [0, 1, 2, 3], // Firts row
  [4, 5, 6, 7], // Second row
  [8, 9, 10, 11], // Third row
  [12, 13, 14, 15], // Fourth row
  [0, 4, 8, 12], // First column
  [1, 5, 9, 13], // Second column
  [2, 6, 10, 14], // Third column
  [3, 7, 11, 15], // Fourth column
  [0, 5, 10, 15], // Diagonal from top-left to bottom-right
  [3, 6, 9, 12] // Diagonal from top-right to bottom-left
]

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

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c, d] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] &&
        boardToCheck[a] === boardToCheck[d]
      ) {
        return boardToCheck[a];
      }
    }
    
    return null;
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      alert(`Player ${newWinner} wins!`);
    }
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
