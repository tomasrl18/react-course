import confetti from 'canvas-confetti';

import { useState } from 'react'

import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal';
import { saveGameToLocalStorage, resetGameToLocalStorage } from './logic/storage/index.js';

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

  const [countRedWins, setCountRedWins] = useState(0);
  const [countYellowWins, setCountYellowWins] = useState(0);

  const resetGame = () => {
    setBoard(Array(16).fill(null));
    setTurn(TURNS.RED);
    setWinner(null);

    resetGameToLocalStorage();
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
    setTurn(newTurn);

    saveGameToLocalStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);

      if (newWinner === TURNS.RED) {
        setCountRedWins(countRedWins + 1);
      } else {
        setCountYellowWins(countYellowWins + 1);
      }
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
        <section>
          <Square isSelected={turn === TURNS.RED}>
            {TURNS.RED}
          </Square>
          <p>Wins: {countRedWins}</p>
        </section>
        <section>
          <Square isSelected={turn === TURNS.YELLOW}>
            {TURNS.YELLOW}
          </Square>
          <p>Wins: {countYellowWins}</p>
        </section>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
