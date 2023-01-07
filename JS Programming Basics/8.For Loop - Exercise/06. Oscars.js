function oscars(input) {
    
    let index = 0;
    let name = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let n = Number(input[index])
    index++;
    let isNominee = false;
    
    for (let i = 0; i < n; i++) {
        let name1 = input[index];
        index++;
        let points1 = Number(input[index]);
        index++;
        
        let score = name1.length * points1 / 2;
        points += score;

        if (points > 1250.5) {
            isNominee = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        } 
    }
    
    if (!isNominee) {
        let diff = Math.abs(points - 1250.5)
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
    }

}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])
