var stringHandsOn=function () {
    var string=`     Hey you are doing good, keep it up     `
        console.log(`1)String-:${string}`);
        console.log(`2)Total Length Of String- :${string.length}`);
         console.log(`3)After Removing Extra Spaces Using trim()Method-:${string.trim()}`);
         var word=string.trim();
         var count=string.length - word.length;
         console.log(`4)Total number Of Remove Spaces-:${count}`);
         console.log(`5)First Character On String-: ${word.charAt(0)} Last Character On String-: ${word.charAt(word.length-1)} `);
       var cdn=word.split(" ")
         console.log(`6)Total Numbers Of Word in String-:${cdn.length}`);

    console.log(`7)printing Index Word "good" Position-:${word.indexOf("good")}`);
    console.log(`8)Printing Substring Starting From The Index 22-:${word.slice(22)}`);
    console.log(`9)String End With Word "up"-:${word.endsWith("up")}`);
    console.log(`10)String Started With Word "Hey"-:${word.startsWith("Hey")}`);

}
    stringHandsOn();



   



