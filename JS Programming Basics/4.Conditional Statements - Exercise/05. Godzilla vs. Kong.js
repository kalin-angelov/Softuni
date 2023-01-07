function godzillaVsKong(input){
  
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let priceClothForOneExtra = Number(input[2]);
    let discount = 0
   
    let decorPrice = budget * 0.10;
    let priceClothForAllExtra = extra * priceClothForOneExtra;
    if (extra >= 150){
        discount = (priceClothForAllExtra * 0.90) + discount ;
    } else {
        discount = priceClothForAllExtra + discount;    
    }
    let priceForAll = discount + decorPrice;
    let diff = Math.abs(budget - priceForAll);

    if (priceForAll > budget){
        console.log(`Not enough money!`);
       console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
    
}
godzillaVsKong(["9587.88","222","55.68"])
