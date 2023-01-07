function operationsBetweenNumbers(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    switch (operator){
        case "+":
            result = n1 + n2;
            if (result % 2 === 0){
                answer = "even";
            } else {
                answer = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${answer}`)
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 === 0){
                answer = "even";
            } else {
                answer = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${answer}`)
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 === 0){
                answer = "even";
            } else {
                answer = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${answer}`)
            break;
        case "%":
            result = n1 % n2;
            if (n1 === 0 || n2 === 0){
                console.log(`Cannot divide ${n1} by zero`)
            } else {
            console.log(`${n1} % ${n2} = ${result}`)
            }
            break;
        case "/":
            result = n1 / n2;
            if (n1 === 0 || n2 === 0){
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
            }
            break;
    }
}
operationsBetweenNumbers(["10","0","%"])
