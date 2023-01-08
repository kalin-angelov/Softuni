function sequence2K1(input) {

    let n = Number(input[0]);
    let k = 0;
    let sum = 0;

    while (k < n) {

        sum = (k * 2) + 1;
        k = sum;
        if (sum > n) {
            break;
        }
        console.log(sum)
    }

}
sequence2K1(["31"])
