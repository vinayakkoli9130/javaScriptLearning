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
}).catch(function failure(rejected){
    console.log("Sir why have not shared notes.. ");
    console.log(rejected);
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
   
