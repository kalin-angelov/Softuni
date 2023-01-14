function factorialDivision(firstNumber, secondNumber) {

    let result = firstNumFactorial(firstNumber) / secondNumFactorial(secondNumber);
    function firstNumFactorial (number) {
        let resultFirstNum = 1;
        for (let num = 1; num < firstNumber; num++) {
            resultFirstNum *=  num;
        }
        resultFirstNum *= firstNumber;
        return resultFirstNum;
    }
    function secondNumFactorial(number) {
        let resultSecondNum = 1;
        for (let num = 1; num < secondNumber; num++) {
            resultSecondNum *= num;
        }
        resultSecondNum *= secondNumber;
        return resultSecondNum;
    }
    console.log(result.toFixed(2));
}
factorialDivision(5, 2)
