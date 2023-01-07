function basketballEquipment(input){
    let annualFee = Number(input[0]);

    let sneakers = (40 * annualFee) / 100;
    let sneakersPrice = annualFee - sneakers;
    let outfit = (20 * sneakersPrice) / 100;
    let outfitPrice = sneakersPrice - outfit;
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let total = sneakersPrice + outfitPrice + ballPrice +  accessoriesPrice + annualFee;

    console.log(total)

}
basketballEquipment(["365"])
