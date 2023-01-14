function nxNMatrix(number) {
    
    for (let row = 0; row < number; row++) {
        let matrix = [];
        for (let columns = 0; columns < number; columns++) {
            matrix.push(number);
        }
        console.log(matrix.join(' '));
    }
}
nxNMatrix(7)
