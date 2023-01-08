function oscars(input) {

    let index = 0;
    let nameOfActor = input[index++];
    let points = Number(input[index++]);
    let numberOfEvaluators = Number(input[index++]);
    let pointsSum = 0;


    for (let i = 0; i < numberOfEvaluators; i++) {

        let name = "";
        let nameOfEvaluator = input[index++];
        name += nameOfEvaluator;
        let pointsGiven= Number(input[index++]);

        pointsSum += name.length * pointsGiven / 2;
        let sum = points + pointsSum;
        
        if(sum >= 1250.5) {
            break;
        }

    }
    pointsSum += points
    let diff = Math.abs(pointsSum - 1250.5);
    if (1250.5 > pointsSum) {
        console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`);
    } else if (pointsSum >= 1250.5) {
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${pointsSum.toFixed(1)}!`);
    }
   
}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])
