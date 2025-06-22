function favoriteFood()
{
    console.log("I like to eat sweets");

}
favoriteFood ();
console.log('--------------------------------------------------------------------------');

function favoriteGame()
{
    console.log("I like playing cricket");

}
favoriteGame ();
console.log('--------------------------------------------------------------------------');

function personalDetails(firstName,lastName,collegeName) {
    console.log("Details-:",firstName, lastName, collegeName);
}
personalDetails("Vinayak","Koli","Sangola College,Sangola");
console.log('--------------------------------------------------------------------------');

function swapValuesDude(val1,val2) {
    console.log("Before Swap-:", val1, val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After Swap-:", val1, val2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude("1000","2000");
console.log('--------------------------------------------------------------------------');

function addThreeValue(val1,val2,val3){
   
     console.log("After Adding Values-:" );
     return val1 + val2 + val3
   
}
let add=addThreeValue(10.23,600,40); 
console.log(add);
let sum=addThreeValue("Hello","Good","Morning");
console.log(sum);

function squre(val) {
  return add= val*val  
  
}

console.log(squre(5));
console.log(squre(2433));
console.log(squre(43));
console.log("------------------------------------------------------------------------");
 function doSomething(){
    console.log("Funtion Expression");
    
 }
 let display=doSomething
 display()

 function sub(a,b){
    
    // console.log(result);
    return a-b
 }

let dis=sub(10,5)
console.log(dis);

setTimeout(()=>{
    console.log("Hello World");
    
},2000)

setInterval(()=>{
   console.log("Hello World I Am Learning JS");
    
},3000)

 

 
