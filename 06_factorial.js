


function fNumber(val) {
    var count=1
for (let index = 1; index <=val; index++) {
 
    count=index*count;
}
  console.log(`Factorial Given Number${val}-:   ${count}`);  
}
fNumber(5);
fNumber(7);
fNumber(8);
fNumber(12);
console.log(`------------------------------------------------------------------`);

function sumCube(val){
  var counter=0;
for (let index = 0; index <val.length; index++) {
  var add= val*val*val;
  counter=counter+add; 
  
  console.log(counter);
  
}


}
sumCube(1);
sumCube(2); 
sumCube(3);
sumCube(4);
sumCube(5)



let num=1
for (let index = 1; index <= 5; index++) {

  num=num*index;
}
console.log(num);
console.log(`==================================================================`);
var fun=function(val) {
  let number=1
  let sum=0
  for (let index = 1; index <= val; index++) {
     number=number*index;
    sum=sum+val;
  }
   console.log(number);
   console.log(sum);
}
fun(1);
fun(2)
fun(3)
fun(4)
fun(5)
console.log('=========================================================================');
const professor={

}
professor.name="stew",
professor.age=45,
professor.gendar="male",
professor.city="pune",

console.log("1");
console.log(professor);

console.log("2");
console.log(`Accessing an nested degrees property`);
professor.degrees={
   Enginerring:"Computar enginering",
   PHD:"Adv computing" ,
   college:"COEP",
}
console.log(professor.degrees);

console.log(3);
console.log(`Accessing an nested certification proprty`);

  professor.certificates={
    1:"Hacker Rank",
    2:"certificate IN IFE",
    3:"Adv Programing",
   }
   console.log(professor.certificates);

   console.log(4);
   console.log(`Add and concat degrees of professor`);
   console.log(professor.degrees);
   console.log(`The total degrees of professor are Engineering,PHD,College`);


   console.log(5);
   console.log(`Add new proprty in proffesor object`);
   professor.height=6,
   console.log(professor);


   console.log(6);
   console.log(`Modifiying Age proprty of object`);
   professor.age=50,
   console.log(professor);


   console.log(7);
   console.log(`Deleting one certificate from object`);
   delete professor.certificates[1];
   console.log(professor.certificates);


   console.log(8);
   console.log(`Adding one certificate from object`);
   professor.certificates={
    1:"Data Science",
    2:"certificate IN IFE",
    3:"Adv Programing",
   }
   console.log(professor.certificates);


   console.log(9);
   console.log(`Adding one certificates from object`);
   console.log(professor.certificates[1]);
   console.log(`============================================================================`);
   function showDetails() {
    const sbiBank = {
        bankName : "State Bank Of India",
        location : "Sangola",
        accountNo : 62512256663,
        IFSC : "SBI00000335",
        interestRate : "8%",
        add : function showDetails(){
            console.log(`Please visit again always welcome`);
        }
    }
    console.log(`---------- SBI Bank ----------`);
    console.log(sbiBank);
    }
    showDetails();
    console.log(``);
    
    function showDetails1(){
    const axisBank = {
        bankName : "Axis Bank",
        location : "Pandharpur",
        accountNo : 545233665588,
        IFSC : "AXB0000556",
        interestRate : "10%",
        add : function showDetails(){
            console.log(`Please visit again always welcome`);
        }
    }
    console.log(`---------- Axis Bank ----------`);
    console.log(axisBank);
    }
    showDetails1();
    console.log(``);
    
    function showDetails2(){
        const hdfcBank = {
            bankName : "HDFC Bank",
            location : "Pune",
            accountNo : 649733665588,
            IFSC : "HDFC0000935",
            interestRate : "8%",
            add : function showDetails(){
                console.log(`Please visit again always welcome`);
            }
        }
        console.log(`---------- HDFC Bank ----------`);
        console.log(hdfcBank);
        }
        showDetails2();
        console.log(``);
    
        function showDetails3(){
            const yesBank = {
                bankName : "YES Bank",
                location : "Mumbai",
                accountNo : 554544555335,
                IFSC : "YB0000495",
                interestRate : "11%",
                add : function showDetails(){
                    console.log(`Please visit again always welcome`);
                }
            }
            console.log(`---------- YES Bank ----------`);
            console.log(yesBank);
            }
            showDetails3();