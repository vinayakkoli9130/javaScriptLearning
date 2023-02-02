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


















