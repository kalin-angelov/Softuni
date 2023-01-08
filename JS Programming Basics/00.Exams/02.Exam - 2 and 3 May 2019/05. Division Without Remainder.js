function divisionWithoutRemainder(input) {

    let n = Number(input[0]);
    let index = 1;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for ( let i = 0; i < n; i++) {
        let num = Number(input[index++]);

        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 === 0) {
            p2++;
        }
        if (num % 4 === 0) {
            p3++
        }

    }
    let percent1 = p1 * 100 / n;
    let percent2 = p2 * 100 / n;
    let percent3 = p3 * 100 / n;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);

}
divisionWithoutRemainder(["3","3","6","9"])
