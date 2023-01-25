function sumNumbers(firstNum, lastNum) {

    let sum = 0;
    for (let i = Number(firstNum); i <= Number(lastNum); i++) {
        sum += i
    }
    console.log(sum);
}
sumNumbers('-8', '20');
