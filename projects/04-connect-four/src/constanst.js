export const TURNS = {
    RED: '🔴',
    YELLOW: '🟡'
}
  
export const WINNER_COMBINATIONS = [
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