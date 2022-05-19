'use strict';

let darthVader = {
    famousQuote: "'I am your father'",
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(`Darth Vader once told Luke Skywalker... ${darthVader.famousQuote}`);
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`)
console.log('');
let obiWanKenobi = {
    famousQuote: "'Hello there'",
    allegiance: "Jedi Council and Republic",
    weapon: "Lightsaber",
    sith: false
};

console.log(`Obi Wan Kenobi loves saying ${obiWanKenobi.famousQuote}`);
console.log(`Obi Wan Kenobi's allegiance is to the ${obiWanKenobi.allegiance}`);
console.log(`Obi Wan Kenobi's weapon of choice is a ${obiWanKenobi.weapon}`);
console.log(`Obi Wan Kenobi is a Sith? ${obiWanKenobi.sith}`);
console.log(`Obi Wan Kenobi is a Jedi? ${obiWanKenobi.sith ? "false" : "true"}`)
console.log('');

let myArray = ["hello",'everyone'];
 console.log(myArray.length);
 myArray.push("goodbye");
 console.log(myArray.length);
 myArray.shift();
    for(let eachElement of myArray) {
        console.log(eachElement);
 }