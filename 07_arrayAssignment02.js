const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Araay--->${arrayNumbers}`);
console.log(`1)Total Element Available In Array--->${arrayNumbers.length}`);
console.log(`=========================================================================`);
console.log(`2)First Element Available In Array--->${arrayNumbers[0]},Last Element Available In Array--->${arrayNumbers[arrayNumbers.length-1]}  `);
console.log(`=========================================================================`);
let thirdLast = arrayNumbers[arrayNumbers.length-3];
console.log(`3) Thirst Last Element Available In Array--->${thirdLast}`);
console.log(`=========================================================================`);
let evenNum=[];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element%2==0) {
    evenNum=evenNum.concat(element)
  }
}
console.log(`4)Even Number In Given Array-->${evenNum}`);
console.log(`=========================================================================`);
 oddNum=[]
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element%2==1) {
    oddNum=oddNum.concat(element)
  }
}
console.log(`5)Odd Number In Given Array-->${oddNum}`);
console.log(`=========================================================================`);
let evenPo=[]
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index%2==0) {
    evenPo=evenPo.concat(arrayNumbers[index])
  }
}
console.log(`6)All Even Index Possitioned Number Are--->${evenPo} `);
console.log(`=========================================================================`);
oddPo=[]
for (let index = 0; index < arrayNumbers.length; index++) {
if (index%2==1) {
  oddPo=oddPo.concat(arrayNumbers[index])
}
  
}
console.log(`7)All Odd Index Possitioned Number Are--->${oddPo} `);
console.log(`=========================================================================`);
let sumOfNum=0
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfNum=sumOfNum+element;
}
console.log(`8) Sum Of All Elements From Given Array--->${sumOfNum}`);
console.log(`=========================================================================`);
let multi=[]
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element%5==0) {
    multi=multi.concat(element)
  }
}
console.log(`9)Find The Number Which Are Multiple Of 5--->${multi}`);
console.log(`=========================================================================`);
console.log(`10) 115 Number Is Available In Given Array--->${arrayNumbers.includes(115)}`);
console.log(`=========================================================================`);
console.log(`11) 23 Number Is Available In Given Array--->${arrayNumbers.includes(23)}`);
console.log(`=========================================================================`);
arrayNumbers.splice(3,0,55,66)
console.log("12) Inserting Numbers Before Index 3--->",arrayNumbers);
console.log(`=========================================================================`);
arrayNumbers.splice(4,3)
console.log("13)Delete 3 Element Starting From Index 4",arrayNumbers);