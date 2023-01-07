function cleverLily(input) {

    let index = 0;
    let age = Number(input[index]);
    index++;
    let washingMachinePrice = Number(input[index]);
    index++;
    let toyPrice = Number(input[index]);
    index++;

    let mony = 0;
    let toys = 0;
    let currentMony = 10;

    for(i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            mony += currentMony;
            currentMony += 10;
            mony -=1;
        } else {
            toys += 1;
        }
    }
    
    let monyFromToys = toys * toyPrice;
    let sum = monyFromToys + mony;
    let diff = Math.abs(sum - washingMachinePrice);
    
    if (washingMachinePrice <= sum) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
    
}
cleverLily(["21","1570.98","3"])
