class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
    }
}
let axisBank=new Bank("Axis Bank","Pune","037262738372","axis00001","5%","");
let sbiBank=new Bank("State Bank Of India","Solapur","262727717277","sbi00003","7%");
let icicBank=new Bank("ICIC Bank","Mumbai","458474485748","icic4664","9%");
let kotakBank=new Bank("Kotak Bank","Nashik","34453453554","kotak6666","4%");
let hdfcBank=new Bank("HDFC Bank","Vijayapur","776475867556","hdfc9898","8%",);
let punjabBank=new Bank("Punjab Bank ","Mangalwedha","4633456876845","panajab7777","10%");
let array=[axisBank,sbiBank,icicBank,kotakBank,hdfcBank,punjabBank]
console.log(`Creating A Following Objects `);


console.log(axisBank);
console.log(sbiBank);
console.log(icicBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);
// let isTrue= axisBank instanceof Bank
// console.log(sbiBank instanceof Bank);
// console.log(isTrue);
// for (let index = 0; index < array.length; index++) {//traverce class using for loop
//     const element = array[index];
// //     console.log(element);
// }
console.log(`Creating Array Of Above Object And Traverse With Using For loop and Bank Name And Loctaion Log On The Console `);
for (const iterator of array) {
   console.log(`Bank Name-:${iterator.bankName}  Location-:${iterator.location}`);
}
console.log(`Find The Object Which Has Name "Kotak Bank" Using for Loop`);
for (let index = 0; index < array.length; index++) {
    if (index= kotakBank) {
     console.log(index);
    //  break;
    }
     
 }
console.log(`Log On Details Using Normal For Loop`);
      for (let index = 0; index < array.length; index++) {
     const element = array[index];
     console.log(element);
 }


// console.log(`==============================================================================================================================`);
// console.log(`Bank Name-:${axisBank.bankName} And Location Is-:${axisBank.location}`);
// console.log(`Bank Name-:${sbiBank.bankName} And Location Is-:${sbiBank.location}`);
// console.log(`Bank Name-:${icicBank.bankName} And Location Is-:${icicBank.location}`);
// console.log(`Bank Name-:${kotakBank.bankName} And Location Is-:${kotakBank.location}`);
// console.log(`Bank Name-:${hdfcBank.bankName} And Location Is-:${hdfcBank.location}`);
// console.log(`Bank Name-:${punjabBank.bankName} And Location Is-:${punjabBank.location}`);
// console.log(`==============================================================================================================================`);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (array==kotakBank) {
        
//     }
//     console.log(array);
// }


// for (const iterator of array) {
//     if (axisBank.) {
//         console.log(iterator);
//     }
// }
