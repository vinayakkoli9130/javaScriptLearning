//String template are definde using backtics(` `),variable substutution using ${ }
function stringTemplateAssig() {
    console.log(`My Dream Company is "Cognizant"`);
    console.log("=========================: :==============================");
    var myHobby1="PlayingCricket"
    var myHobby2="ListingSongs"
    var myHobby3="WatchingMovies"
    console.log(`My Hobbies are -:${myHobby1} ,${myHobby2}, ${myHobby3}`);
    console.log("=========================================================");
    var concat=myHobby1 .concat ( myHobby2,   myHobby3)
    console.log(concat);
    console.log("=========================================================");
}
stringTemplateAssig();