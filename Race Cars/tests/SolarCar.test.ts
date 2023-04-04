import { SolarCar } from "../src/SolarCar"


describe("SolarCar Tests", () => {
    test("Team property is set from the constructor.", () => {
        const newSolarCar = new SolarCar("Dragons");
        expect(newSolarCar.team).toEqual("Dragons");
    });

    test("Speed property starts at 0.", () => {
        const newSolarCar = new SolarCar("Dragons");
        expect(newSolarCar.speed).toEqual(0);
    });

    test("Calling accelerate() brings speed to 1", () => {
        const newSolarCar = new SolarCar("Dragons");
        newSolarCar.accelerate();
        expect(newSolarCar.speed).toEqual(1);
    });

    test("Calling accelerate() twice brings speed to 2", () => {
        const newSolarCar = new SolarCar("Dragons");
        newSolarCar.accelerate();
        newSolarCar.accelerate();
        expect(newSolarCar.speed).toEqual(2);
    });

    test("Calling isFuelEmpty() returns false.", () => {
        const newSolarCar = new SolarCar("Dragons");
        expect(newSolarCar.isFuelEmpty()).toEqual(false);
    });
});