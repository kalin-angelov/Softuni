function signCheck(numOne, numTwo, numThree) {

    let result;
    let positiveCounted = 0;
    let negativeCounter = 0;
    if (numOne > 0) {
        positiveCounted++;
    } else {
        negativeCounter++;
    }
    if (numTwo > 0) {
        positiveCounted++;
    } else {
        negativeCounter++;
    }
    if (numThree > 0) {
        positiveCounted++;
    } else {
        negativeCounter++;
    }
    if (negativeCounter === 1 || negativeCounter === 3) {
        result = 'Negative';
    } else {
        result = 'Positive'
    }
    console.log(result);
}
signCheck(-5,1,1)
