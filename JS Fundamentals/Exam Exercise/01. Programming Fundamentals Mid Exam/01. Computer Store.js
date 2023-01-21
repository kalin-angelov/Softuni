function computerStore(array) {

    let index = 0;
    let sumWithTax = 0;
    let sumWithoutTax = 0;
    let tax = 0;
    let keepGoing = true;

    while (keepGoing) {
        let price = array[index];
        sumWithTax = sumWithoutTax + tax;
        if (price === 'special') {
            sumWithTax *= 0.90;
            keepGoing = false;
        } else if (price === 'regular') {
            keepGoing = false;
        } else {
            let partsPrice = Number(array[index]);
            if (partsPrice <= 0) {
                console.log(`Invalid price!`);
            } else {
                sumWithoutTax += partsPrice
                tax += partsPrice * 0.20;
            }
        }
        index++;
    }  
    if (sumWithoutTax === 0 || sumWithTax === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${sumWithTax.toFixed(2)}$`);
    }
}
computerStore(['regular']);
