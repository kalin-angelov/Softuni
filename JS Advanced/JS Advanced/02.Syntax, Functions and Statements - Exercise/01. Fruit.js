function fruit(fruit, weightInGram, priceForKg) {

    let weightInKg = weightInGram / 1000;
    let finalPrice = weightInKg * priceForKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
