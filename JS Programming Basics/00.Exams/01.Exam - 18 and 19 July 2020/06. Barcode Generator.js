function barcodeGenerator(input) {

    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let print = "";

    let digitA = "" + numOne;
    let digitB = "" + numTwo;
    let index = 0;
    let a = Number(digitA.charAt(index));
    let b = Number(digitB.charAt(index));
    index++;
    let c = Number(digitA.charAt(index));
    let d = Number(digitB.charAt(index));
    index++;
    let e = Number(digitA.charAt(index));
    let f = Number(digitB.charAt(index));
    index++;
    let g = Number(digitA.charAt(index));
    let h = Number(digitB.charAt(index));
    let number = "";
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0){
            continue;
        } else {
            number = `${i}`
        }
        for (let j = c; j <= d; j++) {
            if (j % 2 === 0) {
                continue;
            } else {
                number = `${i}${j}`; 
            }
            for (let k = e; k <= f; k++) {
                if (k % 2 === 0) {
                    continue;
                } else {
                    number = `${i}${j}${k}`;
                }
                    for (let l = g; l <= h; l++) {
                        if (l % 2 === 0) {
                            continue;
                        } else {
                            number = `${i}${j}${k}${l}`;
                            print = print + number + " ";
                        
    
                    }
                }
            }
           
        }
    }
    console.log(print)

}
barcodeGenerator(["3256","6579"])
