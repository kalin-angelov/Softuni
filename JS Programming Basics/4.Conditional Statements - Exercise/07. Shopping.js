function shopping(input){
  
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoCard = videoCard * 250;
    let priceProcessor = (priceVideoCard * 0.35) * processor;
    let priceRam = (priceVideoCard * 0.10) * ram;
    let price = priceVideoCard + priceProcessor + priceRam;
    
    if (videoCard > processor) {
        price = price * 0.85;
    }  

    let diff = Math.abs(budget - price);
       
    if (budget >= price){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping(["900","2","1","3"])
