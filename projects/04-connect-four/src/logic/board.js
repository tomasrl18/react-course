import { WINNER_COMBINATIONS } from '../constants.js';

export const checkWinner = (boardToCheck) => {
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
};
