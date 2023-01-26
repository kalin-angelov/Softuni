function sameNumbers(num) {

    let numToString = String(num);
    let firstNum = Number(numToString[0]);
    let sum = firstNum;
    let isOk = true;
    for (let i = 1; i < numToString.length; i++) {
        if (firstNum !== Number(numToString[i])){
            console.log('false');
            isOk = false;
            break;
        }
    }
    if (isOk) {
        console.log('true');
    }
    for (let k = 1; k < numToString.length; k++) {
        sum += Number(numToString[k]);
    }
    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234);
