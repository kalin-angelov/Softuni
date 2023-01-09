function printAndSum(start, end) {

    let sum = 0;
    let space = '';
    while (end >= start) {
        space += `${start} `;
        sum += start;
        start++
    }
    console.log(space);
    console.log(`Sum: ${sum}`);

}
printAndSum(0, 26)
