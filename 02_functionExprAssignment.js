var square=function(num){
    console.log("squre of number-:", num,"=", num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log("Variable Type-:",typeof square);
console.log("=========================================================================");
var areaOfRectangle=function(length, width){
console.log("Area of rectangle-:", "length=",length, '*', "width=", width,"=", length * width );

}
areaOfRectangle(499, 917);
console.log("=========================================================================");

var swapValues=function(val1,val2){
    console.log("Before Swap-:", val1, val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After Swap-:", val1, val2);

}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("=========================================================================");

var string=function( val1 ){
    console.log("String-:" ,val1);
console.log("Total Number Of Character In String-:", val1.length);
 console.log("6th Number of chracter in String-:", val1.charAt(6),"(space of 6th position)");
 console.log("11th Number of chracter in String-:", val1.charAt(11),"(space of 11th position)");
 var lengthTotal = val1.length;
 console.log("Last Charater On The String-:", val1.charAt(lengthTotal-1));
console.log( "First Character On the String-:", val1.charAt(0));
console.log("Total length of string Square is-:",val1.length*val1.length);
console.log("======================================================================");

}
string("JS the most popular language");