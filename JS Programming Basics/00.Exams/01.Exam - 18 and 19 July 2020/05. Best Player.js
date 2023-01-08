function bestPlayer(input) {

    let index = 0;
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let nameBest = "";
    let name = input[index++];
    let more10 = false;

    while (name !== "END") {

        
        let goals = Number(input[index]);

        if (goals >= 10) {
            maxGoals = goals;
            nameBest = name;
            more10 = true;
            console.log(`${nameBest} is the best player!`);
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
            break;
        }
        if (goals > maxGoals) {
            maxGoals = goals;
            nameBest = name;
        }

        name = input[index++];
    }
    if (!more10) {
        if (maxGoals >= 3) {
            console.log(`${nameBest} is the best player!`);
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
        } else {
            console.log(`${nameBest} is the best player!`);
            console.log(`He has scored ${maxGoals} goals.`)
        }
    }
}

bestPlayer(["Silva","5","Harry Kane","10"])
