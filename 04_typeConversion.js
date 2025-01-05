//type conversion-: + operator can do the the type conversion as well from string to number
// console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var ad = + numStr;//convert string into number

console.log(`typeof numStr is: ${typeof numStr}`);//string
console.log(`typeof num is: ${typeof ad}`);//number

let nummber=+"100"
console.log(typeof nummber);//number
var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);//string
console.log(`typeof ${num} is: ${typeof num}`);//number


var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70;//Pooja70
console.log(`strAdd is: ${strAdd}`);

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr; // Explicit conversion
console.log(`typeof numStr is: ${typeof numStr}`);//string
console.log(`typeof num is: ${typeof num}`);//number

var numStr = "Chandra";//string type
var num = + numStr;//converting in number type
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`== comparison ${20 == "20"}`); // Implicit conversion//only check value not check data type of value.

var myNumber = -77.333;//data type is number  
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);//-77.333 number
var strMyNumber = myNumber.toString();//change number data type to string data type using ".toString()" method
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);//string

console.log(`-------------------------------------------------------------------------------`);
var num=10;
var str=+"20"
var add=num+str;
console.log(add)//30
console.log(typeof str);//number

var num=10;
var str=+"5";
var add=num+str;
console.log(add)//15
console.log(typeof str);//number


var boolean=  true / "2";// string not add((+)//with string you can not  perform only(+)
console.log( boolean);//0.5
var boo=true+"2"//concating values
console.log(boo);//true2
var boolean= 12 * true;//with number you can perform all operation.
console.log( boolean);//12
var sub ="10"- true-true;
console.log(sub);//8

var adds=+"12"-true
console.log(adds);//11
console.log("---------------------------------------------------------------------------------------------");

console.log("12"-2+"2");//12-2=10,10+"2"=102
console.log(2+"12"-2);//2+"12"=212,212-2=210
console.log(2+2-"12");//2+2=4,4-"12"=-8