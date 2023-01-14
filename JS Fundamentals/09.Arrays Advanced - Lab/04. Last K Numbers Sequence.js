function lastKNumbersSequence(n,k) {

    let newArray = [1];
    for (let el of newArray) {
        let num = newArray.slice(-k);
        let sum = 0;
        for (let el of num) {
            sum += el;
        }
        newArray.push(sum);
        if (newArray.length === n) {
            console.log(newArray.join(' '));
            return;
        }
    }
}
lastKNumbersSequence(8, 2)
