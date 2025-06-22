//String-string is sequence charcter.
//Index-:index is position of element and index always start with 0
//split meanse adding or removing some character.
//concatenation Of String using concat() and + operator. 
var firstName = "ppppppppppppppppppppppppphhhhhhkklkkhfffDinesh";
console.log("Given string is ", firstName);

console.log("Total character in the string is: ", firstName.length);//length of string


console.log("Char at index 3: ", firstName.charAt(3));//character of index 3


var lengthTotal = firstName.length;


console.log("Char at last index : ", firstName.charAt(lengthTotal-1));//last character of string.
console.log("========================================================================================================")
var collegeName=function(val){
    console.log("Given String-:",val);
    console.log("Total number string-:",val.length);//length of string
    console.log("6th possition of string",val.charAt(6));//character of index 6
    console.log("11th possition of string",val.charAt(11));//character of index 11
    console.log("0th possition of string",val.charAt(0));//character of index 0
    // var  lengthTotal = val.length;
    console.log("last possition of string",val.charAt(val.length-1));//last possition of string
}
collegeName("Sangola College,Sangola");

console.log("======== concat() ==========");//concatenation Of String using concat() and + operator. 
var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
//concatenation using concat() method.
var result = firstName.concat(" Ravesh " ,lastName);//concatenation using concat() method.
console.log("Concatenation using concat(): ", result);

console.log(`========================================================================================================`);
 var greet = "Good Morning";
 var indexof = greet.indexOf("M");//find the index of element "M" In Given String.
 console.log("Index of character M: ", indexof);
var indexOfNin = greet.indexOf("nin");//index of given substring they can show only starting first char index
console.log("Index of substring nin: ", indexOfNin);
console.log("slice with negative start index: ", greet.slice(-7));//slice meanse bite of strings
console.log("slice with negative start and end index: ", greet.slice(-7, -2));
console.log(`===============================================================================================`);
var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");//sepreate words add create new array.//split meanse adding or removing some character
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);
console.log(`=================================================================================================`);
var sentence = "Yes you can do it guys, just keep learning and practising as well";
//Split a string into substrings using the specified separator and return them as an array.
var wordsInSentence =  sentence.split(" ");//Collect The Total Number Of spaces in a string.

console.log(wordsInSentence);
console.log("Total words in sentence string is: ", wordsInSentence.length);//
console.log(`==================================================================================================`);

console.log("======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);//string template-:string template means you can write Message in backtik(` `) 
                                            //variable can define using Dollor sign($) curly braces({variable_name })
console.log(`======================================================================================================`);
var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName );

console.log(`First name is: ${firstName} and last name is ${lastName}`);

         //String Is collection Character,it is denoted by "",'',``.
         console.log(`========================All String Method==========================================`);
         let bite="Happy New Year Family"
         console.log(bite);
         console.log(`Total Number Of Length of string-:${bite.length}`);//Total Length Of String.
         let word=bite.split(" ")//collect the total number of spaces.
         let totalLength=bite.length-word.length
         console.log(`After Remove Spaces of String length-:${totalLength}`);
         console.log(`Total Number Of Words--:${word.length}`);
         console.log(`last Character In String--:${bite.charAt(bite.length-1)}`);
         console.log(`last 3rd Character In String--:${bite.charAt(bite.length-3)}`);
         console.log(`character at 0th index--:${bite.charAt(0)}`);
         console.log(`index of e character -:${bite.indexOf("e")}`);
         console.log(`Index Of a character-:${bite.indexOf("a")}`);
         console.log(`${bite.slice(3,8)}`);
         console.log(`${bite.endsWith("x")}`);//endWith()Method Is Used To Given String Is end with given character.
         console.log(`${bite.startsWith("H")}`);//startWith()Method Is Used To Given String Is start with given character.
         console.log(`${bite.includes("z")}`);//include() Method Is Used To Given Character Is Available Or Not In String
         console.log(`${bite.replace("a","z")}`);//replace() Method Is Used To change or replace charcter
         console.log(`${bite.toLowerCase("H")}`);//toLowerCase()Method Is Used To Given Character Is small case or Upper case
         
    
var name="Vinayak"
var frdName="Arman"
let conc=name+" "+frdName
console.log(conc);
console.log(name.concat(" ","Ganesh"," ",frdName));

var string="Jay Shree Ram"
console.log(string.split(" ").length);
let str1="Hello"
console.log(str1.slice(1,4));

