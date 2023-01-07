function lunchBreak(input){
  
    let nameOFSeries = input[0];
    let seriesTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let timeNeed = breakTime - lunchTime - restTime;
    let diff = Math.abs(timeNeed - seriesTime);
    
    if (timeNeed >= seriesTime){
        console.log(`You have enough time to watch ${nameOFSeries} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameOFSeries}, you need ${Math.ceil(diff)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf","48","60"])
