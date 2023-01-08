function sumNumbers(input) {

    let n = Number(input[0]);
    let index = 0;
    let sum = 0;

    while (true) {

        index++;
        let nextNum = Number(input[index]);
        sum += nextNum;
        if (sum >= n) {
            break;
        }
    }
    console.log(sum)
}
sumNumbers(["20","1","2","3","4","5","6"])
