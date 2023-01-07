function worldSwimmingRecord(input){
  
    let record = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secForOneMeter = Number(input[2]);

    let distanceTime = distanceInMeters * secForOneMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let time = distanceTime + delay;
    let diff = Math.abs(record - time);
    
    if (time < record){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
worldSwimmingRecord(["55555.67","3017","5.03"])
