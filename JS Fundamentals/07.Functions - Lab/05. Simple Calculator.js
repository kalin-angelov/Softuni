function simpleCalculator(x, y, operator) {

    let res;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    switch (operator) {
        case 'multiply': res = multiply; break;
        case 'divide': res = divide; break;
        case 'add': res = add; break;
        case 'subtract': res = subtract; break;
    }
    console.log(res(x, y));
}
simpleCalculator(5,5,'multiply')
