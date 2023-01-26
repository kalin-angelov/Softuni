function roadRadar(speed, area) {
    let status;
    switch (area) {
        case 'motorway':
            let speedLimitInMotorway = 130;
            if (speed <= speedLimitInMotorway) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInMotorway} zone`);
            } else {
                let diff = Math.abs(speed - speedLimitInMotorway);
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimitInMotorway} - ${status}`);
            }
            break;
        case 'interstate':
            let speedLimitInInterstate = 90;
            if (speed <= speedLimitInInterstate) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInInterstate} zone`);
            } else {
                let diff = Math.abs(speed - speedLimitInInterstate);
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimitInInterstate} - ${status}`);
            }
            break;
        case 'city':
            let speedLimitInCity = 50;
            if (speed <= speedLimitInCity) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInCity} zone`);
            } else {
                let diff = Math.abs(speed - speedLimitInCity);
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimitInCity} - ${status}`);
            }
            break;
        case 'residential':
            let speedLimitInResidential = 20;
            if (speed <= speedLimitInResidential) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInResidential} zone`);
            } else {
                let diff = Math.abs(speed - speedLimitInResidential);
                if (diff <= 20) {
                    status = 'speeding';
                } else if (diff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimitInResidential} - ${status}`);
            }
            break;
    }
    
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
