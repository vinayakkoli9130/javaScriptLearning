//1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
var date=new Date()

var today=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(today[date.getDay()]);
console.log("");
// console.log("Today Is:",date.getDay());
// console.log('Current Time-:',date.getHours(),":",date.getMinutes(),":",date.getSeconds(),":");


// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var currentDate=new Date()

var dd=currentDate.getDate()
var mm=currentDate.getMonth()+1
var yyyy=currentDate.getFullYear()

if (dd<10) {
  dd= "0"+dd 
}
if (mm<10) {
    mm= "0"+mm 
  }
  
  console.log(mm+"-"+dd+"-"+yyyy);
  console.log(mm+"/"+dd+"/"+yyyy);
  console.log(dd+"-"+mm+"-"+yyyy);
  console.log(dd+"/"+mm+"/"+yyyy);
console.log("--------------------------------------------------------------------");
//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
//area=base*height/2

var side1=5
var side2=6
var side3=7
var s=(side1+side2+side3)/2
console.log(s);
var area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
console.log("Area Of Triangle-:",area);
console.log('------------------------------------------------------------------------------');
console.log('-----------------Find Out Leap Year----------------');

function leapYear(Year) {
   return (Year%100===0)?(Year%400===0):(Year%4===0) 
}
console.log(leapYear(2017));
console.log(leapYear(2020));
console.log("------------------------------------------------------------");
var tarikh=new Date()
var divas=['Sunday','Monday','Tue','Wed','Thirsday','Friday','Sat']
console.log(divas[tarikh.getDay()]);

