import { GasCar } from "../src/GasCar";


describe("GasCar Tests", () => {
    test("Team property is set from the constructor", () => {
        const newSolarCar = new GasCar("Dragons", 20);
        expect(newSolarCar.team).toEqual("Dragons");
    });

    test("Fuel property is set from the constructor", () => {
        const newSolarCar = new GasCar("Dragons", 20);
        expect(newSolarCar.fuel).toEqual(20);
    });

    test("Fuel property defaults to 10 when omitted.", () => {
        const newSolarCar = new GasCar("Dragons");
        expect(newSolarCar.fuel).toEqual(10);
    });

    test("Speed Property starts at 0.", () => {
        const newSolarCar = new GasCar("Dragons");
        expect(newSolarCar.speed).toEqual(0);
    });

    test("Calling accelerate() once brings speed to 2.", () => {
        const newSolarCar = new GasCar("Dragons");
        newSolarCar.accelerate();
        expect(newSolarCar.speed).toEqual(2);
    });

    test("Calling accelerate() twice brings speed to 4.", () => {
        const newSolarCar = new GasCar("Dragons");
        newSolarCar.accelerate();
        newSolarCar.accelerate();
        expect(newSolarCar.speed).toEqual(4);
    });

    test("Calling accelerate() once reduces fuel by 1.", () => {
        const newSolarCar = new GasCar("Dragons");
        newSolarCar.accelerate();
        expect(newSolarCar.fuel).toEqual(9);
    });

    test("Calling accelerate() twice reduces fuel by 2.", () => {
        const newSolarCar = new GasCar("Dragons");
        newSolarCar.accelerate();
        newSolarCar.accelerate();
        expect(newSolarCar.fuel).toEqual(8);
    });

    test("Calling isFuelEmpty() returns true when fuel is 0.", () => {
        const newSolarCar = new GasCar("Dragons",0);
        expect(newSolarCar.isFuelEmpty()).toEqual(true);
    });

    test("Calling isFuelEmpty() returns false when fuel is greater than 0.", () => {
        const newSolarCar = new GasCar("Dragons",1);
        expect(newSolarCar.isFuelEmpty()).toEqual(false);
    });
});