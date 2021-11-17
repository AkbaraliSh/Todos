const elForm=document.querySelector('.form');
const elInput=document.querySelector('.input__todo');
const elTodoList=document.querySelector('.todolist');
const elAll=document.querySelector('.allstrong')
const elCompleted=document.querySelector('.complatedstrong')
const elActive=document.querySelector('.activestrong')
const localTodo=JSON.parse(window.localStorage.getItem('todos'))
const NextBtn=document.querySelector('.next-btn')
const UserForm=document.querySelector('.userForm')
const RandomBlock=document.querySelector('.Random')

// //RANDOM
const elRandomForm=document.querySelector('.RandomForm');
const elOutPutNumber=document.querySelector('.OutPutNumber');
const elrandomNumber=document.querySelector('.randomNumber')

todos=[] || localTodo;

elTodoList.addEventListener('click',evt=>{
   
   if(evt.target.matches('.delete-icon')){
      const todoid=Number(evt.target.dataset.todoId)
      
      const foundtodoIndex=todos.findIndex(todo=>todo.id==todoid)
      todos.splice(foundtodoIndex,1)
      window.localStorage.setItem('todos',JSON.stringify(todos))
      renderTodo(todos,elTodoList)
   }
   
})



function renderTodo(arr,node){
   node.innerHTML=null;
   
   arr.forEach(todo => {
      const elnewli=document.createElement('li');
      const eltext=document.createElement('p');
      
      const elnumber=document.createElement('p');
      const elicon=document.createElement('i');
      
      elnewli.setAttribute('class','newli')
      elicon.setAttribute('class','fas fa-trash delete-icon')
      eltext.setAttribute('class','text')
      elnumber.setAttribute('class','number')
      
      elicon.dataset.todoId=todo.id;
      elicon.dataset.todoTitle=todo.title;
      
      
      eltext.textContent=todo.title;
      
      elnewli.appendChild(eltext)
      elnewli.appendChild(elnumber)
      elnewli.appendChild(elicon);
      node.appendChild(elnewli);
      
      
   });
}

// // if(document.querySelector('.input__todo').value==' '){
//    document.getElementById("Randomclick").disabled = true;
// }else if(document.querySelector('.input__todo').value!==' '){
//    document.getElementById("Randomclick").disabled =false;
// }


elRandomForm.addEventListener('submit',evt=>{
   evt.preventDefault();
   elOutPutNumberValue=elOutPutNumber.value.trim();
   if(elOutPutNumberValue>0){
      const random =[]
      Random(random)
   }
   else{
      alert('Musbat son kiriting')
   }
   elOutPutNumberValue=null;
})


function Random(arr) {
   
   const elRandom__number=document.querySelector('.Random__number')
   
   for (let i = 0; i < elOutPutNumberValue; i++) {
      let elrandom=Math.floor(Math.random() * 6000);
      
      arr.push(elrandom)
      
   }
   
   elRandom__number.textContent=String(arr.join(',').split(' '))
   
   let numberP = document.querySelectorAll('.number')
   let p1 = arr.filter(item=>item <= 1000 && item>0).length
   let p2 = arr.filter(item=>item>1000 && item<1999 ).length
   let p3 = arr.filter(item=>item>=2000 && item<2999).length
   let p4= arr.filter(item=>item>=3000 && item<3999).length
   let p5 = arr.filter(item=>item>=4000 && item<4999).length
   let p6 = arr.filter(item=>item>=5000 && item<5999).length
   
   
   
   numberP[0].textContent = p1
   numberP[1].textContent = p2
   numberP[2].textContent = p3
   numberP[3].textContent = p4
   numberP[4].textContent = p5
   numberP[5].textContent = p6
   
}

elForm.addEventListener('submit',evt=>{
   evt.preventDefault();
   
   const InputValue=elInput.value.trim();
   const newTodo={
      id:todos[todos.length-1]?.id+1 || 0,
      title:InputValue,
   };
   
   todos.push(newTodo);
   
   renderTodo(todos,elTodoList);
   window.localStorage.setItem('todos',JSON.stringify(todos))
   
   elInput.value=null;
})
NextBtn.addEventListener('click',()=>{
   UserForm.style.display='none'
   RandomBlock.style.display='block'
   eliconNone=document.querySelectorAll('.delete-icon')
   for (let i = 0; i < eliconNone.length; i++) {
      eliconNone[i].style.display='none'
      
   }
})
// arr.filter(number=>{
//    if(number>=0 && number<1000 ){
//       // z.textContent++
//    }
//    if(number>=1000 && number<1999 && numberId.textContent==1){
//      numberP.textContent=numberP.textContent+1
//    }
//    if(number>=2000 && number<2999){
//       // d.textContent++
//    }
//    if(number>=3000 && number<3999){
//       // f.textContent++
//    }
//    if(number>=4000 && number<4999){
//       // a.textContent++
//    }
//    if(number>=5000 && number<5999  ){
//       // q.textContent++
//    }

// })