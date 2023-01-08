function cake(input) {

    let index = 0;
    let width = Number(input[index++]);
    let lengh = Number(input[index++]);
    let cake = width * lengh;
    let cakePiecesLeft = 0;

    while (true) {
        let pieces = input[index];
        if (pieces === "STOP") {
            console.log(`${cakePiecesLeft} pieces are left.`);
            break;
        }
        
        pieces = Number(input[index]);
        cake -= pieces;
        cakePiecesLeft = cake;

        if (cake <= 0) {
            cake = 0;
            let diff = Math.abs(cake - cakePiecesLeft);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        } 
        pieces = input[index++];
    }

}
cake(["10","2","2","4","6","STOP"])
