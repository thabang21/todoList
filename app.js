
let todos;

//getting data from localstorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedTodos) ) {
    todos = savedTodos;
} else {

    todos = [{
        title:"sleep",
        dueDate:"2022-01-12",
        id: "id1"
      },
      {
          title:"code",
          dueDate:"2022-02-20",
          id: "id2"
        
        }]
      
}






function addtodo(){

    let title= document.getElementById("title").value;
    let dueDate= document.getElementById("todo-date").value;
    let id=" "+ new Date().getTime()


    if(title.length > 2){
        todos.push({title:title, dueDate:dueDate, id:id})
    }else{
        alert("Please Enter correct data")
    }

  
    saveTodos(todos)
   

    render()
    
}

let saveTodos=()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(e){
    todos=todos.filter(todo=>{
        if(todo.id===e.target.id){
            return false
        }else{
            return true
        }
    })
    saveTodos(todos)
    render()
}






function render(){

    document.getElementById("display").innerText="";

    todos.map((todo)=>{

        const {title ,dueDate} =todo
        let div= document.createElement("div")
        div.setAttribute("class","innerContent")

        let content=`
            <p class="item">${title} </p>
            <p class="item">${dueDate} </p>

        `

        div.innerHTML=content
        let display = document.getElementById("display")      

        let deleteButton =document.createElement("button")
      
        deleteButton.innerText="DELETE"
     
        div.append(deleteButton)
        display.append(div)     

        deleteButton.onclick=deleteTodo
        deleteButton.id=todo.id
      

    })
}
render();