function train(arr) {

    let arrayOfNumbers = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === 'Add') {
            let commandNum = Number(command[1]);
            arrayOfNumbers.push(commandNum);
        } else {
            for (let k = 0; k < arrayOfNumbers.length; k++) {
                if (arrayOfNumbers[k] + Number(command) <= maxCapacity) {
                    arrayOfNumbers[k] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(arrayOfNumbers.join(' '));
}
train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'])
