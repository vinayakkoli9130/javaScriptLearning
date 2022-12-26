var arrayName=["Banana","Orange","Appale","Mango","Water Melon"]
console.log(arrayName);
console.log(`First Element In Array--->${arrayName[0]}`);
console.log(`Last Element In Array--->${arrayName[arrayName.length-1]}`);
var number=arrayName.unshift("Papaya")
console.log(`Adding Element Papaya Before Element Banana--->${arrayName}`);
console.log(`Array Before Removing Mango--->${arrayName}`);
var num=arrayName.splice(4,1)
console.log(`Array After Removing Mango--->${arrayName}`);
var arrayN=arrayName.push("Pineapple")
console.log(`Adding Element "Pineapple" At The Last Position---> ${arrayName}`);
var string=arrayName.splice(4,0,"Dragon Fruit")
console.log(`Add Element "Dragon Fruit" Before "Water Melon"---> ${arrayName}`);
var str=arrayName[2]="Kivi"
console.log(`Replace An Element "Orange" With "Kivi"--->${arrayName}`);
console.log(`Log The Element Starting From Index 1 To 4---> ${arrayName.slice(1,4)}`);
console.log(arrayName);
var length=arrayName.slice(4)
console.log(`Selecting Last Three Elements--->${length}`)
