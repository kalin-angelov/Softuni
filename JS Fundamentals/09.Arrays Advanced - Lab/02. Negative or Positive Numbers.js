function negativeOrPositiveNumbers(arr) {

    let arrayOfNumbers = [];
    for (let num of arr) {
        if (Number(num) < 0) {
            arrayOfNumbers.unshift(num);
        } else {
            arrayOfNumbers.push(num);
        }
    }
    console.log(arrayOfNumbers.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
