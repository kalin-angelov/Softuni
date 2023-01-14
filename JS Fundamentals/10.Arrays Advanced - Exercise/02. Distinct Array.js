function distinctArray(arr) {

    let newArrayOfNumbers = [];
    for (let num of arr) {
        if (!newArrayOfNumbers.includes(num)) {
            newArrayOfNumbers.push(num)
        }
    }
    console.log(newArrayOfNumbers.join(' '));
}
distinctArray([1, 2, 3, 4])
