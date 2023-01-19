function printNthElement(array) {
    
    let newArray = [];
    let arrayL = array.length - 1;
    let nElement = Number(array[arrayL]);
    for (let i = 0; i < arrayL; i += nElement) {
        let nextElement = array[i];
        newArray.push(nextElement);
    }
    console.log(newArray.join(' '));
}
printNthElement(['1', '2', '3', '4', '5', '6'])
