function equalNeighbors(matrix) {

    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let row = 0; row < matrix[0].length; row++) {
            if (matrix[i][row] === matrix[i][row + 1]) {
                counter++;
            }
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let colum = 0; colum < matrix.length - 1; colum++) {
            if (matrix[colum][i] === matrix[colum + 1][i]) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));
