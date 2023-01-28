function negativePositiveNumbers(input) {

    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            array.unshift(input[i]);
        } else {
            array.push(input[i]);
        }
    }
    array.forEach(num => console.log(num));

}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
