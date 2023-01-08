function maxNumber(input) {

    let index = 0;
    let num = input[index];
    let max = Number.MIN_SAFE_INTEGER;

    while (num !== "Stop") {
        
        num = Number(input[index]);
        index++;
        if (num > max) {
            max = num;
        }
        num = input[index];
    }
    console.log(max)

}
maxNumber(["-1","-2","Stop"])
