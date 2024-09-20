let arr=[1,10,30,52,60]

console.log(arr.length) // length is not a function it i a property\key

arr.push(80); //add  the element at the and
console.log(arr)

console.log(arr.pop())//delete element from the end

arr.shift()  //delete element from the start
console.log(arr)

arr.unshift(100)//add element at the start
console.log(arr)

console.log(arr.indexOf(52))

let a=[1,2,3]
let b=[5,6,2]
let a1=a.concat(b);
console.log(a1)

let s= a.join("") // print array like a string
console.log(s)

let x= a.join("$") // print array like a string
console.log(x)

let y=[10,20,30,40,50,60,70,80]
console.log(y.slice(2,5))//2 is starting point 5 is ending point

y.splice(2,2,5);// 2is the position of the element add,2 is the  numberof deleting the value,add value
console.log(y);

