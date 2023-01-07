function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMan = input[2];
    let rent = 0;

    switch (season){
        case "Spring":
            if (fisherMan <= 6){
                rent = 3000 * 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                rent = 3000 * 0.85;
            } else {
                rent = 3000 * 0.75;
            }
            break;
        case "Autumn":
        case "Summer":
            if (fisherMan <= 6){
                rent = 4200 * 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                rent = 4200 * 0.85;
            } else {
                rent = 4200 * 0.75;
            }
            break;
        case "Winter":
            if (fisherMan <= 6){
                rent = 2600 * 0.90;
            } else if (fisherMan >= 7 && fisherMan <= 11) {
                rent = 2600 * 0.85;
            } else {
                rent = 2600 * 0.75;
            }
            break;
    }
    if (fisherMan % 2 === 0 && season !== "Autumn"){
        rent = rent * 0.95;
    }
    let diff = Math.abs(rent - budget);
    if (budget >= rent){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
fishingBoat(["2000","Winter","13"])
