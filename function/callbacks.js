 function h(x,fn)
 {
    // h-is a Hof
    // fn- call back synchronation call back(code execution  line by line ) 
    console.log(x*x);
    fn(10);
 }

//  h(5,function()
//  {
//     console.log("done with callback");

//  })
h(5,exec);

function exec(n)
{
    console.log("square valueis",n)
}