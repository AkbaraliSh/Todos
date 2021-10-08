const elForm=document.querySelector('.form');
const elInput=document.querySelector('.input__todo');
const elTodoList=document.querySelector('.todolist');
const elAll=document.querySelector('.allstrong')
const elCompleted=document.querySelector('.complatedstrong')
const elActive=document.querySelector('.activestrong')
const elButtonAll=document.querySelector('.all');
const elButtonCompleted=document.querySelector('.completed');
const elButtonActive=document.querySelector('.active')

todos=[];

elTodoList.addEventListener('click',evt=>{
    
    if(evt.target.matches('.delete-icon')){
        const todoid=Number(evt.target.dataset.todoId)
        
        const foundtodoIndex=todos.findIndex(todo=>todo.id==todoid)
        todos.splice(foundtodoIndex,1)
        renderTodo(todos,elTodoList)
    }
    else if(evt.target.matches('.todoCheckbox')){
        const todoid=Number(evt.target.dataset.todoId)
        
        const foundtodo=todos.find(todo=>todo.id==todoid)
        foundtodo.isCompleted=! foundtodo.isCompleted;
        renderTodo(todos,elTodoList)
    };
    
})

function renderTodo(arr,node){
    node.innerHTML=null;
    
    elAll.textContent=todos.length;
    elCompleted.textContent=todos.filter(row=>row.isCompleted===true).length;
    elActive.textContent=todos.filter(row=>row.isCompleted===false).length;
    
    elButtonAll.addEventListener('click' ,()=>{
        renderTodo(todos,elTodoList);
    })
    
    elButtonCompleted.addEventListener('click',()=>{
        const filtered=todos.filter(todo=>todo.isCompleted===true)
        renderTodo(filtered,elTodoList)
    })
    
    elButtonActive.addEventListener('click',()=>{
        const filtered=todos.filter(todo=>todo.isCompleted===false)
        renderTodo(filtered,elTodoList)
    })
    
    arr.forEach(todo => {
        const elnewli=document.createElement('li');
        const elnewCheckbox=document.createElement('input');
        const eltext=document.createElement('p');
        const elicon=document.createElement('i');
        
        elnewli.setAttribute('class','newli')
        elicon.setAttribute('class','fas fa-trash delete-icon')
        eltext.setAttribute('class','text')
        elnewCheckbox.setAttribute('class','todoCheckbox')
        
        elicon.dataset.todoId=todo.id;
        elicon.dataset.todoTitle=todo.title;
        elnewCheckbox.dataset.todoId=todo.id;
        
        if(todo.isCompleted){
            elnewCheckbox.checked=true;
        }
        
        
        
        
        eltext.textContent=todo.title;
        elnewCheckbox.type='checkbox';
        
        elnewli.appendChild(elnewCheckbox);
        elnewli.appendChild(eltext)
        elnewli.appendChild(elicon);
        node.appendChild(elnewli);
        
        
    });
}

elForm.addEventListener('submit',evt=>{
    evt.preventDefault();
    
    const InputValue=elInput.value.trim();
    const newTodo={
        id:todos[todos.length-1]?.id+1 || 0,
        title:InputValue,
        isCompleted:false,
    };
    
    todos.push(newTodo);
    
    renderTodo(todos,elTodoList);
    
    elInput.value=null;
})