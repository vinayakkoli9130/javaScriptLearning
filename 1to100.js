console.log(`-----:Odd Index Numbers In 1 To 100:---------`);
var oddNumber=""
for (let index = 1; index <=100; index++) {
  
    if (index%2==1) {
        oddNumber=oddNumber.concat(",",index)
    }
   
 }
 console.log(oddNumber)
console.log(`-----Even Numbers In 1 To 100---------`);
var count=0
for (let index = 1; index <= 100; index++) {
   
    if (index %2==0) {
        console.log(count+=1,")",index);
    }
}
console.log(`------:5 Table Numbers In 1 To 100:---------`);
for (let index = 0; index <= 100;index= index + 5 ) {
    
 console.log(index);
 

}

