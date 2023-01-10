console.log(`===========a)Simple Message With Arrow Fuction=================`);
let desplay= ()=>{
console.log("Good Morning, Today Is Monday");
}
desplay();
console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=====2)Multiplication Of Three Numbers And Multiplication Of Three Number With One Default Value=====`);
let multiply=(val1,val2,val3=1)=>{
console.log(`Given Number ${val1} ${val2} ${val3} Multiplication Is--: ${val1*val2*val3}`);
}
multiply(5,5,2)
multiply(10,4)
console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=========3)Addition Of 5 Parameters And Return It===========`);
let show=(val1,val2,val3,val4,val5)=>{
    console.log("Given Value-:",val1,val2,val3,val4,val5);
let result=val1+val2+val3+val4+val5
return result
}
let addResult=show(100,100,200,349,756)
console.log(`a)Addition of given Value-->${addResult}`);
let string=show("I Am","Learning","ES6","Features","In Depth")
console.log(`b)Additon Of Given Value-->${string}`);

