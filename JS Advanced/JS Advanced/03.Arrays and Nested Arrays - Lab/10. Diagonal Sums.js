function diagonalSums(matrix) {

    let mainDiagonal = 0;
    let secondaryDiagonal = matrix[0].length - 1;
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumMainDiagonal += matrix[i][mainDiagonal];
        sumSecondaryDiagonal += matrix[i][secondaryDiagonal];
        mainDiagonal++;
        secondaryDiagonal--;
    }
    console.log(sumMainDiagonal, sumSecondaryDiagonal);
   
}
diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);
