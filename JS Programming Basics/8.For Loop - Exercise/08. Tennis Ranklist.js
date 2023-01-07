function tennisRankList(input) {

    let index = 2;
    let n = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0;
    let w = 0;
    let f = 0;
    let sf = 0;

    for (let i = 0; i < n; i++) {
        
        let res = input[index];
        index++

        if (res === "W") {
            points += 2000;
            w++;
        } else if (res === "F") {
            points += 1200;
            f++;
        } else {
            points += 720;
            sf++;
        }
    }

    let allPoints = startPoints + points;
    let averagePoints = ((w * 2000 + f * 1200 + sf * 720) / n);
    let tournamentWin = w / n * 100;

    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${tournamentWin.toFixed(2)}%`);

}
tennisRankList(["7","1200","SF","F","W","F","W","SF","W"])
