function biggerHalf(input) {

    input.sort((a,b) => a - b);
    const halfIndex = Math.floor(input.length / 2);
    const result = input.slice(halfIndex);
    return result;

}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
