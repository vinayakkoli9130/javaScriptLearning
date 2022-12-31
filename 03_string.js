var firstName = "ppppppppppppppppppppppppphhhhhhkklkkhfffDinesh";
console.log("Given string is ", firstName);

console.log("Total character in the string is: ", firstName.length);

console.log("Char at index 3: ", firstName.charAt(3));

var lengthTotal = firstName.length;

console.log("Char at last index : ", firstName.charAt(lengthTotal-1));
console.log("========================================================================================================")
var collegeName=function(val){
    console.log("Given String-:",val);
    console.log("Total number string-:",val.length);
    console.log("6th possition of string",val.charAt(6));
    console.log("11th possition of string",val.charAt(11));
    console.log("0th possition of string",val.charAt(0));
    // var  lengthTotal = val.length;
    console.log("last possition of string",val.charAt(val.length-1));
}
collegeName("Sangola College,Sangola");

console.log("======== concat() ==========");
var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);

// var greet = "Good Morning";
// var indexof = greet.indexOf("M");
// console.log("Index of character M: ", indexo);



var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);
console.log("slice with negative start index: ", greet.slice(-7));
console.log("slice with negative start and end index: ", greet.slice(-7, -2));



var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);


var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log("Total words in sentence string is: ", wordsInSentence.length);


console.log("======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);


var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName );

console.log(`First name is: ${firstName} and last name is ${lastName}`);


    console.log("3) Character at index 11 is", string.charAt(11));
    
    var totallenght=string.length;
    console.log("4) Last character is", string.charAt(totallenght-1));
    console.log("5) First character is", string.charAt(0));
    console.log("6) Total length of string =", string.length);
    console.log("7) square of length of string =", string.length*string.length);


