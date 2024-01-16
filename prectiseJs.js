const val="Jay Shree Ram Of Indian God O"
var cou=0
for(i=0;i<val.length;i++){
const element=val[i]
const lowerCases=element.toLowerCase()
// console.log(element);
if(lowerCases=='a'||lowerCases=="e"||lowerCases=='i'||lowerCases=="o"||lowerCases=="u"||lowerCases=="i"){
  
  console.log(cou=cou+1,element);
}
}
console.log(cou);
console.log("-----------------------------------------------------------------------------------");
var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    } 
    
}
console.log(counter); 
console.log(`------------------------------------------------------------------------------------------------------`);
var string="Life Is Not Complite"
let count=0
for (let index =0; index < string.length; index++) {
    var char=string.charAt(index)
  if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
  char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
    console.log(char);
    count=count+1
  }
    
}
console.log(count);
console.log("------------------------------------------------------------");
str="Life Is All About Next Step"
counter=0
for (let index = 0; index < str.length; index++) {
let i=str.charAt(index)
  if (i =="a" || i =="e" || i =="i" || i =="o" || i =="u" ||i =="A" || i =="E" || i =="I" ||i =="O"|| i =="U") {
    console.log(i);
    counter=counter+1;

  }  
}
console.log(counter);
console.log(`----------------------------------------------------------------------------------------------`);
var sent="What People Things I Don't Care What You Think This Is Matters";
count=0
for (let index = 0; index < sent.length; index++) {
    var strings=sent.charAt(index)
    var stringss=strings.toLocaleLowerCase()
  if (stringss=='a'||stringss=='e'||stringss=='i'||stringss=='o'||stringss=='u') {
    console.log(stringss);
    count=count+1;
  }   
}
console.log(count);
console.log(`-----------------------------To count character 'a' or 'A'---------------------------------`);
count=0
function countCharA(string) {

for (let index = 0; index < string.length; index++) {
  var totalChar=string.charAt(index)
  var dom=totalChar.toLocaleLowerCase()
  if (dom=="a") {
    console.log(dom);
count=count+1
  }
}
  
}
console.log(count);
console.log();
countCharA("I Am Learning JavaScript,The Language Of internet")
countCharA("My Favourite movie is LAggAn")
console.log(`----------------------------------------------------------------------------------`);

var str="I Am Very Good IT Developer";
let num=0
for (let index = 0; index < str.length; index++) {

  let string=str.charAt(index).toLocaleLowerCase()
  if (string=="a" || string=="e" || string=="i" || string=="o" || string=="u" ) {
    console.log(string);
    num=num+1
  }

}
console.log(num);
console.log(`----------------------------------------------------------------------------------`);
count=0
function sumOfCube(val) {
 let value= val
count=count+value
console.log(count);
}

sumOfCube(1*1*1)
sumOfCube(2*2*2)
sumOfCube(3*3*3)
sumOfCube(4*4*4)
sumOfCube(5*5*5)
console.log(`------------------------------------------------------------------------`);

console.log("-------------------Even index Character Of Given String-----------------");

var sente="Just one small positive thought in the morning can change your whole day."
for (let index = 0; index < sente.length; index++) {
  const element = sente[index];
  if (index%2==0) {
    console.log(index,element);
  }
  
}
console.log("----------------------------------------------------------------------");





function oddPositionChars(val) {
  for (let index = 0; index < val.length; index++) {
    let vals=" "
    var char=val.charAt(index)
    let character=char.split("|")
    if (index%2==1) {
      console.log(vals=vals+character);
    }
    
  }
}
oddPositionChars("Hard Work Always Pays Back")
oddPositionChars("Soon I will be Angular IT Champ")
console.log(`------------------------------------------------------------------------`);
console.log("----------------iterate array---------------");
var arrays=[2,4,1,9,6,7,3,5]

for(let element of arrays){
  console.log(element);
}  


console.log("-----------------------------------------------------------------------------------------------");
for (const key in arrays) {
  if (Object.hasOwnProperty.call(arrays, key)) {
    const element = arrays[key];
    console.log(element);
  }
  
}

console.log(`------------------------------------------------------------------------`);
// for (let index = 1; index < 100; index++) {
//  if (arrays.indexOf(index)==-1) {
//   console.log(index);
//  }
  
// }
console.log(`------------------------------------------------------------------------`);
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log('---------------------------------------------------------------------------');

