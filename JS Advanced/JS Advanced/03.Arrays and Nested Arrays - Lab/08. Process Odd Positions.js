function processOddPositions(arr) {

    return arr.filter((num, index) => index % 2 !== 0)
    .reverse()
    .map((n) => n * 2)
    .join(' ');
    
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
