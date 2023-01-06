class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
    }
}
console.log(`=================A) Created A Class BAnk And Added Data Members==================`);
let axisBank=new Bank("Axis Bank","Pune",37262738372,"axis00001","5%","");
let sbiBank=new Bank("State Bank Of India","Solapur",262727717277,"sbi00003","7%");
let icicBank=new Bank("ICIC Bank","Mumbai",458474485748,"icic4664","9%");
let kotakBank=new Bank("Kotak Bank","Nashik",34453453554,"kotak6666","4%");
let hdfcBank=new Bank("HDFC Bank","Vijayapur",776475867556,"hdfc9898","8%",);
let punjabBank=new Bank("Punjab Bank ","Mangalwedha",4633456876845,"panajab7777","10%");
console.log(`========================B) Created Objects ==========================`);
console.log(axisBank);
console.log(sbiBank);
console.log(icicBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);
console.log(`C) Create The Map In Such A Way That Key Should Be Bank Account Number And Value Is Object`);
const details= new Map()
details.set(37262738372,axisBank)
details.set(262727717277,sbiBank)
details.set(458474485748,icicBank)
details.set(34453453554,kotakBank)
details.set(776475867556,hdfcBank)
details.set(4633456876845,punjabBank)
console.log(`Accounts Number A Keys`);
const keyOfMapDetails = details.keys();
console.log(keyOfMapDetails);
console.log(`D) Traverse The Map And Log Bank Name , Account Number And Interest Rates`);
for (const iterator of keyOfMapDetails) {
  const employee = details.get(iterator);
  console.log(`Bank Name-:${employee.bankName} Account No-:${employee.accountNo} Interest Rate-:${employee.interestRate}`);
  
} 