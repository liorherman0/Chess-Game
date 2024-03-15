document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const playerTurn = document.getElementById('player-turn');
    
    const pieces = {
        'wP': '&#9817;', 'wR': '&#9814;', 'wN': '&#9816;', 'wB': '&#9815;', 
        'wQ': '&#9813;', 'wK': '&#9812;', 'bP': '&#9823;', 'bR': '&#9820;', 
        'bN': '&#9822;', 'bB': '&#9821;', 'bQ': '&#9819;', 'bK': '&#9818;'
    };

    let boardState = [
        ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
        ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
        ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
    ];

    function renderBoard() {
        board.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell ' + (i + j) % 2 ? 'black' : 'white';
                const piece = document.createElement('div');
                piece.className = 'piece';
                piece.innerHTML = pieces[boardState[i][j]];
                cell.appendChild(piece);
                board.appendChild(cell);
            }
        }
    }

    renderBoard();
});
