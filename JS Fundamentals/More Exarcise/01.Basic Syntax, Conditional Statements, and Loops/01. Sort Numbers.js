function sortNumbers(firstNum, secondNum, lastNum) {
  
    let array = [];
    array.push(firstNum, secondNum, lastNum);
    let numSort = array.sort((a, b) => b - a);
    console.log(numSort.join('\n'));
}   
sortNumbers(2, 1, 3)
