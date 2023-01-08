function cinema(input) {

    let index = 0;
    let cinemaCapacity = Number(input[index++]);
    let command = input[index];
    let ticketPrice = 5;
    let allPeople = 0;
    let cinemaIsFull = false;
    let sum = 0;

    while (command !== "Movie time!") {

        command = Number(input[index++]);
        let peopleEntering = command;
        allPeople += peopleEntering;

        if (allPeople > cinemaCapacity) {
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${sum} lv.`);
            cinemaIsFull = true;
            break;
        }

        sum += peopleEntering * ticketPrice;
        if (peopleEntering % 3 === 0) {
            sum -= 5;
        }

        command = input[index];

    }
    let diff = Math.abs(cinemaCapacity - allPeople);
    if (!cinemaIsFull) {
        console.log(`There are ${diff} seats left in the cinema.`);
        console.log(`Cinema income - ${sum} lv.`);
    }
}
cinema(["100","10","10","10","10","10","10","10","10","10","10","Movie time!"])
