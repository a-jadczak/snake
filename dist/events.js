export const checkWin = (score, board) => {
    if (score == (board.size * board.size) - 1) {
        console.log("won");
    }
};
