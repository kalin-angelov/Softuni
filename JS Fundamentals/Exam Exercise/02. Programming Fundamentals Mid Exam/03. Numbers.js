function numbers(num) {

    let newNum = num.split(' ');
    let sumOfNums = 0;
    let averageNum;
    let newArray = [];
    let finalResult = [];
    let numOkk = true;
    for (let el of newNum) {
        sumOfNums += Number(el);
    }
    averageNum = sumOfNums / newNum.length;
    for (let el of newNum) {
        if (Number(el) > averageNum) {
            newArray.push(el);
        }
    }
    newArray.sort((a,b) => b - a);
    for (let el of newArray) {
        if (finalResult.length < 5) {
            finalResult.push(el);
        } else {
            break;
        }
    }
    if (newArray.length === 0) {
        console.log(`No`);
        numOkk = false;
    }
    if (numOkk) {
        console.log(finalResult.join(' '));
    }
}
numbers('10 20 30 40 50');
