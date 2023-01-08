function touristShop(input) {

    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let sum = 0;
    let products = 0;
    let monyOk = true;

    while (command !== "Stop") {
        let price = Number(input[index++]);
        products++;
        if (products % 3 === 0) {
            price = price / 2;
        }
        sum += price
        if (sum > budget) {
            let diff = Math.abs(sum - budget);
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            monyOk = false;
            break;
        }
        
        
        command = input[index++];
    }
    if (monyOk) {
        console.log(`You bought ${products} products for ${sum.toFixed(2)} leva.`);
    }
}
touristShop(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"])
