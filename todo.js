// const toDoForm = document.querySelector('.js-toDoForm'),
//       toDoInput = toDoForm.querySelector('input'),
//       toDoList = document.querySelector('.js-toDoList');

// const TODOS_LS = 'toDos';

// const toDos = [];

// function saveToDos(){
//     localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
// }

// function paintToDo(text) {
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     const span = document.createElement("span");
//     const newId = toDos.length + 1;
//     delBtn.innerText="X";
//     span.innerText= text;
//     li.append(delBtn);
//     li.append(span);
//     li.id = newId; 
//     toDoList.appendChild(li);
//     const toDoObj = {
//         text : text,
//         id : newId
//     };
//     toDos.push(toDoObj);
//     saveToDos();
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDo(currentValue)
//     toDoInput.value="";
// }

// function loadToDos() {
//     const loadedToDos = localStorage.getItem(TODOS_LS);
//     if(loadedToDos !== null){
//         const parsedToDos = JSON.parse(loadedToDos);
//         parsedToDos.forEach(function(toDo){
//             paintToDo(toDo.text);
//         })
//     }
// }

// function init(){
//     loadToDos();
//     toDoForm.addEventListener("submit",handleSubmit);
// }

// init();

//forEach 와 filter 는 li에 있는 모든 item을 위한 함수를 실행 시키는 것

const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
// const를 하면 삭제한 투두스가 안들어가서 let으로 해야함
let toDos = [];


function deleteToDo(event) {
    const btn = event.target;
    const del = btn.parentNode;
    toDoList.removeChild(del);
// 배열중 return 값이 true 인것만 이용해서 다시 배열 생성
    const cleanToDos = toDos.filter(function(toDo){ 
        return toDo.id !== parseInt(del.id); 
    })
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText= 'X';
    span.innerText= text;
    li.append(delBtn);
    li.append(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //JSON.parse(loadedToDos)로 스트링을 객체로 다시 표현
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
    
}

init();