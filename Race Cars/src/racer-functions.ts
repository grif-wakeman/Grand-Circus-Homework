import { Racer } from "./Racer";


export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    return racers.filter(racer => racer.isFuelEmpty() === true);
}

export function findAverageSpeed(racers: Racer[]):number {
    let totalSpeed = 0;

    if(racers.length === 0) {
        return 0;
    }

    for (let racer of racers) {
        totalSpeed += racer.speed;
    }
    return totalSpeed / racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer):Racer | null {
    if(racerA.speed > racerB.speed) {
        return racerA;
    } else if (racerB.speed > racerA.speed) {
        return racerB;
    } else {
        return null;
    }
}