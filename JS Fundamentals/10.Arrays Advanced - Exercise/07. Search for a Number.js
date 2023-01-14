function searchForANumber(arrayOfNumbers, process) {

    let firstCommand = process.shift();
    let secondCommand = process.shift();
    let lastCommand = process.shift();
    let counter = 0;

    let newArrayOfNumbers = arrayOfNumbers.splice(0,firstCommand);
    newArrayOfNumbers.splice(0,secondCommand);
    for (let el of newArrayOfNumbers) {
        if (el === lastCommand) {
            counter++;
        }
    }
    console.log(`Number ${lastCommand} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5])
