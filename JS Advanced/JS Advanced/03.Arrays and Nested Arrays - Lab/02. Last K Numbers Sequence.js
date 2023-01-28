function lastKNumbersSequence(n, k) {

    let arr = [1];
    while (arr.length < n) {
        let res = arr.slice(-k).reduce((firstNum, nextNum) => firstNum + nextNum);
        arr.push(res)
    }
    return arr;

}
console.log(lastKNumbersSequence(8, 2));
