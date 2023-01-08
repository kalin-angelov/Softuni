function mobileOperator(input) {

    let contractPeriod = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let months = Number(input[3]);

    let price = 0;
    switch (contractType) {
        case "Small":
            if (contractPeriod === "one") {
                price = 9.98;
            } else {
                price = 8.58;
            }
            if (mobileInternet === "yes") {
                if (price > 30) {
                    price += 3.85;
                } else if (price <= 10) {
                    price += 5.50;
                } else if (price <= 30) {
                    price += 4.35
                }
            }
            break;
        case "Middle":
            if (contractPeriod === "one") {
                price = 18.99;
            } else {
                price = 17.09;
            }
            if (mobileInternet === "yes") {
                if (price > 30) {
                    price += 3.85;
                } else if (price <= 10) {
                    price += 5.50;
                } else if (price <= 30) {
                    price += 4.35
                }
            }
            break;
        case "Large":
            if (contractPeriod === "one") {
                price = 25.98;
            } else {
                price = 23.59;
            }
            if (mobileInternet === "yes") {
                if (price > 30) {
                    price += 3.85;
                } else if (price <= 10) {
                    price += 5.50;
                } else if (price <= 30) {
                    price += 4.35
                }
            }
            break;
        case "ExtraLarge":
            if (contractPeriod === "one") {
                price = 35.99;
            } else {
                price = 31.79;
            }
            if (mobileInternet === "yes") {
                if (price > 30) {
                    price += 3.85;
                } else if (price <= 10) {
                    price += 5.50;
                } else if (price <= 30) {
                    price += 4.35
                }
            }
            break;
             
    }
    let finalPrice = price * months;
    if (contractPeriod === "two") {
        let sum = finalPrice * 3.75 / 100;
        finalPrice -= sum;
        
    }
    
    console.log(`${finalPrice.toFixed(2)} lv.`)
}
mobileOperator(["two","Small","yes","20"])
