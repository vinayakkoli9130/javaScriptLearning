function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
let yesBank= new Bank("Yes Bank","Mumbai","IFSC1234","yesBank1234")
let sbiBank= new Bank("State Bank Of India","Solapur","IFSC4321","sbiBank4321");
const mahaBank = new Bank("Maharashtra Bank","Mangalwedha","IFSC5678","mahaBank8765");
const axisBank = new Bank("Axis Bank","Maravde","IFSC3542","axisBank4875");

let openTime=Bank.prototype="9 AM IST";
let closeTime=Bank.prototype="6 PM IST";
console.log(`1)`);
console.log(`Bank Details Is :  Bank Name-:${yesBank.bankName}, Branch-:${yesBank.location}, IFSC Code-: ${yesBank.ifscCode}, Branch Code-:${yesBank.branchCode}`);
console.log(``);
console.log(`Bank Details Is :  Bank Name-:${sbiBank.bankName}, Branch-:${sbiBank.location}, IFSC Code-: ${sbiBank.ifscCode}, Branch Code-:${sbiBank.branchCode}`);
console.log(``);
console.log(`Bank Details Is :  Bank Name-:${mahaBank.bankName}, Branch-:${mahaBank.location}, IFSC Code-: ${mahaBank.ifscCode}, Branch Code-:${mahaBank.branchCode}`);
console.log(``);
console.log(`Bank Details Is :  Bank Name-:${axisBank.bankName}, Branch-:${axisBank.location}, IFSC Code-: ${axisBank.ifscCode}, Branch Code-:${axisBank.branchCode}`);
console.log(`______________________________________________________________________________________________________`);
console.log(`2)`);
console.log(`Open Time Of SBI Bank--->${openTime} And Close Time Of Bank--->${closeTime}`);
console.log(`______________________________________________________________________________________________________`);
console.log(`3)`);
console.log(`The Open Time Of ${axisBank.bankName}---> is ${openTime} And Close Is----> ${closeTime}`);
console.log(`______________________________________________________________________________________________________`);
console.log(`4)`);
console.log(`The Bank Name Is ${yesBank.bankName}. Branch Code Is ${yesBank.branchCode}. And Open time Is --->${openTime} `);
console.log(`______________________________________________________________________________________________________`);



