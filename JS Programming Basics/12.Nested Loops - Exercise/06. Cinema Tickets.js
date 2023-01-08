function cinemaTickets(input) {

    let index = 0;
    let moveName = input[index++];
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;


    while (moveName !== "Finish") {
        let name = moveName;
        let space = Number(input[index++]);
        let freeSpace = space;
        let category = input[index++]; 
        let soldTickets = 0;

        while (category !== "End") {
            switch (category) {
                case "student":
                    studentTickets++;
                    break;   
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;      
            }
            soldTickets++;
            if (soldTickets >= space) {
                break
            }
            category = input[index++];
           
        }
        let percentSpace = soldTickets * 100 / freeSpace;
        totalTickets += soldTickets;
        console.log(`${name} - ${percentSpace.toFixed(2)}% full.`)
        moveName = input[index++];

    }
    let percentStudentTickets = studentTickets * 100 / totalTickets;
    let percentStandardTickets = standardTickets * 100 / totalTickets;
    let percentKidTickets = kidTickets * 100 / totalTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"])
