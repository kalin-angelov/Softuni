function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let price = 0;
    let totalPrice = 0;
    let day = 0;

    for (let i = 1; i <= days; i++) {
        let totalPriceForDay = 0
        day++;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                price = 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price = 1.25;
            } else {
                price = 1;
            }
            totalPriceForDay += price;
           
        }
        totalPrice += totalPriceForDay
        console.log(`Day: ${day} - ${totalPriceForDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["5","2"])
