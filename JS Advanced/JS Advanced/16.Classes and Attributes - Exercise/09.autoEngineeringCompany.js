function autoEngineeringCompany(input) {

    let list = {};
    
    for (let info of input) {

        let [carBrand, carModel, producedCars] = info.split(' | ');

        if (!list.hasOwnProperty(carBrand)) {
            list[carBrand ] = new Map ();
            list[carBrand].set(carModel, Number(producedCars));
        } else if (list.hasOwnProperty(carBrand) && list[carBrand].has(carModel)) {
            let newNumberOfCars = Number(list[carBrand].get(carModel)) + Number(producedCars);
            list[carBrand].set(carModel, newNumberOfCars);
        } else if(list.hasOwnProperty(carBrand) && !list[carBrand].has(carModel)) {
            list[carBrand].set(carModel, producedCars);
        };
    }

    let cars = Array.from(Object.keys(list));
    let carModels = Array.from(Object.values(list));
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
        let models = Array.from(carModels[i]);
        for (let k = 0; k < models.length; k++) {
            console.log(`###${models[k][0]} -> ${models[k][1]}`);
        }
        
    }

}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
