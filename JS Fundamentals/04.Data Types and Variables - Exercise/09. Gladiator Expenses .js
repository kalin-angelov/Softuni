function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shiedPrice, armorPrice) {

    let sum = 0;
    let lossesCount = 0;
    let shieldCount = 0;

    for (let games = 1; games <= lostFightsCount; games++) {

        lossesCount++

        if (lossesCount % 2 === 0) {
            sum += helmetPrice;
        }
        if (lossesCount % 3 === 0) {
            sum += swordPrice;
        }
        if (lossesCount % 6 === 0) {
            shieldCount++
            sum += shiedPrice;
        }
            if (shieldCount % 2 === 0 && shieldCount !== 0) {
                sum += armorPrice;
                shieldCount = 0;
            }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(23,12.50,21.50,40,200)
