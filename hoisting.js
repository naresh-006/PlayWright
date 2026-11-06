var x 
console.log(x) //undefined
var x=10
console.log(x)
//-------Hoisting using let
console.log(y) //ReferenceError: Cannot access 'y' before initialization
let y=20
console.log(y)
//-------Hoisting using const
console.log(z) //ReferenceError: Cannot access 'z' before initialization
const z=30
console.log(z)