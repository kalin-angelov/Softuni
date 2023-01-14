function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;
    let numbers = String(num);

    for (let num of numbers) {
        let numberFromNumbers = Number(num);
        if (numberFromNumbers % 2 === 0) {
            evenSum += numberFromNumbers;
        } else {
            oddSum += numberFromNumbers;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)
