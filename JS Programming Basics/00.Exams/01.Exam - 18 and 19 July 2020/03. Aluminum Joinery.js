function aluminumJoinery(input) {

    let numberJoinery = Number(input[0]);
    let joinerySize =  input[1];
    let delivery = input[2];
    let price = 0;

    if (joinerySize === "90X130") {
        if (numberJoinery >= 60) {
            price = 110 * numberJoinery * 0.92;
        } else if (numberJoinery >= 30) {
            price = 110 * numberJoinery * 0.95;
        } else {
            price = 110 * numberJoinery;
        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (numberJoinery >= 99) {
            price *= 0.96;
        } 

    } else if (joinerySize === "100X150") {
        if (numberJoinery >= 80) {
            price = 140 * numberJoinery * 0.90;
        } else if (numberJoinery >= 40) {
            price = 140 * numberJoinery * 0.94;
        } else {
            price = 140 * numberJoinery;
        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (numberJoinery >= 99) {
            price *= 0.96;
        } 
    } else if (joinerySize === "130X180") {
        if (numberJoinery >= 50) {
            price = 190 * numberJoinery * 0.88;
        } else if (numberJoinery >= 20) {
            price = 190 * numberJoinery * 0.93;
        } else {
            price = 190 * numberJoinery;
        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (numberJoinery >= 99) {
            price *= 0.96;
        } 
    } else if (joinerySize === "200X300") {
        if (numberJoinery >= 50) {
            price = 250 * numberJoinery * 0.86;
        } else if (numberJoinery >= 25) {
            price = 250 * numberJoinery * 0.91;
        } else {
            price = 250 * numberJoinery;
        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (numberJoinery >= 99) {
            price *= 0.96;
        } 
    }
   
    if (numberJoinery < 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${price.toFixed(2)} BGN`)
    }

}
aluminumJoinery(["2","130X180","With delivery"])
