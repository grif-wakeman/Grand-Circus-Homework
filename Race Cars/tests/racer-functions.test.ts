import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "../src/racer-functions";
import { Racer } from "../src/Racer";
import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";

describe("Find Racers with empty fuel.", () => {
    test("Returns only the GasCars who are out of fuel.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons", 3);
        const gasCar2 = new GasCar("Spiders", 0);
        const gasCar3 = new GasCar("Spiders", 2);
        const gasCar4 = new GasCar("Dragons", -1);

        arrayOfRacers.push(gasCar1, gasCar2, gasCar3, gasCar4);
        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([gasCar2, gasCar4]);
    });

    test("Returns all the GasCars if they are all out of fuel.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons", 0);
        const gasCar2 = new GasCar("Spiders", 0);
        const gasCar3 = new GasCar("Spiders", 0);
        const gasCar4 = new GasCar("Dragons", -1);

        arrayOfRacers.push(gasCar1, gasCar2, gasCar3, gasCar4);
        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([gasCar1,gasCar2, gasCar3, gasCar4]);
    });

    test("Returns empty array if all GasCars have fuel.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons", 1);
        const gasCar2 = new GasCar("Spiders", 2);
        const gasCar3 = new GasCar("Spiders", 3);
        const gasCar4 = new GasCar("Dragons", 4);

        arrayOfRacers.push(gasCar1, gasCar2, gasCar3, gasCar4);
        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([]);
    });

    test("Returns empty array since SolarCars don't use fuel.", () => {
        const arrayOfRacers: Racer[] = [];
        const solarCar1 = new SolarCar("Dragons");
        const solarCar2 = new SolarCar("Spiders");
        const solarCar3 = new SolarCar("Spiders");
        const solarCar4 = new SolarCar("Dragons");

        arrayOfRacers.push(solarCar1, solarCar2, solarCar3, solarCar4);
        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([]);
    });
    test("Returns only the racers out of fuel with a mix of SolarCars and GasCars.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons", 3);
        const gasCar2 = new GasCar("Spiders", 0);
        const gasCar3 = new GasCar("Spiders", 2);
        const gasCar4 = new GasCar("Dragons", -1);
        const solarCar1 = new SolarCar("Dragons");
        const solarCar2 = new SolarCar("Spiders");
        const solarCar3 = new SolarCar("Spiders");
        const solarCar4 = new SolarCar("Dragons");

        arrayOfRacers.push(gasCar1, solarCar1, gasCar2, solarCar2, gasCar3, solarCar3, gasCar4, solarCar4);
        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([gasCar2, gasCar4]);
    });

    test("Returns empty array if passed an empty array.", () => {
        const arrayOfRacers: Racer[] = [];

        expect(findRacersWithEmptyFuel(arrayOfRacers)).toEqual([]);
    });
});

describe("Find average speed tests.", () => {
    test("Find average speed of GasCars with different speeds.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons");
        gasCar1.accelerate();
        const gasCar2 = new GasCar("Spiders");
        gasCar2.accelerate();
        gasCar2.accelerate();
        const gasCar3 = new GasCar("Spiders");
        gasCar3.accelerate();
        gasCar3.accelerate();
        gasCar3.accelerate();
        const gasCar4 = new GasCar("Dragons");
        gasCar4.accelerate();
        gasCar4.accelerate();
        gasCar4.accelerate();
        gasCar4.accelerate();

        arrayOfRacers.push(gasCar1, gasCar2, gasCar3, gasCar4);

        expect(findAverageSpeed(arrayOfRacers)).toEqual(5);
    });

    test("Find average speed of SolarCars and GasCars with different speeds.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons");
        gasCar1.accelerate();
        const solarCar1 = new SolarCar("Spiders");
        solarCar1.accelerate();
        const gasCar3 = new GasCar("Spiders");
        gasCar3.accelerate();
        gasCar3.accelerate();
        gasCar3.accelerate();
        const solarCar2 = new SolarCar("Dragons");
        solarCar2.accelerate();
        solarCar2.accelerate();
        solarCar2.accelerate();
        

        arrayOfRacers.push(gasCar1, solarCar1, gasCar3, solarCar2);

        expect(findAverageSpeed(arrayOfRacers)).toEqual(3);
    });

    test("Racers that all have 0 speed returns 0.", () => {
        const arrayOfRacers: Racer[] = [];
        const gasCar1 = new GasCar("Dragons");
        const solarCar1 = new SolarCar("Spiders");
        const gasCar3 = new GasCar("Spiders");
        const solarCar2 = new SolarCar("Dragons");
        

        arrayOfRacers.push(gasCar1, solarCar1, gasCar3, solarCar2);

        expect(findAverageSpeed(arrayOfRacers)).toEqual(0);
    });

    test("Passing an empty array returns 0.", () => {
        const arrayOfRacers: Racer[] = [];

        expect(findAverageSpeed(arrayOfRacers)).toEqual(0);
    });
});

describe("Get faster racer tests.", () => {
    test("Return racerA if speed is faster than racerB", () => {
        const racerA = new GasCar("Dragons");
        racerA.accelerate();
        racerA.accelerate();
        const racerB = new GasCar("Spiders");
        racerB.accelerate();

        expect(getFasterRacer(racerA, racerB)).toEqual(racerA);
    });

    test("Return racerB if speed is faster than racerA", () => {
        const racerA = new GasCar("Dragons");
        racerA.accelerate();
        const racerB = new GasCar("Spiders");
        racerB.accelerate();
        racerB.accelerate();

        expect(getFasterRacer(racerA, racerB)).toEqual(racerB);
    });

    test("Return null if racerA and racerB are going the same speed.", () => {
        const racerA = new GasCar("Dragons");
        racerA.accelerate();
        const racerB = new GasCar("Spiders");
        racerB.accelerate();

        expect(getFasterRacer(racerA, racerB)).toEqual(null);
    });

    test("Return racerB (SolarCar) if speed is faster than racerA (GasCar)", () => {
        const racerA = new GasCar("Dragons");
        racerA.accelerate();
        const racerB = new SolarCar("Spiders");
        racerB.accelerate();
        racerB.accelerate();
        racerB.accelerate();

        expect(getFasterRacer(racerA, racerB)).toEqual(racerB);
    });
});
