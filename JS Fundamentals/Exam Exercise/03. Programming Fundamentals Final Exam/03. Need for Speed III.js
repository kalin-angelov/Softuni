function needForSpeed(input) {

    let carsNumber = input.shift();
    let cars = input.splice(0, carsNumber);
    let carCollection = [];
    for (let carInfo of cars) {
        let [model, mileage, fuel] = carInfo.split('|');
        let car = {
            model:model,
            mileage:mileage,
            fuel:fuel,
        }
        carCollection.push(car);
    }
    for (let commandInfo of input) {
        let info = commandInfo.split(' : ');
        let command = info[0];
        if (command === 'Drive') {
            let carName = info[1];
            let distance = Number(info[2]);
            let fuelNeeded = Number(info[3]);
            for (let i = 0; i < carCollection.length; i++) {
                let car = carCollection[i];
                if (car['model'] === carName) {
                    if (Number(car['fuel']) >= fuelNeeded) {
                        car['fuel'] = Number(car['fuel']) - fuelNeeded;
                        car['mileage'] = Number(car['mileage']) + distance;
                        console.log(`${car['model']} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                        if (Number(car['mileage']) >= 100000) {
                            console.log(`Time to sell the ${car['model']}!`);
                            carCollection.splice(i, 1);
                        }
                    } else {
                        console.log(`Not enough fuel to make that ride`);
                    }
                }
            }
        } else if (command === 'Refuel') {
            let carName = info[1];
            let refuel = Number(info[2]);
            for (let car of carCollection) {
                if (car['model'] === carName) {
                    let fuelNeededForFullTank = 75 - Number(car['fuel']);
                    if (fuelNeededForFullTank >= refuel) {
                        car['fuel'] = Number(car['fuel']) + refuel;
                        console.log(`${car['model']} refueled with ${refuel} liters`);
                    } else {
                        car['fuel'] = 75;
                        console.log(`${car['model']} refueled with ${fuelNeededForFullTank} liters`);
                    }
                }
            }
        } else if (command === 'Revert') {
            let carName = info[1];
            let kilometers = Number(info[2]);
            for (let car of carCollection) {
                if (car['model'] === carName) {
                    car['mileage'] = Number(car['mileage']) - kilometers;
                    if (car['mileage'] < 10000) {
                        car['mileage'] = 10000;
                    } else {
                        console.log(`${car['model']} mileage decreased by ${kilometers} kilometers`);
                    }
                }
            }
        } else if (command === 'Stop') {
            for (let result of carCollection) {
                console.log(`${result['model']} -> Mileage: ${result['mileage']} kms, Fuel in the tank: ${result['fuel']} lt.`);
            }
            break;
        }
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
