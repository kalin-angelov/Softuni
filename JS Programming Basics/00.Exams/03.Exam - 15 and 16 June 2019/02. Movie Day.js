function movieDay(input) {

    let timeForAction = Number(input[0]);
    let numberOFScenes = Number(input[1]);
    let sceneTime = Number(input[2]);

    let decorPreparation = timeForAction * 0.15;
    let timeNeeded = numberOFScenes * sceneTime + decorPreparation;
    let diff = Math.abs(timeForAction - timeNeeded);

    if (timeForAction >= timeNeeded) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`)
    }
}
movieDay(["60","15","3"])
