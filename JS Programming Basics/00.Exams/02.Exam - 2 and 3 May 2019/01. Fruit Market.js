function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;
    let raspberries = raspberriesPrice * raspberriesQuantity;
    let strawberries = strawberriesPrice * strawberriesQuantity;
    let bananas = bananasQuantity * bananasPrice;
    let oranges = orangesPrice * orangesQuantity;
    
    let sum = raspberries + strawberries + bananas + oranges;

    console.log(`${sum.toFixed(2)}`)
}
fruitMarket(["48","10","3.3","6.5","1.7"])
