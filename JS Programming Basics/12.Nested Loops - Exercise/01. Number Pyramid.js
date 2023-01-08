function numberPyramid(input) {

    let n = Number(input[0]);
    let printNum = 0;
    let print = false;

    for (let i = 1; i <= n; i++) {
        let space = "";
        for (let j = 1; j <= i; j++) {
            printNum++;
            space += printNum + " ";
        
            if (printNum === n) {
                print = true;
                break;
            } 
        }
         console.log(space)
        if (print) {
           break;
        }
    }
}
numberPyramid(["12"])
