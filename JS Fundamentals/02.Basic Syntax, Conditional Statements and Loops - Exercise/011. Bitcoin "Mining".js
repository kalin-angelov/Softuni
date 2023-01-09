function bitcoinMining(input) {

    let index = 0;
    let goldForDay = Number(input[index++]);
    let daysCounter = 0;
    let sum = 0;
    let bitcoinCounter = 0;
    let dayOfFirstPerches = 0;

    while (goldForDay === goldForDay) {

        daysCounter++
        if (daysCounter % 3 === 0) {
            goldForDay *= 0.70;
        }

        sum += (goldForDay * 67.51);
        // 67.51 - Gram of Gold
        while (sum >= 11949.16) {
            sum -= 11949.16;
            bitcoinCounter++
            // 11949.16 Price of Bitcoin
            if (bitcoinCounter === 1) {
                dayOfFirstPerches += daysCounter
            }
        }

        goldForDay = Number(input[index++]);
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPerches}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])
