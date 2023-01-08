function addBags(input) {

    let priceUp20Kg = Number(input[0]);
    let kgForLuggage = Number(input[1]);
    let daysBeforeFly = Number(input[2]);
    let luggage = Number(input[3]);
    let priceLuggage = 0;

    if (kgForLuggage < 10) {
        priceLuggage += priceUp20Kg * 0.20;
    } else if (kgForLuggage >= 10 && kgForLuggage <= 20) {
        priceLuggage += priceUp20Kg * 0.50;
    } else {
        priceLuggage += priceUp20Kg + 0;
    }

    if (daysBeforeFly < 7) {
        priceLuggage *= 1.40;
    } else if (daysBeforeFly >= 7 && daysBeforeFly <= 30) {
        priceLuggage *= 1.15;
    } else {
        priceLuggage *= 1.10;
    }

    let price = luggage * priceLuggage;

    console.log(`The total price of bags is: ${price.toFixed(2)} lv. `)
}
addBags(["25.50","5","36","6"])
