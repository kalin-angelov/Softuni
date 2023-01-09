function amazingNumbers(number) {

    let num = String(number);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let newNumber = Number(num[i]);
        sum += newNumber;
    }
    
    let result = sum.toString().includes('9');
    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False`);
}
amazingNumbers(999)
