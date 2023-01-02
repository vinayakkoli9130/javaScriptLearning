const car={
    carName:"Creata SX",
    compony:"Hundai",
    launchYear:2017
}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113 BHP"

}
console.log(`----------Given Objects------`);
console.log(`Car--->`,car);
console.log(`Car Engine--->`,carEngine);
console.log(`Merging Car And Car Engine Object Using "assign()"`);
let carInfo=Object.assign(car,carEngine)
console.log("Car Information--->",carInfo);
console.log(`Merging Car And Car Engine Object Using "spread Operator"`);
let spread={...car,...carEngine}
console.log(spread);

