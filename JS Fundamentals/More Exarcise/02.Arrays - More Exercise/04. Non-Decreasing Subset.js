function nonDecreasingSubset(array) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let newArray = [];

    for (let el of array) {
        if (el >= biggestNum) {
            biggestNum = el;
            newArray.push(biggestNum);
        }
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
