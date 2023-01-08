function accountBalance(input) {
    
    let index = 0;
    let fee = input[index];
    let sum = 0;

    while (fee !== "NoMoreMoney") {
        fee = Number(input[index]);
        if (fee < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum += fee;
        console.log(`Increase: ${fee.toFixed(2)}`);
        index++;
        fee = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["120","45.55","-150"])
