function movieDestination(input) {

    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price = 0;

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                price += days * 45000;
            } else if (season === "Summer") {
                price += days * 40000;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                price += days * 17000;
            } else if (season === "Summer") {
                price += days * 12500;
            }
            break;
        case "London":
            if (season === "Winter") {
                price += days * 24000;
            } else if (season === "Summer") {
                price += days * 20250;
            }
            break;
    }
    if (destination === "Dubai") {
        price *= 0.70;
    } else if (destination === "Sofia") {
        price *= 1.25;
    }
    let diff = Math.abs(movieBudget - price);
    if (movieBudget >= price) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }
}
movieDestination(["1000000","Dubai","Summer","5"])
