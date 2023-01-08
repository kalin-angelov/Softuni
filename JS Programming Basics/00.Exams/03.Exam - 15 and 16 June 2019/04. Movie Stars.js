function movieStars(input) {

    let index = 0;
    let actorsBudget = Number(input[index++]);
    let command = input[index++];
    let monyLeft = true;
    

    while (command !== "ACTION") {

        let actorName = "";
        actorName += command;
        let name = actorName.length;

        if (name <= 15) {
           let actorReward = Number(input[index++]);
           actorsBudget -= actorReward; 
        } else if (name > 15) {
            let reward = 0;
            reward += actorsBudget * 0.80;
            actorsBudget = reward;
        }
        
        if (actorsBudget <= 0) {
            let diff = Math.abs(actorsBudget);
            console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
            monyLeft = false;
            break;
        }
        command = input[index++];
    }
    if (monyLeft) {
        console.log(`We are left with ${actorsBudget.toFixed(2)} leva.`);
    }
    
}
movieStars(["100.00","Bret Rogers","100000.56","French Montana","1000000","Greg Pim","40000","ACTION"])
