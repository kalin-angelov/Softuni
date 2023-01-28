function biggestElement(matrix) {

    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let num = matrix[i].sort((a,b) => b - a).splice(0, 1);
        res.push(num);
    }
    return res.sort((a,b) => b - a).slice(0, 1).join('');

}
console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));
console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));
