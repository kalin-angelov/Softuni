function memoryGame(arr) {

    let sequenceOfNum = arr.shift().split(' ');
    let movesCounter = 0;
    let gameOver = false;

    for (let el of arr) {
        let playerMoves = el.split(' ');
        if (sequenceOfNum.length === 0) {
            console.log(`You have won in ${movesCounter} turns!`);
            gameOver = true;
            break;
        }
        while (el !== 'end') {
            movesCounter++;
            let firstTry = playerMoves[0];
            let secondTry = playerMoves[1];
            let penalty = `-${movesCounter}a`
            let element;
            if (firstTry < 0 || firstTry > sequenceOfNum.length - 1) {
                console.log(`Invalid input! Adding additional elements to the board`);
                let sequenceOfNumL = sequenceOfNum.length / 2;
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                break;
            } else if (secondTry < 0 || secondTry > sequenceOfNum.length - 1) {
                console.log(`Invalid input! Adding additional elements to the board`);
                let sequenceOfNumL = sequenceOfNum.length / 2;
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                break;
            } else if (firstTry === secondTry) {
                console.log(`Invalid input! Adding additional elements to the board`);
                let sequenceOfNumL = sequenceOfNum.length / 2;
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                sequenceOfNum.splice(sequenceOfNumL, 0, penalty);
                break;
            }
            if (sequenceOfNum[firstTry] === sequenceOfNum[secondTry]) {
                element = sequenceOfNum[firstTry];
                let max = Math.max(firstTry, secondTry);
                let min = Math.min(firstTry, secondTry);
                console.log(`Congrats! You have found matching elements - ${element}!`);
                sequenceOfNum.splice(max, 1,);
                sequenceOfNum.splice(min, 1);
                break;
            }
            if (sequenceOfNum[firstTry] !== sequenceOfNum[secondTry]) {
                console.log(`Try again!`);
                break;
            }   
        }
    }
    if (!gameOver) {
        console.log(`Sorry you lose :(`);
        console.log(sequenceOfNum.join(' '));
    }
}
memoryGame(["a 2 4 a 2 4", "0 3", "0 2","0 1","0 1", "end"]);
