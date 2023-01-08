function combinations(input) {

    let n = Number(input[0]);
    let combinations = 0;

    for (a = 0; a <= n; a++) {
        for (b = 0; b <= n; b++) {
            for (c = 0; c <= n; c++) {

                let sum = a + b + c;

                if (sum === n) {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}
combinations(["5"])
