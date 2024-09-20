function loadTodos(){
    // this function will load the  todos from the browers
     

     const todo=JSON.parse(localStorage.getItem("todos")) || {"todoList": []}; // null hai to empty arry return kre ga

    console.log(todo);
    return todo;

}
function addtodolocalstorage(todotext){
   const todo= loadTodos();
   todo.todoList.push(todotext);// todos array k andr todotext ko push kr deneg
   localStorage.setItem("todos",JSON.stringify(todo));

}

 document.addEventListener("DOMContentLoaded",()=>{
  const todoinput=  document.getElementById("todoinput");

  todoinput.addEventListener("change", (event) => {
    //this callback method is fired everytime there is a change in the input tag
    //console.log("something change",todoinput.value) // todoinput-get the value in the  input text area 

    const todotext=event.target.value;
    console.log(event.target.value=todotext.trim());

  });

  const submitbutton=document.getElementById("addtodo")
  addtodo.addEventListener("click", () => {
   
    const todotext=todoinput.value;//todotext me value aa gyi input ki

    if(todotext==''){
        alert("Plese write something for the todo")
    }
    else{
        addtodolocalstorage(todotext); //add todo in the local storage
    }

  })
   
  
  
  loadTodos();

})