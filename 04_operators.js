//Arithmatic Operator-:Addition(+),Substraction(-),Multiplication(*),Division(/),Module(%)
//Unary Operators-:Increament Operator(++),Decreament Operator(--).Increment or Decrement one value
//Assignment Operators-:Module(%),Compound Addition(+=),Compound Substraction(-=)
//Comparison Operators-:grater than(>),less than(<),greater than equal to(>=),less than equal to(<=)
//Logical Operator-:and(&&),or(||)
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

 var num4 = 5;
 var res = --num4; //num4 -1;//(--)Value Can Decrement By 1.
 console.log(`Decrement operator result is ${res}`);
 console.log(`============ Assignment Operators =================`);
 var modulusResult = num1 % 3;
 console.log(`Modulus is ${modulusResult}`);

// var num1 = 10;
// var num2 = 5;
//  num1 += num2; // num1 = num1 + num2
//               // num1 = 15;
 console.log(`Compound Addition ${num1+=num2}`);//Addition Of num1 and num2 using(+=)operator

// var num1 = 10;
// var num2 = 5;
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

 console.log(`Check even or ODD: ${11%2}`);







