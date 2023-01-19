function rotateArray(array) {

    let arrayL = array.length;
    let rotateCounder = Number(array[arrayL - 1]);
    let newArray = [];

    for (let i = 0; i < arrayL - 1; i++) {
        newArray.push(array[i]);
    }
    for (let k = 0; k < rotateCounder; k++) {
        newArray.unshift(newArray[newArray.length - 1]);
        newArray.pop();
    }
    console.log(newArray.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
