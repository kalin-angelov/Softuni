function suppliesForSchool(input){
  
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let priceOfPens = pens * 5.80;
    let priceOfMarkers = markers * 7.20;
    let priceOfDetergent = detergent * 1.20;
    let allPrice = priceOfPens + priceOfMarkers + priceOfDetergent;
    let discount = (allPrice * percentDiscount) / 100;
    let total = allPrice - discount;

    console.log(total)

}
suppliesForSchool(["2","3","4","25"])
