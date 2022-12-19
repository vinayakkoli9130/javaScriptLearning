var voting=function (age) {
   if (age<=0 || age>120  ) {
    console.log(age,"In valid Data");}
    else {
      if (age>=18 ) {
        console.log(`Age-:${age} You Are Eligible For Voting`);
       } else {
      console.log(`Age-:${age} You Are Not Eligible For Voting`);
       }
       
    }
   } 
voting(45)
voting(17)
voting(8)
voting(20)
voting(-10)
voting(200)
voting(0)

console.log(`------------------------------------------------------------------------`);


function gradeCalculation(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log(`   Fantastic Marks: ${marks} Your Grade Is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`   Excellent Mrks: ${marks}  Your Grade Is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`   Good Marks: ${marks}  Your Grade Is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`   Marks is ${marks} : Your Grade Is C Need Improvement`);
  }
  if (marks <= 0 && marks < 100) {
    console.log(`   Marks is ${marks} : Please Provide The Valid Marks`);
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
