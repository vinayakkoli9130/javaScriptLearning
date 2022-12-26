


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

// function cubeSum(val1,val2,val3,val4,val5) {
//    var string1=val1*val1*val1;
//    var string2=val2*val2*val2;
//    var string3=val3*val3*val3;
//    var string4=val4*val4*val4;
//    var string5=val5*val5*val5;


//    var result=string1+string2+string3+string4+string5;
    

// //    number=number+string;
//    console.log(result);
    
// }
// cubeSum(1,2,3,4,5);
