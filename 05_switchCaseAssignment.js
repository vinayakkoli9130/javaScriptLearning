
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
          console.log(`January`);
          break;
        case 2:
          console.log(`Febryary`);
          break;
        case 3:
          console.log(`March`);
          break;
        case 4:
          console.log(`April`);
          break;
        case 5:
          console.log(`May`);
          break;
        case 6:
          console.log(`Jun`);
          break;
        case 7:
          console.log(`July`);
          break;
        case 8:
          console.log(`August`);
          break;
        case 9:
          console.log(`september`);
          break;
        case 10:
          console.log(`october`);
          break;
        case 11:
          console.log(`November`);
          break;
        case 12:
          console.log(`December`);
          break;

        default:
          console.log(`In valid Month`);
          break;
      }
      
    
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(200);
