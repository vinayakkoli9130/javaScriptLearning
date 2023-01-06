class Information{
    constructor(name,gender,age,mobileNo,city){
this.name=name;
this.gender=gender;
this.age=age;
this.mobileNo=mobileNo;
this.city=city;
    }
}
let first= new Information("Arman","Male",24,997571627,"Pune")
let second=new Information("Salama","Female",21,2435363637,"Marvade");
let third=new Information("Jyoti","Female",23,74646475746,"Solapur")
let four=new Information("Vaishnavi","Female",22,733837529,"Murum")
let five=new Information("Shoeab","Male",26,5676546776,"Sangola")
console.log(first);
console.log(second);
console.log(third);
console.log(four);
console.log(five);
//class Convert in array
let array=[first,second,third,four,five]
for (const iterator of array) {//traverce array using for of loop
 console.log(iterator.name,iterator.mobileNo);   
}
 let set= [...new Set(array)]
 console.log();
//  set.add(first)
//  set.add(second)
//  set.add(third)
//  set.add(four)
//  set.add(five)
//  console.log(set.get());


































// const string="dil diya galla karave roj roj baith ke";
// console.log(string);
// console.log(`Total Number Of length-:${string.length}`);
// console.log(`Total Number Of Character-:${string.length-1}`);
// console.log(string.slice(4));

// const array=[21,45,76,98,45,34,98,67,56]
// console.log(array);
// console.log(array.length);