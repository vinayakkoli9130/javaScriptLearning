// console.log("__self invoking function__");
// /*
// self invoking function-:self Invoking function known as self exicuting function or immediatly invoked 
// function expression.
// funtion that is exicute immediatly after it is defined.it does not require any exiplicite function invokation.
// */
// (()=>{
//     console.log("______Hello World______");
// })()

// console.log("__immediatly invoking function__");
// /*
// immediatly invoked function-:immediatly invoked function is function that is explicitly invoked immediatly after 
// it is defined.it does not wait for any other event or condition to trigger its exicution.  
//  */
// const result=(()=>{
//     const value=45
//     return value*2
// })()
// console.log(result);
// console.log("__reduce method__");
// /*
// reduce() method-:reduce method is used reduce array in single value.iterate from left to rigth
// */
// let arrayOfNumbers=[1,2,3,4,5]
// let add=arrayOfNumbers.reduce((prev,curr,idx)=>{
// return prev+curr
// },5)//add 5 in addition of array element
// console.log(add);
// let sumOfArray=array.reduce((accumalator,currentValue)=>{
// return accumalator+currentValue
// },)
// console.log(array);
// console.log("Sum Of Array-:",sumOfArray);

// console.log("___Recursion____");
// /*
// Recursion-:recursion is process of it self.fuction call itself repeatedly unitil it arrives at result.
// */
// function fact(n){
// if(n===0){
//     return 1
// }else{
//     return n*fact(n-1)
// }
// }
// console.log("5 Factorial Is-:",fact(5));
//Example-:2
// function fibbo(n){
// if(n<=1){
//     return n
// }
// else{
//     return fibbo(n-1)+fibbo(n-2)
// }
// }
// console.log(fibbo(9));

// console.log("___Promise___");
// console.log("Example-:1");
// function doSomething(){
//     return new Promise((resolve,reject)=>{
// //simmulating asynchronous operation
// setTimeout(()=>{
// var success=true
// if(success){
//     resolve("Operation Successful")
// }else{
//     reject("Operation Failed")
// }
// },2000)
//     })
// }
// doSomething().then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
// console.log("Operation Complete");
// })
// console.log("Example-:2");

// let isMarried=false

// let promise=new Promise((resolve,reject)=>{
// if(isMarried){
// resolve("Married Guys")
// }else{
//     reject("Not Married")
// }
// })
// promise.then(function resolve(result){
// console.log(result);
// }).catch(function reject(error){
// console.log(error);
// }).finally(()=>{
//     console.log("Operation Complited");
// })

// console.log("__________________sort and reverse________________________");
// /*
// sort-:sort method used sort array in ascending order.
// reverce-:reverce method used to reverce array.
// */
// let arr=[51,55,50,32,73,14,85,66,]
// console.log("Reverse Array-:",arr.reverse());
// console.log("Sort Array-:",arr.sort());

// let nameArr=["Mahi","Mahesh","Arman","Navaj","Samarth","Sachin"]
// // console.log("Array Reverse-:",nameArr.reverse());
// console.log("Array Sort-:",nameArr.sort());

// let arr1=[3425,2532,578,654,12342354,766587,796547]
// arr1.sort((a,b)=>{
// return a>b?1:-1
// });//ops this problem comes
// console.log(arr1);
// console.log(arr1.reverse());

// class Vehicle {
//    constructor(company,model,fuel,drive,price){
//        this.company=company;
//        this.model=model;
//        this.fuel=fuel;
//        this.drive=drive;
//        this.price=price;
//    }
// }
// let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
// let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
// let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
// let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
// let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

// const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
// arrayOfVehicles.sort((veh1,veh2)=>{
// return veh1>veh2?1:-1
// })
// console.log(arrayOfVehicles);
// arrayOfVehicles.forEach((vehical)=>{
// console.log(vehical.company,vehical.model,vehical.fuel,vehical.drive,vehical.price);
// console.log("---------------------------------------------------------------------");

// })
// arrayOfVehicles.forEach((vehical)=>{
//    if(vehical.price<150000){
//       console.log(vehical.company,vehical.price);
//    }
// })

// console.log("_________________________forEach()_________________________");
// let arrayOfNumbers=[32,443,23,54,555,98,12,101,]
//printing element
// arrayOfNumbers.forEach((val)=>{
// console.log(val);
// })

//reducing array
// let sum=0
// let sumOfArray=arrayOfNumbers.forEach((value)=>{
//   return sum+=value
 
// })
// console.log(sum);

//filter array element
// let evenArray=[]
// let greterThan100=[]
// arrayOfNumbers.forEach((value)=>{
// if(value%2==0){
// evenArray.push(value)
// } 
// if(value>=100){
//    greterThan100.push(value)
// }
// });
// console.log("Even Number In Given Array-:",evenArray);
// console.log("Greater Than 100 Number In Given Array-:",greterThan100);

// console.log("____________map___________");
/*
map-:map method used to transform array element.Allows loop over array & access each value return new array
*/
// let arr1=[43,23,56,78,14,81]
// let tranArray=arr1.map((value)=>{
// return value+1
// })
// console.log(tranArray);

// let val=arr1.map((value)=>{
// return value*value
// })
// console.log(val);

// class Vehicle {
//    constructor(company,model,fuel,drive,price){
//        this.company=company;
//        this.model=model;
//        this.fuel=fuel;
//        this.drive=drive;
//        this.price=price;
//    }
// }
// let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
// let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
// let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
// let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
// let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

