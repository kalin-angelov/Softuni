function bombNumbers(arrayOfNum, explosion) {

    let bombRange = explosion.pop();
    let bomb = explosion.shift();
    while (arrayOfNum.includes(bomb)) {
        let bombPosition = arrayOfNum.indexOf(bomb);
        let explosionStart = bombPosition - bombRange;
        if (explosionStart < 0) {
            explosionStart = 0;
        }
        let explosionEnd = bombRange * 2 + 1; 
        arrayOfNum.splice(explosionStart, explosionEnd);
    }
    let sum = 0;
    for (let el of arrayOfNum) {
        sum += el;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
