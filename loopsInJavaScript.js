//Loops-:Loops Used In Javascript To Perform Repeated Task Based On Condition.
//Conditions Typically return True Or False.
//A Loop Continue Runs Until Defined Condition Return False.

//1)for loop-:for Loops Through The Block Of Code A Number Of Times.
//for loop used to perform repeated task of known number of time.
//syntax-:for(Exp1;Exp2;Exp3){
//code for exicuted
//}
//Example-:1
console.log("-----------Example Of for loop--------------");
for(let i =0;i<=5;i++){
    console.log(i);
}
console.log("-------------------------------------------------------------------");
//for in loop-:for in loop through the iterate over properties Of Object;
//syntax-:for(key in object){//code block exicuted}
//Example-:
console.log("----------------Example Of for in loop-------------------")
const person={
    name:"vinny",
    lname:"koli",
    age:"23"
}
for( let key in person){
    console.log(key,person[key]);
}
console.log("-------------------------------------------------------------------");

//for of loop -:for of loop through The value of iterated object.
//syntax-:for(variable of iterable){//code block exicuted}
//Example-:
console.log("------------------Example Of for of loop-----------------");
const cars=["BMW","VALVO","MINI","MARUTI","TATA"]
for(const x of cars){
    console.log(x);
}
console.log("-------------------------------------------------------------------");
//while loop-:while loop through a block of code while a specified condition is true.
//syntax-:while(condition){//code block exicuted}
//Example-:
i=0
while(i<=10){
console.log(i);
i=i+2
}

//do while loop-:do while loop through a block of code while specified condition is true.
//it will exicute atlist one time.
//syntax-:do{//code block exicuted
//}
//while(condition) 
//Example-:
i=0
do {
  
    i=i+5
    console.log(i) 
} while (i<=20);
console.log("---------------------------------------------------------"); 
//do while loop it will exicute atlist one time.
value=0
do{
console.log(value)
value=value+2
}while(value===0)

