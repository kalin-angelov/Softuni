function filmPremiere(input) {

    let filmName = input[0];
    let moviePackage = input[1];
    let ticketsNumber = Number(input[2]);
    let price = 0;

    switch(filmName) {
        case "John Wick":
            if (moviePackage === "Drink") {
                price += 12 * ticketsNumber;
            } else if (moviePackage === "Popcorn") {
                price += 15 * ticketsNumber;
            } else if (moviePackage === "Menu") {
                price += 19 * ticketsNumber;
            }
            break;
        case "Star Wars":
            if (moviePackage === "Drink") {
                price += 18 * ticketsNumber;
            } else if (moviePackage === "Popcorn") {
                price += 25 * ticketsNumber;
            } else if (moviePackage === "Menu") {
                price += 30 * ticketsNumber;
            }
            if (ticketsNumber >= 4) {
                price *= 0.70;
            }
            break;
        case "Jumanji":
            if (moviePackage === "Drink") {
                price += 9 * ticketsNumber;
            } else if (moviePackage === "Popcorn") {
                price += 11 * ticketsNumber;
            } else if (moviePackage === "Menu") {
                price += 14 * ticketsNumber;
            }
            if (ticketsNumber === 2) {
                price *= 0.85;
            }
            break;

    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)
}
filmPremiere(["Jumanji","Menu","2"])
