// ECMA-Scrit-6
// let + const

// console.log(str)
// var str = "HI";

let str ="adeel";
str ="hassan";
console.log(str)


// const tr ="adeel";
// tr ="hassan";
// console.log(tr)


// const tr =["adeel"];
// tr =["hassan"]
// console.log(tr)


// global scope hai
if(true){
    var a = "test";
}
console.log(a)

// function scope hai
function abc(){
    var a = "test";
}
abc()
console.log(a)



// block let or const scope hai


// if(true){
//     let a = "test";
// }
// console.log(a)

// if(true){
//     const a = "test";
// }
// console.log(a)


// template string

let firstName ="Adeel";
let lastName = "Hassan";
console.log(`${firstName}${lastName}`)