console.log("----------------------palindrome Example-------------------------");
var wordss="404"
//  words=wordss.toLowerCase().join('')
if(wordss==wordss.split('').reverse().join('')){
  console.log("true");
}else{
  console.log("false");
}

let number=604
if(number==number.toString().split("").reverse().join("")){
  console.log(number ,"is palindrome-:","true");

}else{
  console.log(number ,"is palindrome-:","false");
}
console.log("------------------------------------------------------------------------------------------");

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
console.log(isPalindrome("nayan"));
console.log('--------------------------------------------------------------------------');

// var word="Nayan"
// var reverce=word.toLocaleLowerCase().split('').reverse().join('')
function palindrome(string) {
  string=string.toLocaleLowerCase()
  // console.log(result);
  if (string==string.split('').reverse().join('')) {
    console.log('true');
  }else{
    console.log('false');
  }
}
palindrome("Nayan")
palindrome('jayas')
console.log('-----------------------------------------------------------------------');
// function string(val) {
//   for (let index = 0; index < val.length; index++) {
// var vovels=val.charAt(index).toLocaleLowerCase()
//     if (vovels=='a'||vovels=='e'||vovels=='i'||vovels=='o'||vovels=='u') {
//      console.log(vovels); 
//     }

//   }
// }
// string('jay shree ram')

sen="jay shree ram"
co=0
for (let index = 0; index < sen.length; index++) {
  
  var vovels=sen.charAt(index).toLocaleLowerCase()
      if (vovels=='a'||vovels=='e'||vovels=='i'||vovels=='o'||vovels=='u') {
        console.log(vovels);
co=co+1

      }
  
    }
    console.log(co);
console.log('===============================================================================');
console.log('----------------Even Number Index Characters----------------');
var word='JAY JAWAN JAY JISAN'
for (let index = 0; index < word.length; index++) {
  if (index%2==0) {
    console.log(word.charAt(index));
  }
  
}
console.log('----------Odd Number Index Characters----------------');
var word='JAY JAWAN JAY JISAN'
for (let index = 0; index < word.length; index++) {
  if (index%2==1) {
    console.log(word.charAt(index));
  }
  
}
console.log('--------Characters Index----------------');
words=''

if (word%2==0) {
console.log(word);
}
 console.log("------------------------------------------------------------------------------"); 
var cost =123.456
console.log(cost.toFixed(2));

console.log("-------------------------------------------------------------------------------------");

console.log("----------------1 to 100-----------------");
var valuess=[47,88,7,34,65,78,22,17,97]
var countss=100
var nums=[]
for (let index = 0; index <countss; index++) {
 
  if (valuess.indexOf(index)==-1) {
    console.log("missing numbers-:",index);
nums.push(index)
  }
  
}
console.log(nums);





console.log('-------------:Missing Value 1 To 100:----------------');
const values=[32,56,12,76,4,46,91,23,33,87]
var missingValue=new Array()
for (let index = 1; index <=100; index++) {
  // const element = array[index];
  if (values.indexOf(index)==-1) {
    missingValue.push(index)
  }
  
}
console.log(missingValue);

console.log('-------------:Find  Out Even And Odd Number :----------------');

for (let index = 0; index < values.length; index++) {
  const element = values[index];
  if (element%2==0) {
  
    console.log("Even Number In Array-:",element);
  }
  
}
for (let index = 0; index < values.length; index++) {
  const element = values[index];
  if (element%2==1) {
    console.log("Odd Number In Array-:",element);
  }
}
console.log('-------------:Find  Out Even  Index Element :----------------');
var counters=0
for (let index = 0; index < values.length; index++) {
  const element = values[index];
  if (index%2==0) {
    
console.log(`${counters=counters} Even Index Element Is-: ${element}`);

  }
}
console.log('-------------:Find  Out  Odd Index Element :----------------');
for (let index = 0; index < values.length; index++) {
  const element = values[index];
  if (index%2==1) {
    console.log(element);
  }
  
}
console.log('-------------:Addition Of All Element Of Array :----------------');
var addAllElement=values.reduce((a,b)=>a+b)
console.log(addAllElement);

console.log('-------------:Add Only Greater Than 20 Element Of Array In New Array :----------------');
var largerValue=values.filter((price)=>price>20)
console.log(largerValue);
console.log('-------------:Sort Array In Ascending Order :----------------');

var ascending=values.sort((a,b)=>a-b)
console.log(ascending);
console.log('-------------:Sort Array In Descending Order :----------------');
var descending=values.sort((a,b)=>b-a)
console.log(descending);






