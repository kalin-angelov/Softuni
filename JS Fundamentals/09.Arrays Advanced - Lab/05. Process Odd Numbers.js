function processOddNumbers(arr) {

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            let num = arr[i] * 2;
            newArray.push(num);
        }
    }
    newArray.reverse();
    console.log(newArray.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])
