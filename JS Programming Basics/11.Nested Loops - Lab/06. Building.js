function building(input) {

    let n = Number(input[0]);
    let k = Number(input[1]);
    

    for (let i = n; i > 0; i--) {
        let space = "";
        for (let j = 0; j < k; j++ ) {
            if (i === n) {
                space = space + `L${i}${j} `
            }
            if (i % 2 === 0 && i !== n) {
                space = space + `O${i}${j} `;
            }   
            if (i % 2 !== 0 && i !== n) {
                space = space + `A${i}${j} `;
            }
        }
        console.log(space);
    }
    
}
building(["6", "4"])
