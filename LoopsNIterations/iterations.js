
let A = 100;
while(A <= 200) {
    A++;
    console.log(`A = ${A}`);
    break;
}

let a = 100;
while(a <= 200) {
    if(a % 2){
        console.log("-")
    } else {
        console.log("*")
    } 
    a++
}

for (let i = 0; i < 10; i++) {
    for (let b = 1; b <=10; b++){
        console.log(b)
    }
}