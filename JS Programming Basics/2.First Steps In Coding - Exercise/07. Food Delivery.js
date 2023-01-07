function foodDelivery(input){
  
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let chickenPrice = chicken * 10.35;
    let fishPrice = fish * 12.40;
    let veganPrice = vegan * 8.15;
    let foodPrice = chickenPrice + fishPrice + veganPrice;
    let dessertPrice = (20 * foodPrice) / 100;
    let total = chickenPrice + fishPrice + veganPrice + dessertPrice + 2.50;
    

    console.log(total)

}
foodDelivery(["2","4","3"])
