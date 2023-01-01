var compare= 0 =='';   
console.log(`0 = = ' '-:${compare}`);//true

var compare= 0 =='0'; 
console.log(`0 = = '0'-:${compare}`);//true

var compare= 0 ==false;
console.log(`0 = = false-:${compare}`);//true

var compare= null == undefined; 
console.log(`null = = undefined-:${compare}`);//true

var compare= 1 ==[1];
console.log(`1 = = [1]-:${compare}`);//true

var compare= 1 ==true;
console.log(`1 = = true-:${compare}`);//true

var compare= 1 =='1';
console.log(`1 = = '1'-:${compare}`);//true



