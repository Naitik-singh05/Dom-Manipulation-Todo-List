const data={id:1,name:"satyam",address:"etawah"}

console.log(Object.keys(data)); // this method access the only key 

console.log(Object.values(data))

 console.log(Object.entries(data))

console.log(Object.keys(data).length)// no of key values pair



// seal method
const product={name:"iphone 14 prp",company:"apple",color:"white"}

Object.seal(product);
console.log(product)

product.price="125000" // addition not allowed
console.log(product)

delete product.name; // deletion  not allowed
console.log(product)

product.name="google pixel 7"
console.log(product)

//freeze method
const product1={name:"iphone 14 prp",company:"apple",color:"white"}

Object.freeze(product1);
console.log(product1)

product.price="125000" // addition not allowed
console.log(product1)

delete product1.name; // deletion  not allowed
console.log(product1)

product1.name="google pixel 7"// update not allowed
console.log(product1)

// isfrozen
const x= {a:"10",b:"20"}
Object.freeze(x)
  console.log(Object.isFrozen(x));
 console.log(Object.isSealed(x));

 // is Seal
 const y= {a:"10",b:"20"}
 Object.seal(y)
  console.log(Object.isFrozen(y));
 console.log(Object.isSealed(y));

//  object.preventextenxion

 Object.preventExtensions(data)

 data.age="546"; //add not allowed
 console.log(data)
 data.name="naitik"// update allowed
 console.log(data)
 delete.address(data)
 console.log(data)











