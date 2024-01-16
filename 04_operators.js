//Operator-:An operator is special symbol used to perform operation on operands that is values and variable.
//unary operator-:perform operation with only one operand
//binary operator-:rule for combining two element to produce another element.
//ternary/conditional operator-:an operator takes three operands(arguments)

//Arithmatic Operator-:Addition(+),Substraction(-),Multiplication(*),Division(/),Module(%)
//Unary Operators-:Increament Operator(++),Decreament Operator(--).Increment or Decrement one value
//Assignment Operators-:Assignment(=),compound Module(%=),Compound Addition(+=),Compound Substraction(-=),Compound Multipliaction(-=),Compound Division(/=)
//Comparison Operators-:grater than(>),less than(<),greater than equal to(>=),less than equal to(<=)
//Logical Operator-:AND(&&),or(||),NOT(!)
console.log(`============ Arithmetic Operators =================`);
var num1=10;
var num2=5;
var addResult = num1 + num2;
console.log(`num1=${num1}   num2=${num2}`);
console.log(`Addition is ${addResult} `);

 console.log(`Subtraction is ${num1-num2}`);
// var mulResult  = num1 * num2;
console.log(`Multiplication is ${num1 * num2}`);
 
// var divResult = num1 / num2;
console.log(`Division is ${num1 / num2}`);

// var modulusResult = num1 % num2;
 console.log(`Modulus is ${num1 % num2}`);

// var modulusResult = num1 % 4;
 console.log(`Modulus is ${num1 % 4}`);
 console.log(`============ Unary Operators =================`);
 var num3 = 10;
 var result = ++num3; // num3 = num3 + 1;//(++)Value Can Increment By 1.
 console.log(`Increment operator  result is ${result}`);
var num6= 12;
num5=num6++;//not increament after the value ++ operator;
console.log(num5);
 var num4 = 5;
 var res = --num4; //num4 -1;//(--)Value Can Decrement By 1.
 console.log(`Decrement operator result is ${res}`);
 console.log(`============ Assignment Operators =================`);
 var modulusResult = num1 % 3;
 console.log(`Modulus is ${modulusResult}`);

// var num1 = 10;
// var num2 = 5;
//  num1 += num2; // num1 = num1 + num2
//               // num1 = 15;  //Compound Addition
 console.log(`Compound Addition ${num1+=num2}`);//Addition Of num1 and num2 using(+=)operator

// var num1 = 10;
// var num2 = 5;                  //Compound Substraction.
 console.log(`Compound Subtraction ${num1-=num2}`); // num1 = 15 - 5//subtraction Of num1 and num2 using(-=)

 console.log(`============ Comparison Operators =================`);
// var num1 = 10;
// var num2 = 5;
// var num3 = 10
// var result = num1 > num2;
 console.log(`> Operator - Greater than ${num1>num2}`)
// console.log(`> Operator - Greater than ${num1>num3}`)

// var result = num1 < num2;
 console.log(`< Operator - Less than ${num1<num2}`)

// var result = num1 >= num3;
 console.log(`>= Operator - Greater than equal ==> ${num1>=num2}`)

// var result = num1 <= num3;
 console.log(`<= Operator - Less than equal ==> ${num1<=num2}`);

 console.log(`Check even or ODD-: ${11%2?"odd":"Even"}`);







