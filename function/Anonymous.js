 let x=function()
 {
    console.log("anonymous");
 }
 x();

 //  Immediately Invoked Function Execution
(function fun(x)
 {

     console.log(x*x);
 })(5);