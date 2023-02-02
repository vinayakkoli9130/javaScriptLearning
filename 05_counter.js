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
console.log(`Total vowels in string is : ${counter}`);



// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        console.log(char);
        counter= counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);


var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
//  var lastCharPosition = sentence.length-1;
for (let index = sentence.length; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString)



var sentence = "I Am Angular Developer";
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
console.log(`Total vowels in string is :${sentence} ${counter}`);


var sentence = "Life Is Not Race,It's journy You Only Enjoy Journy";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString)

var words="Life Is Not Complete"
var reverse=" ";
var wordString=words.length;
for (let index = wordString; index > 0; index--) {
   var char=words.charAt(index);
   reverse=reverse.concat(char)
}
console.log(reverse);



var string="Life Is Not Complite"
for (let index =string; index < string.length; index++) {
    var char=charAt(index)
  if (char("a")||char("e")||char("i")||char("o")||char("u")) {
    console.log(char);
  }
    
}


console.log('---------reverce string------------------');
var string="I Am Not Bad But ,Some suitution I Look Like Bad Person"
var t=string.length-1
var charcater= " "
for (let index = t; index >=0; index--) {
var char=string.charAt(index)

charcater=charcater.concat(char)
}
console.log(charcater);

var string="Nothing Is Imposible";
// var str=string.length-1;
var rever=" "
for (let index = string.length; index >= 0; index--) {
    var re= string.charAt(index)
rever=rever.concat(re)  
}
console.log(rever);
console.log(`=======================================================================================`);
var string="Don't Thing About Kal,Enjoy Your Every Pal";
counter=0
for (let index = 0; index < string.length; index++) {
 var char=string.charAt(index)
 var str=char.toLocaleLowerCase()
 if (str=="a"||str=="e"||str=="i"||str=="o"||str=="u") {
    console.log(str);
    counter=counter+1;

 }
}
console.log(counter);


var string="Nothing Is Imposible";
// var str=string.length-1;
var rever=" "
for (let index = string.length; index >= 0; index--) {
    var re= string.charAt(index)
rever=rever.concat(re)  
}
console.log(rever);

var string="Don't Thing About Kal,Enjoy Your Every Pal";
var reverce=" "
for (let index = string.length; index >=0; index--) {
  reverce=reverce.concat(string.charAt(index))
}
console.log(reverce);











