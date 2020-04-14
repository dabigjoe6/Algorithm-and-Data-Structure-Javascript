// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
 

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

var exist = function(board, word) {
    if (!board) {
        return false
    }
    
    const m = board.length
    const n = board[0].length
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (helper(board, m, n, word, i, j)) {
                return true
            }
        }
    }
    return false
};

const helper = (board, m, n, word, x, y) => {
    if (word === null || word.length === 0) {
        return true
    }
    
    if (x < 0 || x >= m || y < 0 || y >= n) {
        return false
    }
    
    if (board[x][y] !== word.charAt(0)) {
        return false
    }
    
    let find = (a, b) => helper(board, m, n, word.slice(1), a, b)
    
    const c = board[x][y]
    board[x][y] = '-'
    const r = find(x, y - 1) || find(x, y + 1) || find(x - 1, y) || find(x + 1, y)
    board[x][y] = c
    
    return r
}