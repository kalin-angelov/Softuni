function tickets(data, command) {

    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status
        };
    }

    for(let info of data) {
        let [destination, price, status] = info.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    switch(command) {
        case 'destination':tickets.sort((a,b) => a.destination.localeCompare(b.destination));
        break;
        case 'price':tickets.sort((a,b) => a.price - b.price);
        break;
        case 'status':tickets.sort((a,b) => a.status.localeCompare(b.status));
        break;
    }
    
    return tickets;
    
}
console.log(tickets(
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'))
