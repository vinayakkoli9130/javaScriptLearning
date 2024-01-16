var interview = function (gradScore,hscScore,sscScore,candidateName) {
   var val= gradScore>=70 && (hscScore>=80 || sscScore >=90)  ? `Congrates ${candidateName} You Are Eligible For TCS Interview.` : ` Unfortunately ${candidateName} You Are Not Eligible For Interview.`

console.log(val);

}
interview(80,76,70,"Vinayak");//Not Select
interview(70,65,55,"Anjum");//not Select
interview(60,79,99,"Mahesh");//Not Select

// gradScore>=70,hscScore>=80,sscScore>90,candidateName
console.log("------------------------------------------------------------------------------------------------------");

const interviewEle=function (gradScore,hscScore,sscMarks,candidateName) {
  return gradScore>=70 && hscScore>=80 && sscMarks>=90?`Congratulation ${candidateName} Your SSC Marks ${sscMarks} ,HSC marKs ${hscScore} And Your Grade Score ${gradScore} Selected To Interview.`:"Sorry Your Not Selected to Interview";
}
console.log(interviewEle(72,81,91,"Vinayak"));//Select
console.log(interviewEle(72,81,87,"Mahesh"));//Not Select

let passOrFail=(10>23||23>10)?"true":"false"
console.log(passOrFail);

let availableOrNot=18<=20&&20<=23?"Available":"Not Available"
console.log(availableOrNot);
function passOrFails(val1,val2) {
   if (val1%2==0 && val2%2==0) {
    console.log("Given Numbers Are perfect");
  }
}
console.log();
console.log("---------------------------------------------------------------------------------------------------");
let interviews=(name,grad,hsc,ssc)=>{
return grad>=70 && (hsc>=80||ssc>=70)?`Congrats ${name} you are selected to interview`:`Sorry ${name} unfortunatly you are not selected`
}
console.log(interviews("Vinny",71,60,70));
console.log(interviews("Mahi",69,99,80));
console.log(interviews("Anju",71,80,60));
console.log(interviews("Dipu",81,81,65));