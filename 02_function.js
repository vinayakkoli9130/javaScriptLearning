//function-:A Block of Code Designed to perform particular task is called function.
//block-:peice of code written inside curly braces.
function display( ) {//Function not with Argument and return type.
  console.log("My name: Mohit");
  console.log("My sir name is: Sharma");
  
}

display(); // Function call or function invocation
  function student() {     
  console.log("Vinayak Somning Koli");
  
}
student();

// Write a function show which should log you college name

function showDetails(myName){//function with Argument without Return type
    console.log("Details", myName);
}
showDetails("Mohit Sharma");

function myName(val1,val2) {
  console.log(val1,val2);
  
}
myName("Vinayak", "Koli");

console.log("function with argument without return type");

function swapValues(value1, value2){
    console.log("Before Swap", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("Kishor", "Hitesh");
swapValues("You", "Me");

function concat(val1,val2,val3,val4,val5) {
  console.log("Before Swap",val1,val2,val3,val4,val5);
  var temp=val1;
  val1=val2;
  val2=val3;
  val3=val4;
  val4=val5;
  val5=temp;
  console.log("After Swap", val1,val2,val3,val4,val5);
  
}
concat(2,3,4,5,6,7);
concat("a","b","c","d","e")

function hello(myName){
    console.log(myName);
}
hello("Sachin");

console.log("Function with arguments and return value");
function rajuBhaiya(paisa){//Function with arguments and return value
  console.log("Going in market", paisa);
  console.log("Purchased fresh vegetables", paisa);
  console.log("Come back");
  return "Bag of vegetables";
  
}
 var bagOfVegetables= rajuBhaiya(100);
 console.log(bagOfVegetables);

 function worker(workTime) {//Function with arguments and return value
console.log(workTime);
  return 5;
 }
 var returns=worker(8.8)
 console.log("How Many they can't do it work",returns);
 

 function add(val1, val2){
    console.log(val1 + val2);
 }
 add(10, 20);

 function sub(val1,val2) {
console.log("before substraction", val1, val2);
  console.log("After substraction",val1-val2);
 }
 sub(20, 12);
 sub(35,15);


 function swap(val1,val2,val3,val4) {
  console.log("Before Swaping String-:",val1,val2,val3,val4);
   var temp=val1
  val1=val2
  val2=val3
  val3=val4
  val4=temp;
  console.log("After Swaping String-:",val1,val2,val3,val4);
 }
 swap(`Ram`,`Sham`,`Shita`,`Gita`)

 console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
 //Function not with Argument and return type.
 function song() {
  console.log("Don't Brake My Heart");
 }
 song()//function call or invocation
 console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
  //Function  with Argument and not return type.
  function name(val1,val1) {
   console.log(val1,val1); 
  }
  name(23,12)
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
    //Function  with Argument and with return type.
    function vinny(val1,val2) {
      let result=val1/val2
      // console.log(result);
      return result
    }
    let re=vinny(21,9)
    console.log(re);
    console.log(`==================================================================================`);
    console.log(`Swaping String In Function`);
    function swaping(val1,val2,val3) {
      console.log("Before Swaping",val1,val2,val3);
      var temp=val1
      val1=val2,
      val2=val3,
      val3=temp
      console.log("After Swaping",val1,val2,val3);
    }
    swaping("Koli","Vinayak","Somning")
