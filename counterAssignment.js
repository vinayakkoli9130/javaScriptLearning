console.log(`1`);
function countCharA(string) {
  console.log(string);
  var counter = 0;
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy == "a") {
      counter = counter + 1;
    }
  }
  console.log(`To Number Of 'a' Or 'A' In The Given String-:${counter}`);
}
 
countCharA("I Am Learning JavaScript, The Language Of Internet");
console.log(`-----------------------------------------------------------------------`);
console.log(`2`);
countCharA("My Favourite Movie Is LAggAn")

function str(val) {
  console.log(val);
  count=0
  for (let index = 0; index < val.length; index++) {
  let aAlpha=val.charAt(index) 
  if (aAlpha=='a') {
    count=count+1
    }
  }

  console.log(count);
}
str("Don't Warry Be Happy")
