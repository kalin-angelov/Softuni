function substring(word, firstNum, secondNum) {

    let lastNum = firstNum + secondNum;
    let result = word.substring(firstNum, lastNum);
    console.log(result);
}
substring('ASentence', 1, 8)
