function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    switch (season){
        case "summer":
            if (budget <= 100){
                destination = "Bulgaria";
                stay = "Camp";
                price = budget * 0.30;
            } else if (budget <= 1000){
                destination = "Balkans";
                stay = "Camp";
                price = budget * 0.40;
            } else {
                destination = "Europe";
                stay = "Hotel";
                price = budget * 0.90;
            }
            break;
        case "winter":
            if (budget <= 100){
                destination = "Bulgaria";
                stay = "Hotel";
                price = budget * 0.70;
            } else if (budget <= 1000){
                destination = "Balkans";
                stay = "Hotel";
                price = budget * 0.80;
            } else {
                destination = "Europe";
                stay = "Hotel";
                price = budget * 0.90;
            }
            break;   
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${stay} - ${price.toFixed(2)}`);
}
journey(["1500", "summer"])
