function newHouse(input){
    let type = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (type){
        case "Roses":
            if (number > 80){
                price = (number * 5) * 0.90;
            } else {
                price = number * 5;
            }
            diff = Math.abs(price - budget);
            if (budget >= price){
                console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
            break;
        case "Dahlias":
            if (number > 90){
                price = (number * 3.80) * 0.85;
            } else {
                price = number * 3.80;
            }
            diff = Math.abs(price - budget);
            if (budget >= price){
                console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
            break;
        case "Tulips":
            if (number > 80){
                price = (number * 2.80) * 0.85;
            } else {
                price = number * 2.80;
            }
            diff = Math.abs(price - budget);
            if (budget >= price){
                console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
            break;
        case "Narcissus":
            if (number < 120){
                price = (number * 3) * 1.15;
            } else {
                price = number * 3;
            }
            diff = Math.abs(price - budget);
            if (budget >= price){
                console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
            break;
        case "Gladiolus":
            if (number < 80){
                price = (number * 2.50) * 1.20;
            } else {
                price = number * 2.50;
            }
            diff = Math.abs(price - budget);
            if (budget >= price){
                console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
            break;
    }
}
newHouse(["Narcissus","119","360"])
