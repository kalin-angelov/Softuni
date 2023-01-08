function walking(input) {

    let index = 0;
    let sum = 0;

    while (true) {
        
        let steps = input[index];
        
        if (steps === "Going home") {
            index++;
            steps = Number(input[index]);
            sum += steps;
            steps = sum;
            if (steps >= 10000) {
                let diff = Math.abs(steps - 10000);
                console.log(`Goal reached! Good job!`);
                console.log(`${diff} steps over the goal!`);
                break;
            } else if (steps < 10000) {
                let diff = Math.abs(steps - 10000);
                console.log(`${diff} more steps to reach goal.`);
                break;
            }
        }
        
        steps = Number(input[index]);
        sum += steps;
        steps = sum;
        index++;

        if (steps >= 10000) {
            let diff = Math.abs(steps - 10000);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }
        steps = input[index];
        
    }

}
walking(["125","250","4000","30","2678","4682"])
