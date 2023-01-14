function arrayManipulations(arr) {

    let commands = arr.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum]
            = arr[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                commands.push(firstNum);
                break
            case 'Remove':
               commands = commands.filter(x => x !== firstNum);
                break;
            case 'RemoveAt':
                commands.splice(firstNum, 1);
                break;
            case 'Insert':
                commands.splice(secondNum, 0, firstNum);
                break;
 
        }
    }
    console.log(commands.join(' '));
}
arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3'])
