let score="33"

console.log(typeof score)
console.log(typeof(score))

let value=Number(score)
console.log(typeof value)

let a="33abc"
let b=Number(a)
console.log(typeof b)
console.log(b)

//NaN stands for Not a Number
//if we use null in place of 33abc it will give 0 as output and in case of undefined it will give NaN and for true it will give1
//and for false it will give 0

let c=1
let d=Boolean(c)
console.log(d)

//For 1 it will give true,for 0 it will give false, for empty strings it will give false and if string has value it will give true