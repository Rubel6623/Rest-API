function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>displayTodos(data))
}

function displayTodos(todos){
    const todoContainer=document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv=document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.innerHTML=`
        <h3>title: ${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p>complete Status : ${todo.completed === true ? 'completed':'Not complete'}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
    console.log(todos);
}
loadTodos();