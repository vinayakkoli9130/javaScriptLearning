let isNotesPrepared = false;
let promiseToShareNotes = new Promise(function(success, reject){
    if (isNotesPrepared) {
        success("Hey guys take this notes please...");
    }else{
        reject("Sorry guys, I didn't get time today..");
    }
});

promiseToShareNotes.then(function success(fulfilled){
    console.log(fulfilled);
    
}).catch(function reject(failurede){
    console.log("Sir why have not shared notes.. ");
    console.log(failurede);
}).finally(function () {
    console.log("===========================");
    console.log("I must have notes - Whether Sir will give or not");
    console.log("In case sir shared notes - I will use it");
    console.log("In case sir does not shared notes - I will prepare my own notes..");
});
console.log(`============================================================================`);
// let marriedOr=true
// let marrageStatus= new Promise(function(No,Yes){
//     if (marriedOr) {
//         No("I Am Really Not Married")
//     }else{
//         Yes("I Am Married ")
//     }
// })
// marrageStatus.then(function No(fulfilled){
// console.log(fulfilled);
// }).catch(function Yes(reject) {
//     console.log(Yes);
// }).finally(function () {
//     console.log(`You Married Or Not Married Marrage not complasory`);
// })

// const comingHome=false
//    const toHome= new Promise(function(come,notCome){
//     if (comingHome) {
//         come("tHANKS FOR Comimg in home")
//     } else {
//         notCome("Why YOU ARE NOT COME TO HOME")
//     }

//    })
// toHome.then(function come(done){
// console.log(done);
// }).catch(function notCome(notDONE){
//     console.log(notDONE);
// }).finally(function(){
//     console.log(`Any One come or not Program is performed`);
// })
// let travel=false
// const travlingGoa=new Promise(function(goining,cancaled) {
//     if (travel) {
//         goining("Full Enjoy Goa")
//     } else {
//         cancaled("Some funcial reson I Will Not Come")
//     }
    
// })
// travlingGoa.then(function goining(enjoy) {
//     console.log(enjoy);
// }).catch(function cancaled(notEnjoy) {
//     console.log(`Why You Are Not Coming Goa :)`);
//     console.log(notEnjoy);
// }).finally(function () {
//    console.log(`Any One Come Or Not i Will Go to The Goa`); 
// })
console.log("------------------------------------------------------------------------------------------");
function doSomething(){
return new Promise((resolve,reject)=>{
    //Simulating Asynchrouns Operation
    setTimeout(()=>{
        var success=false;// simulating success
        if(success){
            resolve("Operation Complete Successfully")
        }
        else{
            reject("Operation Failed")
        }

    },2000)
})
}
doSomething()
.then((result)=>{
console.log(result);
})
.catch((error)=>{
console.log(error);
})
.finally(()=>{
    console.log("Operation Completed");
})
console.log("-------------------------------------------------------------------------------")
let interview=false;
let result=new Promise((reslove,reject)=>{
    if(interview){
reslove("You Are Selected")
    }
    else{
        reject("Sorry You Are Not Selected")
    }
})
.then((result)=>{
console.log(result);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
    console.log("your Interview process is completed");
})