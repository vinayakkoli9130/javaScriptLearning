var vote = function (val) {
    console.log(``);
    if (val>=18 && (val<=120)) {
        console.log(`Age Of Candidate-:${val}---->You Are Eligible For Voting`);
    }

     if (val<18 && val>=1) {
         console.log(`Age Of Candidate-:${val}---->You Are Not Eligible For Voting`);
     }
     if (val<=0 || val>120) {
         console.log(`Age Of Candidate-:${val}---->This Is Invalid Data`);
     }
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);
console.log(`===========================================================================`);
function gradeCalculation(marks) {
    if (marks>=90 && marks<=100) {
        console.log(`Funtastic Marks-:${marks} Your Grade is A+` );
    }
   if (marks>=75 && marks<90 ) {
    console.log(`Excellent Marks-:${marks} Your Grade is A`);
   }
   if (marks>=50 && marks < 75) {
    console.log(`Good Marks-:${marks} Your Grade is B` );
}
if (marks>=35 && marks<50) {
    console.log(` Marks Is -:${marks} Your Grade is C,Need To Improve ` );
}
if (marks<=34 && marks > 1) {
    console.log(` Marks Is -:${marks} Sorry You Are Fail.Please Try Again ` );
}
if (marks<=0 || marks>100) {
    console.log(` Marks Is -:${marks} Please Provide Valid Marks ` );
    if (marks<34 && marks > 1) {
        console.log(` Marks Is -:${marks} Sorry You Are Fail.Please Try Again ` );
    }
    
}

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);


