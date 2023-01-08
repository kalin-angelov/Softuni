function sumOfTwoNumbers(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let combination = 0;
    let isMagic = false;

    for (a = firstNum; a <= secondNum; a++) {
        for (b = firstNum; b <= secondNum; b++) {

            combination++;
            let sum = a + b;
            

            if (sum === magicNum) {
                isMagic = true;
                break;
            }
        }
        if (isMagic) {
            console.log(`Combination N:${combination} (${a} + ${b} = ${magicNum})`)
            break;
        }
        
    }
    if (!isMagic) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1","10","5"])
