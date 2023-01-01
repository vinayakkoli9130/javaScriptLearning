console.log(`1)`);
var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy=char.toLocaleLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is -: ${sentence} = ${counter}`);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2)`);
function sumOfCubes(num) {
    var sumNum=0;
    for (let index = 0; index <num; index++) {
     sumNum+=index**3;
    }
    return sumNum;
}
console.log(`${sumOfCubes(5)}`);

function cubeSome(val) {
    let add=0 ;
 let multi=val*val*val 
 console.log(multi); 
//    add=add.concat(multi);
//  console.log(add); 
}
cubeSome(1)
cubeSome(2)
cubeSome(3)
cubeSome(4)
cubeSome(5)
console.log(`==========================================================================================================`);

let str="Everthing Fear In Love And War"
let count=" "
for (let index = 0; index < str.length; index++) {
    let word=str.charAt(index)
    let wordCap=word.toLocaleLowerCase()
  if (wordCap=='a'|| wordCap=='e'|| wordCap=='i'||wordCap=="o"||wordCap=="u") {
    count=count.concat(" ",wordCap);
  }

}
console.log("Total Number Of vowel in Given String",count);
