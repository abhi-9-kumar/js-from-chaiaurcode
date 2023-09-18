//Primitive
//7 types: String,Number,Boolean,Null,BigInt,Symbol

const score=100
const scoreValue=200.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123') //thats the use of symbol to provide uniqueness even though same value is passed they will return
//different value

//console.log(id==anotherId) will return false

const bigNumber=13289238472230;

//Non-Primitive(Reference type) - allocated reference in the memory
//Array,Objects,Functions

const heroes=['Shaktiman','Nagraj','Chota Bheem']

let myObj={
    name:"Abhinav",
    age:22,                 //object definition example
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof score)          //number
console.log(typeof scoreValue)    //number
console.log(typeof isLoggedIn)    //boolean
console.log(typeof outsideTemp)   //object
console.log(typeof id)            //symbol
console.log(typeof bigNumber)     //number
console.log(typeof heroes)          //object
console.log(typeof myObj)           //object
console.log(typeof myFunction)      //function