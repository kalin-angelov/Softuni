function sumFirstAndLast(arrayOfNumbers) {

    let firstNum = Number(arrayOfNumbers[0]);
    let lastNumber = Number(arrayOfNumbers[arrayOfNumbers.length - 1]);
    let result = firstNum + lastNumber;
    console.log(result);
}
sumFirstAndLast(['20', '30', '40'])
