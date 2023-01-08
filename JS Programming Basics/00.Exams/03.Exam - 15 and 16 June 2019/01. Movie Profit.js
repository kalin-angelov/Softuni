function movieProfit(input) {

    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketsPrice = Number(input[3]);
    let percent = Number(input[4]);
    
    let allTickets = (ticketsPrice * tickets) * days;
    let percentForCinema = Math.abs((allTickets * percent / 100) - allTickets);

    console.log(`The profit from the movie ${name} is ${percentForCinema.toFixed(2)} lv.`)
}
movieProfit(["The Programmer","20","500","7.50","7"])
