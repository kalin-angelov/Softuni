function multiplicationTable(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${n} = ${i * n}`)
    }
}
multiplicationTable(["5"])
