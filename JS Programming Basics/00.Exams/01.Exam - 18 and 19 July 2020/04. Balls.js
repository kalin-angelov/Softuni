function balls(input) {

    let index = 0;
    let numBalls = Number(input[index++]);
    
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let othersBalls = 0;
    for (i = 0; i < numBalls; i++) {
        let colors = input[index++];

        if (colors === "red") {

            points += 5;
            redBalls++;
        } else if (colors === "orange") {
            
            points += 10;
            orangeBalls++;
        } else if (colors === "yellow") {
            
            points += 15;
            yellowBalls++;
        } else if (colors === "white") {
            
            points += 20;
            whiteBalls++;
        } else if (colors === "black") {
            
            points = Math.floor(points / 2);
            blackBalls++;
        } else {
            points += 0;
            othersBalls++;
        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${othersBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}
balls(["3","white","black","pink"])
