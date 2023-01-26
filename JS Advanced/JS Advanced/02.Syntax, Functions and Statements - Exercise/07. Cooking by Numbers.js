function cookingByNumbers(num, ...commands) {

    let numberForOperation = Number(num);
    for (let el of commands) {
        switch (el) {
        case 'chop':
            numberForOperation /= 2;
            console.log(numberForOperation);
            break;
        case 'dice':
            numberForOperation = Math.sqrt(numberForOperation);
            console.log(numberForOperation);
            break;
        case 'spice':
            numberForOperation += 1;
            console.log(numberForOperation);
            break;
        case 'bake':
            numberForOperation *= 3;
            console.log(numberForOperation);
            break;
        case 'fillet':
            numberForOperation *= 0.80;
            console.log(numberForOperation);
            break;
        }
    }
    
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
