function skiTrip(input){
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];

    switch (room){
        case "room for one person":
            if (days < 10){
                price = (days - 1) * 18.00;
            } else if (days >= 10 && days <= 15){
                price = (days - 1) * 18.00;
            } else {
                price = (days - 1) * 18.00;
            }
            if (evaluation === "positive"){
                price = price * 1.25;
            } else {
                price = price * 0.90;
            }
            break;
        case "apartment":
            if (days < 10){
                price = ((days - 1) * 25.00) * 0.70;
            } else if (days >= 10 && days <= 15){
                price = ((days - 1) * 25.00) * 0.65;
            } else {
                price = ((days - 1) * 25.00) * 0.50;
            }
            if (evaluation === "positive"){
                price = price * 1.25;
            } else {
                price = price * 0.90;
            }
            break;
        case "president apartment":
            if (days < 10){
                price = ((days - 1) * 35.00) * 0.90;
            } else if (days >= 10 && days <= 15){
                price = ((days - 1) * 35.00) * 0.85;
            } else {
                price = ((days - 1) * 35.00) * 0.80;
            }
            if (evaluation === "positive"){
                price = price * 1.25;
            } else {
                price = price * 0.90;
            }
            break;
    }
    console.log(price.toFixed(2))
}
skiTrip(["2","apartment","positive"])
