const professor = {
  name: "Pailwan",
  age: 43,
  height: 5,
  place: "Sangola",
  degrees: {
    Msc: "Computer Science",
    PHD: "Python",
    College: "Sangola College,Sangola",
    certificates: {
      certificates1: "Hacker Rank Participation",
      certificates2: "Certificate In IFE Cource",
      certificates3: "Certificate In Adv Programing",
      //  add:function () {
      //     this.Msc+this.PHD+this.College
      //   }
    },
  },
 }
console.log(`Professor Information--->`);
console.log(professor);
console.log(
  `=============================================================================`
);
console.log(`Nested Object Is Degree--->`);
console.log(professor.degrees);
console.log(
  `=============================================================================`
);
console.log(`Nested Object Is Certificates `);
console.log(professor.degrees.certificates);
console.log(
  `=============================================================================`
);

   console.log(`Add and concat degrees of professor`);
   console.log(professor.degrees);
   console.log(`The total degrees of professor are Engineering,PHD,College`);

console.log(
  `=============================================================================`
);
console.log(`Adding New Property Salary--->${professor.salary=50000}`);
console.log(professor.salary);
console.log(`===================================================================`);
professor.height=5.5;
console.log("Modifying Professor Height-->",professor);
console.log(`===================================================================`);
console.log("Before Deleting Nested Object Certificates ",professor.degrees.certificates);
console.log("After Deleting Certificates2  Nested Object Certificates ",delete professor.degrees.certificates.certificates2);
console.log(professor.degrees.certificates);
