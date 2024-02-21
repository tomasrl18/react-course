import { WINNER_COMBINATIONS } from '../constants.js';

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }

    return null;
  }
};

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((cell) => cell !== null);
}