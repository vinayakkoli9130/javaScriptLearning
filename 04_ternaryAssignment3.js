var interview = function (gradScore,hscScore,sscScore,candidateName) {
   var val= gradScore>=70 || hscScore>=80 || sscScore >=90  ? `Congrates ${candidateName} You Are Eligible For TCS Interview.` : ` Unfortunately ${candidateName} You Are Not Eligible For Interview.`

console.log(val);

}
interview(80,86,90,"Vinayak");
interview(70,65,55,"Anjum");
interview(60,79,88,"Mahesh");