function agencyProfit(input) {

    let name = input[0];
    let ticketsForAdults = Number(input[1]);
    let ticketsForChildren = Number(input[2]);
    let ticketPriceAdults = Number(input[3]);
    let priceService = Number(input[4]);

    let ticketPriceChildren = ticketPriceAdults * 0.30;
    let priceAdults = (ticketPriceAdults + priceService) * ticketsForAdults;
    let priceChildren = (ticketPriceChildren + priceService) * ticketsForChildren;
    let ticketsPriceAll = priceAdults + priceChildren; 
    let agencyProfit = ticketsPriceAll * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${agencyProfit.toFixed(2)} lv.`)

}
agencyProfit(["WizzAir","15","5","120","40"])
