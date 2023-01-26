function timeToWalk (steps, length, speed) {

    let distance = steps * length;
    let res = Math.floor(distance / 500);
    let speedMetreInSec = speed / 3.6;
    let time = distance / speedMetreInSec;

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number(time - (timeInMin * 60)).toFixed(0);
    let timeInHour = Math.floor(time / 3600);
    timeInMin += res;
    timeInHour = Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;
    let hour = timeInHour < 10 ? `0${timeInHour}` : `${timeInHour}`;
    let min = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let sec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`
    console.log(`${hour}:${min}:${sec}`);
    
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
