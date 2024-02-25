import confetti from 'canvas-confetti';

import { useState } from 'react'

import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = localStorage.getItem('board');
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(16).fill(null);
  })

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURNS.RED;
  })

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(16).fill(null));
    setTurn(TURNS.RED);
    setWinner(null);
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
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  return (
    <main className='board'>
      <h1>Connect 4</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {cell}
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

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
