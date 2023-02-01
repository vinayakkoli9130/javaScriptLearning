//type conversion-: + operator can do the the type conversion as well from string to number
console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var ad = + numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof ad}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);


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
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();//change number data type to string data type using ".toString()" method
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);

console.log(`-------------------------------------------------------------------------------`);
var num=10;
var str=+"20"
var add=num+str;
console.log(add)
console.log(typeof str);

var num=10;
var str=+"5";
var add=num+str;
console.log(add)
console.log(typeof str);


var boolean=  true / "2";// string not add((+)//with string you can not  perform only(+)
console.log( boolean);
var boo=true+"2"//concating values
console.log(boo);
var boolean= 12 * true;//with number you can perform all operation.
console.log( boolean);
var sub ="10"- true-true;
console.log(sub);

var adds=+"12"-true
console.log(adds);