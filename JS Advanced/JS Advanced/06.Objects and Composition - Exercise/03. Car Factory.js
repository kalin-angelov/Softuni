function carFactory(carSpecification) {

    let result = {};
    result.model = carSpecification.model;

    if ( carSpecification.power <= 90 ) {
        result.engine = { power: 90, volume: 1800 };
    } else if ( carSpecification.power <= 120 ) {
        result.engine = { power: 120, volume: 2400 };
    } else {
        result.engine = { power: 200, volume: 3500};
    }

    carSpecification.carriage === 'hatchback' ? 
    result.carriage = { type: 'hatchback', color: carSpecification.color }
    : 
    result.carriage = { type: 'coupe', color: carSpecification.color}
    
    if (carSpecification.wheelSize % 2 === 0) {
        let carWheelSize = Math.floor(carSpecification.wheelSize - 1);
        result.wheels = new Array(4).fill(carWheelSize);
    } else {
        result.wheels = new Array(4).fill(carSpecification.wheelSize)
    }
    
    return result;

}
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelSize: 17 }
));
