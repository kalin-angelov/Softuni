function specialNumbers(input) {

    let num = Number(input[0]);
    let final = "";
    let space = "";

    for (let a = 1; a < 10; a++) {
        
       
        for (let b = 1; b < 10; b++) {
           
            for (let c = 1; c < 10; c++) {
                
                for (let d = 1; d < 10; d++) {
                    if (num % a === 0) {
                        if (num % b === 0) {
                            if (num % c === 0) {
                              if (num % d === 0) {
                                  let number = `${a}${b}${c}${d}`;
                                    space = space + number + " ";
                                }  
                            }
                        }
                    }
                    
                }
            }
        }
    }
    console.log(space)
}
specialNumbers(["16"])
