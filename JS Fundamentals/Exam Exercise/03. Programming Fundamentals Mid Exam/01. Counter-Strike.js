function counterStrike(arr) {

    let energy = Number(arr.shift());
    let battlesCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        let distance = arr[i];

        if (distance === 'End of battle') {
            console.log(`Won battles: ${battlesCounter}. Energy left: ${energy}`);
            break;
        }
        if (energy === 0) {
            console.log(`Not enough energy! Game ends with ${battlesCounter} won battles and ${energy} energy`);
            break;
        }
        energy -= Number(distance);
        if (energy < 0) {
            energy += Number(distance);
            console.log(`Not enough energy! Game ends with ${battlesCounter} won battles and ${energy} energy`);
            break;
        }
        battlesCounter++;
        if (battlesCounter % 3 === 0) {
            energy += battlesCounter;
        }
    }
}
counterStrike((["100","10","10","10","1","2","3","73","10"]));
