function greatestCommonDivisorGCD(firstNum, secondNum) {
    while (secondNum) {
        let t = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = t;
    }
    return firstNum;
}
console.log(greatestCommonDivisorGCD(15, 5));
console.log(greatestCommonDivisorGCD(2154, 458));
