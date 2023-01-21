function theLift(array) {

    let people = Number(array[0]);
    let newArray = array[1];
    let liftFreeSpace = newArray.split(' ');
    let maxSeatsAvailable = 4;
    let pplEnteringTheWagon;
    let pplWaiting;
    let finalArrangement = [];

    for (let i = 0; i < liftFreeSpace.length; i++) {
        let num = Number(liftFreeSpace[i]);
        if (num < maxSeatsAvailable) {
            if (people < maxSeatsAvailable) {
                if (people === 0) {
                    finalArrangement.push(num);
                } else if (people < maxSeatsAvailable && num === 0) {
                    finalArrangement.push(people);
                    people -= people;
                } else {
                    pplWaiting = people - (maxSeatsAvailable - num);
                    pplEnteringTheWagon = (people + num) - pplWaiting;
                    people = pplWaiting
                    finalArrangement.push(pplEnteringTheWagon);
                }
            } else if (num === 0) {
                pplWaiting = Math.abs(people - maxSeatsAvailable);
                pplEnteringTheWagon = Math.abs(people - pplWaiting);
                people = pplWaiting;
                finalArrangement.push(pplEnteringTheWagon);
            } else {
                pplWaiting = people - (maxSeatsAvailable - num);
                pplEnteringTheWagon = (people + num) - pplWaiting;
                people = pplWaiting
                finalArrangement.push(pplEnteringTheWagon);
            }
        } else if (num > maxSeatsAvailable) {
            finalArrangement.push(maxSeatsAvailable);
            people += (num - maxSeatsAvailable);
        } else if (num === maxSeatsAvailable) {
            finalArrangement.push(maxSeatsAvailable);
        }
    }
    let everySeatIsTaken = false;
    for (let el of finalArrangement) {
        if (el === maxSeatsAvailable && people === 0) {
            everySeatIsTaken = true;
        } else {
            everySeatIsTaken = false;
        }
    }
    if (people === 0 && !everySeatIsTaken) {
        console.log(`The lift has empty spots!`);
        console.log(finalArrangement.join(' '));
    } else if (everySeatIsTaken) {
        console.log(finalArrangement.join(' '));
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(finalArrangement.join(' '));
    }
} 
theLift(["5","4 3 3 0"]);
