function equalSumsEvenOddPosition(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let print = "";

    for (let i = a; i <= b; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            print = print + `${i} `;
        }
    }
    console.log(print)
}   
equalSumsEvenOddPosition(["100000","100050"])
