let obj={id:1,name:"naitik",salary:10000};
console.log(obj)

let emp=new Object()
console.log(emp)

// create a new object
function Emp(i,n,s)
{
    this.id=i;
    this.name=n;
    this.salary=s;

}
let obj1=new Emp(101,"satyam",12000)
console.log(obj1)

//fetch the value below given  the two method
console.log(obj.id)
console.log(obj["name"])
//update the value
obj.id=1010
obj["name"]="babu"
console.log(obj)

//delete the data
delete obj.id
console.log(obj)