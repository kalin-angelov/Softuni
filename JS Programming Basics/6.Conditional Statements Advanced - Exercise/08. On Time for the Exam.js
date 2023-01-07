function onTimeForTheExam(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);
    
    let hourToMinExam = hourExam * 60;
    let hourToMinArrival = hourArrival * 60;
    let examTime = hourToMinExam + minExam;
    let arrivalTime = hourToMinArrival + minArrival;
    
    if (arrivalTime > examTime){
        let diff = Math.abs(arrivalTime - examTime);
        if (diff < 60){
            console.log(`Late`)
            console.log(`${diff} minutes after the start`)
        } else if (diff >= 60){
            min = diff % 60;
            hour = diff / 60;
            if (min < 10){
                console.log(`Late`)
                console.log(`${Math.floor(hour)}:0${min} hours after the start`)
            } else {
                console.log(`Late`)
                console.log(`${Math.floor(hour)}:${min} hours after the start`)
            }
        }
    } else if (examTime >= arrivalTime){
        let diff = Math.abs(examTime - arrivalTime)
        if (diff === 0){
            console.log(`On time`)
        } else if (diff <= 30){
            min = diff % 60;
            console.log(`On time`)
            console.log(`${min} minutes before the start`)
        } else if (diff >= 30 && diff < 60){
            min = diff % 60;
            console.log(`Early`)
            console.log(`${min} minutes before the start`)
        } else if (diff >= 60){
            hour = diff / 60;
            min = diff % 60;
            if (min < 10){
                console.log(`Early`)
                console.log(`${Math.floor(hour)}:0${min} hours before the start`)
            } else {
                console.log(`Early`)
                console.log(`${Math.floor(hour)}:${min} hours before the start`)
            }
        }
    } 
}
onTimeForTheExam(["16","00","15","00"])
