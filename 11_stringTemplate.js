//String Template Are definade using backtik(``) and 
//varibale substution using dollar sign and curly braces(${})
//string template is ES6 feature they can used remove complexcity of program
const fullName = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";

let details = "Details ".concat(fullName).concat("  "). concat(age).concat(" ").concat(city);
let detailsUsingPlus ="Details " +fullName+"  " + age + "  " + city;
console.log(details);
console.log(detailsUsingPlus);

let detailsUsingTemplate =`Details are ${fullName}  ${age}  ${city}`;
console.log(detailsUsingTemplate);



// Function with default argument value
//some time you can define default value of given argument.example(n2=0)
console.log("Function with default argument value");
function sum(n1, n2=0){
    console.log(n1, n2);
    console.log(n1+n2); // 30
}
sum(10, 20);
sum(10);