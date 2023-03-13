let {assert, expect} = require("chai");
let {carService} = require("../carService");

describe("Test bla bla bla...", () => {
    describe("isItExpensive", () => {
        it("if issue is Engine",() => {
            let string = "Engine";
            assert.equal(carService.isItExpensive(string), `The issue with the car is more severe and it will cost more money`);
        });
        it("if issue is Transmission",() => {
            let string = "Transmission";
            assert.equal(carService.isItExpensive(string), `The issue with the car is more severe and it will cost more money`);
        });
        it("if issue is uncorrect",() => {
            assert.equal(carService.isItExpensive("hello"), `The overall price will be a bit cheaper`);
        });
    });

    describe("discount", () => {
        it("if input is uncorrect", () => {
            assert.throw(() => carService.discount("Hello", "Hello"), `Invalid input`);
            assert.throw(() => carService.discount("Hello", {}), `Invalid input`);
            assert.throw(() => carService.discount({}, "Hello"), `Invalid input`);
            assert.throw(() => carService.discount(1, "Hello"), `Invalid input`);
            assert.throw(() => carService.discount("Hello", 1), `Invalid input`);
            assert.throw(() => carService.discount("Hello", []), `Invalid input`);
            assert.throw(() => carService.discount([], "Hello"), `Invalid input`);
            assert.throw(() => carService.discount(true, "Hello"), `Invalid input`);
            assert.throw(() => carService.discount("Hello", false), `Invalid input`);
            assert.throw(() => carService.discount([], []), `Invalid input`);
            assert.throw(() => carService.discount([], 1), `Invalid input`);
            assert.throw(() => carService.discount(1, []), `Invalid input`);
            assert.throw(() => carService.discount([], {}), `Invalid input`);
            assert.throw(() => carService.discount({}, []), `Invalid input`);
            assert.throw(() => carService.discount([], true), `Invalid input`);
            assert.throw(() => carService.discount(false, []), `Invalid input`);
            assert.throw(() => carService.discount(true, false), `Invalid input`);
            assert.throw(() => carService.discount(true, 1), `Invalid input`);
            assert.throw(() => carService.discount(1, false), `Invalid input`);
            assert.throw(() => carService.discount({}, {}), `Invalid input`);
            assert.throw(() => carService.discount({}, 1), `Invalid input`);
            assert.throw(() => carService.discount(1, {}), `Invalid input`);
        });
       it("if numberOfParts <= 2", () => {
        assert.equal(carService.discount(0, 1), "You cannot apply a discount");
        assert.equal(carService.discount(1, 1), "You cannot apply a discount");
        assert.equal(carService.discount(2, 1), "You cannot apply a discount")
       });
       it("if numberOfParts > 2", () => {
        assert.equal(carService.discount(3, 10), "Discount applied! You saved 1.5$");
        assert.equal(carService.discount(8, 100), "Discount applied! You saved 30$");
       });
    });

    describe("partsToBuy", () => {
        it("if partsCatalog is empty" , () => {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });
        it("if input is uncorrect", () => {
            assert.throw(() => carService.partsToBuy("Hello", "Hello"), `Invalid input`);
            assert.throw(() => carService.partsToBuy("Hello", {}), `Invalid input`);
            assert.throw(() => carService.partsToBuy({}, "Hello"), `Invalid input`);
            assert.throw(() => carService.partsToBuy(1, "Hello"), `Invalid input`);
            assert.throw(() => carService.partsToBuy("Hello", 1), `Invalid input`);
            assert.throw(() => carService.partsToBuy("Hello", []), `Invalid input`);
            assert.throw(() => carService.partsToBuy([], "Hello"), `Invalid input`);
            assert.throw(() => carService.partsToBuy(true, "Hello"), `Invalid input`);
            assert.throw(() => carService.partsToBuy("Hello", false), `Invalid input`);
            assert.throw(() => carService.partsToBuy(1, 1), `Invalid input`);
            assert.throw(() => carService.partsToBuy([], 1), `Invalid input`);
            assert.throw(() => carService.partsToBuy(1, []), `Invalid input`);
            assert.throw(() => carService.partsToBuy([], {}), `Invalid input`);
            assert.throw(() => carService.partsToBuy({}, []), `Invalid input`);
            assert.throw(() => carService.partsToBuy([], true), `Invalid input`);
            assert.throw(() => carService.partsToBuy(false, []), `Invalid input`);
            assert.throw(() => carService.partsToBuy(true, false), `Invalid input`);
            assert.throw(() => carService.partsToBuy(true, 1), `Invalid input`);
            assert.throw(() => carService.partsToBuy(1, false), `Invalid input`);
            assert.throw(() => carService.partsToBuy({}, {}), `Invalid input`);
            assert.throw(() => carService.partsToBuy({}, 1), `Invalid input`);
            assert.throw(() => carService.partsToBuy(1, {}), `Invalid input`);
        });
        it("if the argument is valid", () => {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"]), 145);
        })
    });
});
