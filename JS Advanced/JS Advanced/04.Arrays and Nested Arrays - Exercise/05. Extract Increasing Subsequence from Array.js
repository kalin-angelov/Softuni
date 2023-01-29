function extractIncreasingSubsequenceFromArray(arr) {

    let res = [];
    let biggestNum = arr[0];
    res = arr.reduce((buffer, nextNum) => {
        if (biggestNum <= nextNum) {
            buffer.push(nextNum);
            biggestNum = nextNum;
        }
        return buffer;
    },[]);
    return res;
    
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3,4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15,6, 1]));
