function sumDijits(number) {

    let num = String(number);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        
        let newNum = Number(num[i]);
        sum += newNum;

    }
    console.log(sum);
}
sumDijits(543)
