function triplesOfLatinLetters(num) {

    let number = Number(num);
    let space = '';

    for (let i = 0; i < num; i++) {
        let space = '';
        let letter1 = String.fromCharCode(97 + i)
        for (let j = 0; j < num; j++) {
            let letter2 = String.fromCharCode(97 + j);
            for (let k = 0; k < num; k++) {
                let letter3 = String.fromCharCode(97 + k);
                space = letter1 + letter2 + letter3;
                console.log(space)
            }
        }
    }  
}
triplesOfLatinLetters('3')
