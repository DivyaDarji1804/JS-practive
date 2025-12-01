/*
------------ continous part of controll flow -------------

// in switch case if we don't add break then it will execute rest of code also except default 
*/


const month = 3;

switch (month) {
    case 1:
        console.log(`jan`);
        break;
    case 2:
        console.log(`feb`);
        break;
    case 3:
        console.log(`mar`);
        break;
    case 4:
        console.log(`apr`);
        break;

    case "check":
        console.log(`checked`);;
        break;
    default:
        console.log(`default case::::`);
        break;
}