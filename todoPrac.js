// const todoForm = document.querySelector('.js-toDoForm'),
//     toDoInput = todoForm.querySelector('input'),
//     toDoList = document.querySelector(',js-toDoList');
// const TODOS_LS = 'todos';
// let toDos = [];

// function handleClick(event) {
//     const btn = event.target;
//     const del = btn.parentNode;
//     toDoList.removeChild(del);

// }

// function saveToDos() {
//     localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
// }

// function paintToDo(text) {
//     const li = document.createElement('li');
//     const delBtn = document.createElement('button');
//     delBtn.addEventListener('click',handleClick);
//     const span = docuemnt.createElement('span');
//     const newId = toDos.length + 1;
//     delBtn.innerText = 'x';
//     span.innterText = text;
//     li.append(delBtn);
//     li.append(span);
//     li.id = newId;
//     toDoList.appendChild(li);
//     const toDoObj = {
//         text : text,
//         id : newId

//     };
//     toDos.push(toDoObj);
//     saveToDos;
// }

// function loadToDos() {
//     const loadedToDos = localStorage.getItem(TODOS_LS)
//     if(loadedToDos !== null) {
//         const parsedToDos = JSON.parse(loadedToDos);
//         parsedToDos.forEach(function(toDo){
//             paintToDo(toDo.text)
//         })
//     }
// }

// function handleSubmit(event){
//     event.preventDefault
//     const currentValue = input.value;
//     paintToDo(currentValue);
//     currentValue='';

// }

// function init(){
//     loadToDos();
//     toDoForm.addEventListener('submit',handleSubmit);
// }    

// init();