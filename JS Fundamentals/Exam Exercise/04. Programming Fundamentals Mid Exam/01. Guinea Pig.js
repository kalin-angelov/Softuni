function guineaPig(arr) {

    let quantityFoodInKg = arr.shift();
    let quantityFoodInG = quantityFoodInKg * 1000;
    let quantityHayInKg = arr.shift();
    let quantityHayInG = quantityHayInKg * 1000;
    let quantityCoverInKg = arr.shift();
    let quantityCoverInG = quantityCoverInKg * 1000;
    let guineasWeightInKg = arr.shift();
    let guineasWeightInG = guineasWeightInKg * 1000;
    let dayCounter = 0;
    let thePigIsHappy = true;

    for (let days = 1; days <= 30; days++) {
        quantityFoodInG -= 300;
        dayCounter++;
        if (dayCounter % 2 === 0) {
            let amountOfHay = quantityFoodInG * 0.05;
            quantityHayInG -= amountOfHay;
        }
        if (dayCounter % 3 === 0) {
            let amountOfCover = (guineasWeightInG / 3).toFixed(2);
            quantityCoverInG -= amountOfCover;
        }
        if (quantityCoverInG <= 0 || quantityFoodInG <= 0 || quantityHayInG <= 0) {
            console.log(`Merry must go to the pet store!`);
            thePigIsHappy = false;
            break;
        }
    }
    quantityFoodInKg = quantityFoodInG /1000;
    quantityHayInKg = quantityHayInG / 1000;
    quantityCoverInKg = quantityCoverInG / 1000;
    if (thePigIsHappy) {
        console.log(`Everything is fine! Puppy is happy! Food: ${quantityFoodInKg.toFixed(2)}, Hay: ${quantityHayInKg.toFixed(2)}, Cover: ${quantityCoverInKg.toFixed(2)}.`);
    }
}
guineaPig(["9","5","5.2","1"]);
