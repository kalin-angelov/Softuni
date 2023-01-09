function triangleOfNumbers(number) {

    for (let num1 = 1; num1 <= number; num1++) {
        let space = '';
        for (let num2 = 1; num2 <= num1; num2++) {
            space += `${num1} `
        }
        console.log(space);
    }
}
triangleOfNumbers(3)
