function isPalindrome(string){
    string=string.toString()
    string=string.replace(/\W/g,"").toLowerCase()
return string==string.split("").reverse().join("")
}

console.log(isPalindrome("Nayan"));
console.log(isPalindrome("a car, a man, a maraca"));
console.log(isPalindrome(402));
console.log(isPalindrome(6666));

const missingValue=[]
var array=[23,54,65,12,3,40,62]
for(let i = 0;i<100;i++){
    if(array.indexOf(i)==-1){
        missingValue.push(i)
        // console.log(i);

    }
}
console.log(missingValue);
