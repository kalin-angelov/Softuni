function spiceMustFlow(startingYield) {

    let dailyYieldDrops = 10;
    let spicesConsumedDailyByTheCrew = 26;
    let spicesConsumedAfterMineExhaustion = 26;
    let spiceSum = 0;
    let dayCounter = 0;
    let dailyYield = startingYield;

    while (dailyYield >= 100) {
        dayCounter++;
        spiceSum = (dailyYield - spicesConsumedDailyByTheCrew) + spiceSum;
        dailyYield -= dailyYieldDrops;
    }

    if (spiceSum > 26) {
        spiceSum -= spicesConsumedAfterMineExhaustion;
    }

    console.log(dayCounter);
    console.log(spiceSum);
}
spiceMustFlow(450)
