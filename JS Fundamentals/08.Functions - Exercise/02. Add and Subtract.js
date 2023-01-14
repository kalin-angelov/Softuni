function addAndSubtract(firstNum, secondNum, thirdNum) {

    let sum = sumFirstNumberAndSecondNumber(firstNum, secondNum);
    let finalResult = result(sum, thirdNum);

    function sumFirstNumberAndSecondNumber(firstNumber, secondNumber){
        return firstNum + secondNum;
    }

    function result (sumFirstAndSecondNumber, lastNum) {
        return sum - thirdNum;
    }
    console.log(finalResult);
}
addAndSubtract(23,6,10)
