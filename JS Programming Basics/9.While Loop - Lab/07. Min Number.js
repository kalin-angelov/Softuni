function minNumber(input) {

    let index = 0;
    let num = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (num !== "Stop") {
        
        num = Number(input[index]);
        index++;
        if (num < min) {
            min = num;
        }
        num = input[index];
    }
    console.log(min)

}
minNumber(["-1","-2","Stop"])
