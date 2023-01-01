//break is used to break the  loop immediately.
//The continue statement is used to skip the current iteration of loop and the control flow of program goes to the next iteration.

var index = 0;
while (index<=10) {
   console.log(index);// 0 1
   if (index==5) {//iteration break on the 5
     break;
   } 
   index++;
}

for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {
     break;//break the loop on the value
   }
    
}
console.log(`=================================================================================================`);

for (let index = 0; index < 6; index++) {
    //console.log(index); // 0 1  2 3
    if (index==3) {//skip the 3 value of iteration
      continue;
    }
    console.log(index);
 
 }
console.log(`====================================================================================================`);
 for (let index = 0; index < 20; index++) {
  if (index==15) {
    continue;//skip the value 15
  }
    console.log(index);
    
    
 }
