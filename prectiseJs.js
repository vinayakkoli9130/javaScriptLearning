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
countCharA("I An Learning JavaScript,The Language Of internet")
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




















