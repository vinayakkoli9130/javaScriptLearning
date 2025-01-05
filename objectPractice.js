console.log("------------------------------1)Object literal------------------------------");
let employee={
    id:1,
    name:"Vinayak",
    salary:29000,
    age:23,
    graduationMarks:{
        science:80,
        physics:87,
        chemistry:95,
        optionalSubject:{
          marathi:97,
          hindi:98,
          english:94
        }
    }
    
}
//Log Employee Object On Console.
console.log("employee information-:",employee);

//Log employee id On Console.
console.log("employee id-:",employee.id);

//Log employee Salary On Console.
console.log("employee salary-:",employee.salary);

//Log updated employee Salary On Console.
var salaryUpdate=employee.salary=30000
console.log("updated employee Salary-:",salaryUpdate);

//Log updated employee information On Console.
console.log("updated employee information-:",employee);

//add new address property in employee object
var address=employee.address="At Post Nandur Tal-Mangalwedha Dist-Solapur Pin-413319"
console.log("employee address-:",address);
//Log updated employee information On Console.
console.log("updated employee information-:",employee);

//Log employee graduation marks On Console.
var marks=employee.marks
console.log("employee graduation marks-:",employee.graduationMarks);

//Log employee graduation marks of physics  On Console.
console.log("employee graduation marks of physics -:",employee.graduationMarks.physics);

//Log employee graduation marks of optional Subjects  On Console.
console.log("employee graduation marks of optional Subjects-:",employee.graduationMarks.optionalSubject);

//Log employee graduation marks of optional Subjects Hindi On Console.
console.log("employee graduation marks of optional Subjects Hindi-:",employee.graduationMarks.optionalSubject.hindi);

//delete age property of employee object
var deletes=delete(employee.age)
console.log("delete age property of employee object-:",employee);

//check property is available or not in employee object
var salaryProperty = "salary" in employee
console.log("check salary property is available or not in employee object-:",salaryProperty);

console.log(Object.entries(employee));
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log("-----------------------------------------------------------------------------------");
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
    }
}

console.log("------------------------------2)class------------------------------");

 class Student{
    
constructor(stdId,stdName,stdStandard,stdAge,stdMark, stdCollege){
this.stdId=stdId,
this.stdName=stdName,
this.stdCollege=stdCollege="Sangola College Sangola",
this.stdStandard=stdStandard,
this.stdAge=stdAge,
this.stdMark=stdMark
}
object(){
    console.log(this.stdId,this.stdName,this.stdCollege,this.stdStandard,this.stdAge,this.stdMark);
}
}
const arman = new Student(1,"Arman","Bachalor Of Nursing",24,87);
console.log(arman);

const vinayak = new Student(2,"Vinayak","Master Of Computer Science",23,75);
console.log(vinayak);

const rahul = new Student(3,"Rahul","Bachalor Of Enginearing",23,"7 CGPA");
console.log(rahul);

const anjum = new Student(4,"Anjum","Bachalor Of Arts",26,90);
console.log(anjum);

//Traversing anjum object
console.log("Information Of Student Anjum-:");
for (const key in anjum) {
    if (Object.hasOwnProperty.call(anjum, key)) {
        const element = anjum[key];
        console.log(key,"-:",element);
        
    }
}

//Check Object Is Availabel Or Not In Class
student1=anjum instanceof Student
console.log(student1);

if(student1){

    console.log("Object Is Available");
}else{
    console.log("Object Is Not Available");
}

//Delete Object From Class
var anjumDelete=delete Student.anjum
console.log("Anjum Object Successfullly Deleted",anjumDelete);

console.log(anjum instanceof Student);

console.log("------------------------------------------------------------------------------------------------------");
//traversing All Object Using for in loop And function
var cout=0
function traverseObject(objects) {
    for (const key in objects) {
        if (Object.hasOwnProperty.call(objects, key)) {
            const element = objects[key];
            console.log(key,element);
        }
    }
}
traverseObject(vinayak)
traverseObject(arman)
traverseObject(rahul)
traverseObject(anjum)

//function in class
arman.object()
anjum.object()
console.log("function in class-:",);

console.log("------------------------------3)function constructor------------------------------");
function Students(id,name,classs,mark){
this.id=id,
this.name=name,
this.classs=classs,
this.mark=mark
}
let jyoti=new Students(1,"Jyoti",13,76)
let kirti=new Students(2,"Kirti",10,80)
let sanjiv=new Students(3,"sanjiv",9,97)
let maya=new Students(4,"Maya",16,70)

//traversing jyoti object of function constructor
for(const key in jyoti){
    if (Object.hasOwnProperty.call(jyoti,key)) {
        const element=jyoti[key]
        console.log(key,":-:",element);
    }
}
console.log("-----------------------------------------------------------------------");
//add default value to all object
Students.prototype.college="Sangola Vollege Sangola"
console.log(maya.college);
console.log(jyoti.college);
console.log(kirti.college);
console.log(sanjiv.college);
console.log("------------------------------------------------------------------------------------------------------");
//Traversing All Object of Function Constructor using function and for in loops
function info(arg) {
    for(const key in arg){
if(Object.hasOwnProperty.call(arg,key)){
    const element=arg[key]
    console.log(key,":-:",element);
}
    }
    
}
info(jyoti)
info(kirti)
info(sanjiv)
info(maya)

//update maya classs
console.log(maya.classs=23);
console.log(maya);

//object is available or not 
var isAvailable =maya instanceof Students
console.log("maya Is available in function constructor Students-:",isAvailable);

