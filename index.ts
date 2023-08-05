// 2nd task
let Name:string = "Eric ";
console.log('Hello '+  Name+' would you like to learn some Python today?');
// 3rd task

console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:",Name.toUpperCase());

const titlecaseName = Name.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
//4th and 5th task
const personName: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";

const message: string = `${personName} once said, "${quote}"`;
console.log(message);
// 6th task

const newName: string = "\t   \n  Bilal   \t\n   ";
console.log("Name with whitespace:", newName);
console.log("Stripped name:", newName.trim());
//7th and 8th task
console.log("Addition Result:", 4 + 4); 
console.log("Subtraction Result:", 12 - 4);
console.log("Multiplication Result:",2 * 4);
console.log("Division Result:",16 / 2);
 
//9th task
const favoriteNumber: number = 22;
console.log('My favorite number is ' + favoriteNumber);