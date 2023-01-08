function series(input) {

    let index = 0;
    let budget = Number(input[index++]);
    let numberOfSeries = Number(input[index++]);
    let sum = 0;

    for(let i = 0; i < numberOfSeries; i++) {
        
        let name = input[index++];
        let price = Number(input[index++]);

        switch(name) {
            case "Thrones":
                sum += (price * 0.50);
                break;
            case "Lucifer":
                sum += (price * 0.60);
                break;
            case "Protector":
                sum += (price * 0.70);
                break;
            case "TotalDrama":
                sum += (price * 0.80);
                break;
            case "Area":
                sum += (price * 0.90);
                break;
            default:
                sum += price;
                break;
        }

    }

    let diff = Math.abs(budget - sum);
        if(budget < sum) {
            console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
        } else if (budget >= sum) {
            console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
        }
    
}
series(["25","6","Teen Wolf","8","Protector","5","TotalDrama","5","Area","4","Thrones","5","Lucifer","9"])
