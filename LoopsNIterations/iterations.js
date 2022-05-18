
// let A = 100;
// while(A <= 200) {
//     A++;
//     console.log(`A = ${A}`);
// }
for (A = 100; A<=200; A++){
    console.log(`A = ${A}`)
}

// let a = 100;
// while(a <= 200) {
//     if(a % 2){
//         console.log("-")
//     } else {
//         console.log("*")
//     } 
//     a++
// }
for (a = 100; a<=200; a++){
    if (a%2 == 0){
        console.log("-")
    } else {
        console.log("*")
    } 
}
for (let i = 0; i < 10; i++) {
    for (let b = 1; b <=10; b++){
        console.log(b)
    }
}

let today = new Date();
let day = today.getDay();
switch(day){
    case 0:
        console.log(`It's Wednesday`);
        break;
    case 1:
        console.log(`It's Thursday`)
        break;
    case 2:
        console.log(`It's Friday`)
        break;
    case 3:
        console.log(`It's Saturday`)
    case 4:
        console.log(`It's Sunday`)
        break;
    case 5:
        console.log(`It's Monday`)
        break;
    case 6:
        console.log(`It's Tuesday`)
        break;
    default:
        console.log(`Invalid selection`)
        break;

}