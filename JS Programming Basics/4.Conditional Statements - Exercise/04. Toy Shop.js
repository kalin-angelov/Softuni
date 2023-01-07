function toyShop(input){
  
    let priceTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);
    let allToys = puzzle + doll + bear + minions + truck;
    let allToysPrice = puzzle * 2.60 + doll * 3 + bear * 4.10 + minions * 8.20 + truck * 2;
    if (allToys >= 50){
        let discount = allToysPrice * 0.75;
        rent = discount * 0.90;
    } else {
        rent = allToysPrice * 0.90;
    } if (rent >= priceTrip){
         let diff = Math.abs(rent - priceTrip);
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
        } else {
        let diff = Math.abs(rent - priceTrip);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8","20","25","30","50","10"])
