function fun()
{
    console.log("the value of x is",x);
    var x=10;    // 
    console.log("the value of x is",x);
}
fun();

function fun1()
{
    console.log("the value of x is",x);
    let x=10;    //  error not define the let variable inside the class
    console.log("the value of x is",x);

}
fun1();