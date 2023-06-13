const app = require('./app')

// var x= '20';
const arr = [2,3,6,8,9,7,5,4,3]
// console.log(arr[0])

console.log(app.x) // 10
console.log(app.y) //20
console.log(app.z()) //30
console.log(app) // { x:10 , y:20 , x:[function:z]}

//filter works on array only
arr.filter((item)=>{
    console.log(item) //traverse the array
})


let result = arr.filter((x)=>{
     return x===3;
})

console.log(result) // [3,3]

let r = arr.filter((x)=>{
    return x>3;
})

console.log(r) // gives output greater than 3