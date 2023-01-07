function timeAdd15Minutes(input){
  
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    let hoursInMinutes = num * 60;
    let allMinutes = num2 + hoursInMinutes + 15;
    let hours = Math.floor(allMinutes / 60);
    let minutes = allMinutes % 60;
    if (hours > 23){
        hours = 0;
    } if (minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`)
    }

}
timeAdd15Minutes(["12","49"])
