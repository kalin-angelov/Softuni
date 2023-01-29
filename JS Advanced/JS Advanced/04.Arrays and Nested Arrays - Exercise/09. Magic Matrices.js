function magicMatrices(matrix) {

    for (let r = 0; r < matrix.length - 1; r++) {
        let sumRowOne = matrix[r].reduce((num, nextNum) => num + nextNum);
        let sumRowTwo = matrix[r + 1].reduce((num, nextNum) => num + nextNum);
        let sumColumOne = 0;
        let sumColumTwo = 0;
        
        for (let c = 0; c < matrix.length; c++) {
            sumColumOne += matrix[r][c];
            sumColumTwo += matrix[r + 1][c];
        }
        if (sumRowOne !== sumRowTwo || sumColumOne !== sumColumTwo) {
            return false;
        } 
    }
    
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));
