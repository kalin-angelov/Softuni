function firstAndLastKNumbers(arr) {

    let k = arr[0];
    let firstTwoNumbers = arr.slice(1,k + 1);
    let lastTwoNumbers = arr.slice(-k);
    console.log(firstTwoNumbers.join(' '));
    console.log(lastTwoNumbers.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])
