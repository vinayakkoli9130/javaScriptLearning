console.log(`1)`);
var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy=char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        counter = counter +1;
        console.log(charCopy);
    }   
}
console.log(`Total vowels in string is -: ${sentence} = ${counter}`);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2)`);
// function sumOfCubes(num) {
//     var sumNum=0;
//     for (let index = 0; index <num; index++) {
//      sumNum+=index**3;
//     }
//     return sumNum;
// }
// console.log(`${sumOfCubes(5)}`);

function cubeSome(val) {
   
 var multi=val*val*val 
 return multi;

}
console.log(`5 Cube Is-: ${cubeSome(5)}`);
console.log(`4 Cube Is-: ${cubeSome(4)}`);
console.log(`7 Cube Is-: ${cubeSome(7)}`);


console.log(`==========================================================================================================`);

let str="Everthing Fear In Love And War"
console.log(str);
let count=" "
for (let index = 0; index < str.length; index++) {
    let word=str.charAt(index)
    let wordCap=word.toLowerCase()
  if (wordCap=='a'|| wordCap=='e'|| wordCap=='i'||wordCap=="o"||wordCap=="u") {
    count=count.concat(" ",wordCap);
  }

}
console.log("Total Number Of vowel in Given String",count);

var sentence ="Jaat Ki Kuata kaika"
var counters=0
for (let index = 0; index < sentence.length; index++) {
 var char=sentence.charAt(index)
 let lower=char.toLocaleLowerCase()
 if (lower=='a' ||lower=='e' ||lower=='i' ||lower=='o' ||lower=='u' ) {
  console.log(lower);
  counters=counters+1
 }
 console.log(counters);
  
}
console.log("--------------++++++-------------------------+++++-------------------------");

let sent="I Am Not Good I Am Not Bad"
//Find Out Vowels From The String
console.log(sent);
for(let index=0;index<=sent.length;index++){
 let element= sent.charAt(index)
 console.log("Element Of String-:",element);
 let lowerCases=element.toLowerCase()
 if(lowerCases=="a"||lowerCases=="e"||lowerCases=="i"||lowerCases=="o"||lowerCases=="u"){

 }
 console.log(lowerCases);
}