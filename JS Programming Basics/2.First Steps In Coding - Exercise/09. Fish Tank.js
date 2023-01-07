function fishTank(input){
  
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let volumeInLiter = volume / 1000;
    let volumeWithoutPercent = (percent * volumeInLiter) / 100;
    let neededWater = volumeInLiter - volumeWithoutPercent;

    console.log(neededWater)

}
fishTank(["85","75","47","17"])
