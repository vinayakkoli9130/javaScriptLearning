var interview = function (gradScore,hscScore,sscScore,candidateName) {
   var val= gradScore>=70 || hscScore>=80 || sscScore >=90  ? `Congrates ${candidateName} You Are Eligible For TCS Interview.` : ` Unfortunately ${candidateName} You Are Not Eligible For Interview.`

console.log(val);

}
interview(80,86,90,"Vinayak");
interview(70,65,55,"Anjum");
interview(60,79,88,"Mahesh");

// gradScore>=70,hscScore>=80,sscScore>90,candidateName


const interviewEle=function (gradScore,hscScore,sscMarks,candidateName) {
  return gradScore>=70 && hscScore>=80 && sscMarks>=90?`Congratulation ${candidateName} Your SSC Marks ${sscMarks} ,HSC marKs ${hscScore} And Your Grade Score ${gradScore} Selected To Interview.`:"Sorry Your Not Selected to Interview";
}
console.log(interviewEle(72,81,91,"Vinayak"));
console.log(interviewEle(72,81,87,"Mahesh"));




