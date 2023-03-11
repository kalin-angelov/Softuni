let {assert} = require("chai");
let {chooseYourCar} = require("../chooseYourCar");

describe ("Test BLA BLa Bla bla...", () => {
    describe("choosingType", () => {
        it("if the year is not in the boundary", () => {
            assert.throw(() => chooseYourCar.choosingType("Sedan", "red", 1899), "Invalid Year!");
            assert.throw(() => chooseYourCar.choosingType("Sedan", "red", 2023), "Invalid Year!");
        });
        it("if the type is not Sedan", () => {
            assert.throw(() => chooseYourCar.choosingType("Sports", "red", 1900), "This type of car is not what you are looking for.");
            assert.throw(() => chooseYourCar.choosingType("Van", "red", 2022), "This type of car is not what you are looking for.");
        });
        it("if the type is not Sedan", () => {
            assert.equal(chooseYourCar.choosingType("Sedan","red", 2010), `This red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType("Sedan","blue", 2022), `This blue Sedan meets the requirements, that you have.`);

        });
        it("if the year if under 2010", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Yellow", 2009), `This Sedan is too old for you, especially with that Yellow color.`);
        });
    })

    describe("brandName ", () => {
        it("if the argument is correct", () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Audi"], 1), "BMW, Peugeot, Audi");
        });
        it("if the input is uncorrect", () => {
            assert.throw(() => chooseYourCar.brandName("Hello", "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName("Hello", {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName({}, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName("Hello", 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName("Hello", []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName([], "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(true, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName("Hello", false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName([], []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName([], {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName({}, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName([], true), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(false, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(true, false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(true, 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName({}, {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName({}, 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(["Hello"], 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(["Hello"], 3), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(["Hello"], -3), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(-1, -1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.brandName(1, 1), `Invalid Information!`);

        });
    })

    describe("carFuelConsumption", () => {
        it("if the input is uncorrect", () => {
            assert.throw(() => chooseYourCar.carFuelConsumption("Hello", "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption("Hello", {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption({}, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(1, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption("Hello", 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption("Hello", []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption([], "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(true, "Hello"), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption("Hello", false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption([], []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption([], 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(1, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption([], {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption({}, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption([], true), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(false, []), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(true, false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(true, 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(1, false), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption({}, {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption({}, 1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(1, {}), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(-1, -1), `Invalid Information!`);
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 0), `Invalid Information!`);
        });
        it("if the car burns too much fuel", () => {
            assert.equal(chooseYourCar.carFuelConsumption(50, 3.6), `The car burns too much fuel - 7.20 liters!`);
            assert.equal(chooseYourCar.carFuelConsumption(50, 5), `The car burns too much fuel - 10.00 liters!`);
        });
        it("if the car is efficient enough", () => {
            assert.equal(chooseYourCar.carFuelConsumption(50, 3), `The car is efficient enough, it burns 6.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(50, 3.5), `The car is efficient enough, it burns 7.00 liters/100 km.`);
        });
    })
})
