function perfectNumber(number) {

    let sumOFNumbers = 0;
    let result;
    for (let num = 1; num < number; num++) {
        if (number % num === 0) {
            sumOFNumbers += num;
        }
    }
    if (sumOFNumbers === number) {
        result = `We have a perfect number!`;
    } else {
        result = `It's not so perfect.`;
    }
    console.log(result);
}
perfectNumber(1236498)
