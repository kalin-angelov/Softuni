function safari(input) {
    
    let budget = Number(input[0]);
    let gasNeedful = Number(input[1]);
    let dayOfWeek = input[2];

    let gasMony = gasNeedful * 2.10;
    let monyNeeded = gasMony + 100;
    
    if (dayOfWeek === "Saturday") {
        monyNeeded *= 0.90;
    } else {
        monyNeeded *= 0.80;
    }

    let diff = Math.abs(monyNeeded - budget);

    if (monyNeeded <= budget) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}
safari(["120","30","Saturday"])
