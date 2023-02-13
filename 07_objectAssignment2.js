
const sbiBank={
    name:"State Bank Of India",
    location:"Solapur",
    accountNo:3246737867238,
    ifsc:"IFSC001",
    interestRate:"4%",
    add:function showDetails() {
        console.log(`Please Visit Again`);
    }
}
const axisBank={
    bankName:"Axis Bank",
    location:"Kolhapur",
    accountNo:453629102763,
        ifsc:"IFSC002,",
interestRate:3,
}
const hdfcBank={
    bankName:"HDFC Bank",
    location:"Pune",
    accountNo:986645312566,
        ifsc:"IFSC003,",
interestRate:4,
}
const yesBank={
    bankName:"Yes Bank",
    location:"Mumbai",
    accountNo:3575327618765,
        ifsc:"IFSC004,",
interestRate:5,
}

function showDetails(val) {//object show in function.
console.log(val);
  
}
showDetails(sbiBank)
showDetails(axisBank )
showDetails( hdfcBank)
showDetails( yesBank)
