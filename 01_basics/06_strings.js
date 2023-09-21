const name="Abhinav"
const repoCount=50

//string concatenation
/*console.log(name+ repoCount+"Value");
function myInfo(fname, lname, country) {
    return "My name is " + fname + " " + lname + ". " + country + " is my favorite country."; 
}
console.log(myInfo("Abhinav", "Kumar", "India"));
*/

//string interpolation
/*
function myInfo(fname, lname, country) {
    return `My name is ${fname} ${lname}. ${country} is my favorite country`; 
}
console.log(myInfo("Abhinav", "Kumar", "India"));

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
*/

const gameName=new String('Abhinav')  //another way of declaring string ; string is a object and has property(length) and methods

console.log(gameName[0]); //string is not an array its an object which store key value pair
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.bold())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4) // 0 to n-1
console.log(newString)

const anotherString=gameName.slice(-8,-4)
console.log(anotherString);

const newStringOne="    abhinav     ";
console.log(newStringOne.trim());

const url="http://abhinav.com/abhinav%20kumar"
console.log(url.replace('%20',"-"));

console.log(url.includes('abhinav'));

console.log()