function smallestTwoNumbers(arr) {

    arr.sort((a,b) => a - b);
    let newArray = arr.slice(0,2);
    console.log(newArray.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