// const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];

// let minus=arrayOfVehicles.map((vehical)=>{
// vehical.price= vehical.price-100000
// return vehical
// })
// console.log(minus);
// minus.forEach((veh)=>{
// console.log(veh.company,veh.price);
// })

console.log("_____________________________Practice_____________________________");
// //swap two variable using third variable
// let a=10 
// let b=20
// console.log("Before Swapping-:",a,b);
// let temp=a
// a=b
// b=temp
// console.log("After Swapping-:",a,b);
// //swap two variable Without using third variable

// let m=10
// let n=20
// console.log("Before Swap-:",m,n);
// m=m+n
// n=m-n
// m=m-n
// console.log("After Swap",m,n);



// let display=(a,b)=>{
//     console.log(a+b);
//     return "Hello Dev's"
// }
// let result=display()
// result(23,34)


/*
console.log(typeof(display));
console.log(typeof(result));
console.log(typeof "Mahesh");
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof +true);
console.log(typeof 102);
console.log(typeof null);
console.log(typeof +[12,43,5,43]);
console.log(typeof {});
console.log(typeof +"100");//string convert to number but number not convert into string using plus operator
console.log(typeof new Number("100"));
console.log(typeof toString(100));

let number=new Number("Mahesh")//NaN because invalid number string but its convert in number
console.log(number);
*/
// let num1=11;
// var modulusResult = num1 / 3;
// console.log(`Modulus is ${modulusResult}`);

// let num1=true
// num1=num1++
// console.log(num1);

// var boolean=  true / "2";// string not add((+)//with string you can not  perform only(+)
// console.log( boolean)

// let array=[12,43,46,56,92]
// console.log(array.sort());
// console.log("------------------------------------------------------");

// let array1=[5252,341,324,152,13566246,345,87654]

// console.log(array1.sort((a,b)=>{
//     return  a<b?-1:1
//   }));
  
// console.log("------------------------------------------------------");

// console.log(array1.reverse())

// console.log("------------------------------------------------------");

// let strArray=["Umang","Akshay","Mahi","Baush","war","Orange","Akash"]

// console.log(strArray.sort());

// console.log(strArray.reverse());

// let array=[12,43,46,56,92]
// let addOfArr=array.reduce((prvValue,currValue)=>{
// return prvValue+currValue
// },2)
// console.log(addOfArr);//add:249+2//output:251

//swap two number

// let a=10
// let b=20
// console.log("before swap",a,b);

//  let temp=a
// a=b
// b=temp
// console.log("After Swap",a,b);

// //swap two number without using third variable
// let m=10
// let n=20
// console.log("Before Swap",m,n);
// m=m+n//m=30
// n=m-n//n=30-20:n=10
// m=m-n//m=30-10:m=20
// console.log("After Swap",m,n);

//swap three variable

// let a=10
// let b=20
// let c=30
// console.log("Before Swap",a,b,c);
// let temp=a
// a=b
// b=c
// c=temp
// console.log("Before Swap",a,b,c);

// console.log(typeof true);
// console.log(typeof(12));
// console.log(typeof null);
// console.log(typeof "Mahi");
// console.log(typeof undefined);

// function swap(a,b){
// console.log("Before Swap",a,b);
//  temp=a
// a=b
// b=temp
// console.log("After Swap",a,b);

// }
// swap(12,14)


// function twoNum(a,b){
//     console.log("Before Swap",a,b);
    
// a=a+b//30
// b=a-b//30-20=10
// a=a-b//30-10=20
//   console.log("After Swap",a,b);
  
// }
// twoNum(10,20)


// function division(a,b){
// let result=a/b
// return result
// }
// let ans=division(20,5)
// console.log(ans);
// console.log("--------------Promise---------------");

// function doSomething(){
//   return new Promise((resolve,reject)=>{
// let success=false
// setTimeout(()=>{
//   if(success){
//     resolve("Your Selected")
//   }
//   else{
//     reject("Your Not Selected")
//   }
// },2000)
//   })
// }
// doSomething().then((result)=>{
// console.log(result);

// }).catch((error)=>{
// console.log(error);

// }).finally(()=>{
//   console.log("Process Is Complited");
  
// })
// let isMarried=true
// let process=new Promise(function(resolve,reject){
// if(isMarried){
// resolve('you are married')
// }else{
// reject('you are not married')
// }
// })
// process.then((result)=>{
// console.log(result);

// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//   console.log("Process Is Completed");
  
// })

//string-:string is collection of charactor or sequence of charactor.
//it define double quotes ("") or single quotes('')

let str="Hello,I Am Angular Developer"
//string methods
console.log("length of string",str.length);
// console.log("remove starting idx and ending idx extra spaces",str.trim());
console.log("Return Charactor Index-:",str.indexOf("I"));
console.log("return given idx charactor",str.charAt(5));
console.log("return boolean true or false given charactor available or not in string",str.includes("e"));
console.log("convert given string in upper case",str.toUpperCase());
console.log("convert given string in lower case",str.toLowerCase());
console.log("return sub string from given string-:",str.slice(0,4),str.substring(0,4),str.substr(0,4));
console.log("concat two string",str.concat(" And I Am Freasher"));
console.log("replece string ",str.replace("Hello","I Am Fresher"));
console.log(str.split(" ").length);












