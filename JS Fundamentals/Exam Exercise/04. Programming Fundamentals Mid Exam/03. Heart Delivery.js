function heartDelivery(arr) {

    let newArray = arr.shift();
    let neighborhood = [];
    let loveAddress = '';
    let houseCounter = 0;
    let cupidLastPosition = 0;

    for (let el of newArray) {
        if (el !== '@') {
            loveAddress += el;
        } else {
            neighborhood.push(loveAddress);
            loveAddress = '';
        }
    }
    neighborhood.push(loveAddress);
    for (let el of arr) {
        if (el === 'Love!') {
            console.log(`Cupid's last position was ${cupidLastPosition}.`);
            for (let el of neighborhood) {
                if (el !== 0) {
                    houseCounter++;
                }
            }
            if (houseCounter === 0) {
                console.log(`Mission was successful.`);
            } else {
                console.log(`Cupid has failed ${houseCounter} places.`);
            }
            break;
        } 
        el = el.split(' ');
        let addressCommand = el[0];
        let jumpIndex = Number(el[1]);
        cupidLastPosition += jumpIndex;
        if (addressCommand === 'Jump') {
            if (cupidLastPosition <= neighborhood.length - 1 && cupidLastPosition >= 0) {
                let heartDecrease = neighborhood.slice(cupidLastPosition, cupidLastPosition + 1);
                if (Number(heartDecrease) === 0) {
                    console.log(`Place ${cupidLastPosition} already had Valentine's day.`);
                } else if (heartDecrease - 2 <= 0) {
                    heartDecrease = 0;
                    neighborhood.splice(cupidLastPosition, 1, heartDecrease);
                    console.log(`Place ${cupidLastPosition} has Valentine's day.`);
                } else if (heartDecrease - 2 > 0) {
                    heartDecrease -= 2;
                    neighborhood.splice(cupidLastPosition, 1, heartDecrease);
                }
                
            } if (cupidLastPosition > neighborhood.length - 1) {
                cupidLastPosition = 0;
                let heartDecrease = neighborhood.slice(cupidLastPosition, cupidLastPosition + 1);
                if (Number(heartDecrease) === 0) {
                    console.log(`Place ${cupidLastPosition} already had Valentine's day.`);
                } else if (heartDecrease - 2 <= 0) {
                    heartDecrease = 0;
                    neighborhood.splice(cupidLastPosition, 1, heartDecrease);
                    console.log(`Place ${cupidLastPosition} has Valentine's day.`);
                } else if (heartDecrease - 2 > 0) {
                    heartDecrease -= 2;
                    neighborhood.splice(cupidLastPosition, 1, heartDecrease);
                }
                
            }
        }
    }
}  
heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"]);
