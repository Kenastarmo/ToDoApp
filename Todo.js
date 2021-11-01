const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

todoButton.addEventListener('click',dodajTodo)
todoList.addEventListener('click',izbrisiCekiraj)

function dodajTodo(e){
    e.preventDefault();

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo-div");
    
    const todoItem=document.createElement('li');
    todoItem.innerText=todoInput.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);

    const completedBtn=document.createElement('button');
    completedBtn.innerHTML='<i class=" fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);

    const trashBtn=document.createElement('button');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function izbrisiCekiraj(e){
    const item=e.target;
    if(item.classList[0] === 'trash-btn')
    {
        const dio=item.parentElement;
        dio.remove();
    }

    if(item.classList[0] === 'completed-btn')
    {
        const dio=item.parentElement;
        dio.classList.toggle('completed');
    }
}



