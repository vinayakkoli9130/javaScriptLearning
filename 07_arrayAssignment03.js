const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array Is--->${arrayNumbers}`);
console.log();

console.log(`1) Total Elements Or Length Of Given Array`);
let totalLength = arrayNumbers.length;
console.log(totalLength);
// console.log(``);

console.log(`2) First And Last Element In Given Array`);
console.log(`First Element Is---> ${arrayNumbers[0]}`);
console.log(`Last Element Is---> ${arrayNumbers[totalLength - 1]}`);
// console.log(``);

console.log(`3) Third Last Element In Given Array`);
let thirdLast = arrayNumbers[totalLength - 3];
console.log(thirdLast);
// console.log(``);

console.log(`4) All Even Numbers In Given Array`);
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(evenNumArray);
// console.log(``);

console.log(`5) Odd Numbers In Given Array`);
let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(oddNumArray);
// console.log(``);

console.log(`6) Even Positioned Elements`)
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(pos);
// console.log(``);

console.log(`7) Odd Positioned Elements`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(pos);
// console.log(``);

console.log(`8) Sum Of Elements Of Given Array`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(sumOfElements);
// console.log(``);

console.log(`9) Numbers Which Are Multiples Of 5`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(multiple);
// console.log(``);

console.log(`10) Is Number 115 Available In Given Array`);
let numAvailable = arrayNumbers.includes(115);
console.log(numAvailable);
// console.log(``);

console.log(`11) Is Number 23 Available In Given Array`);
let isAvailable = arrayNumbers.includes(23);
console.log(isAvailable);
// console.log(``);

console.log(`12) Inserting 55, 66 Before Index 3`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
// console.log(``);


console.log(`13) Deleting 3 Elements Starting From Index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);