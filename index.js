// const monday = 'Mon';
// const tue = 'Tue';
// const wed = 'Wed';
// const thu = 'Thu';
// const fri = 'Fri';

// console.log(monday, tue,wed,thu,fri);

// const daysOfWeek = [
//     'Mon','Tue','Wed',
//     'Thu','Fri','Sat',
//     'Sun','Sun',54,true];
// console.log(daysOfWeek);

// const songInfo = {
//     name:"song",
//     age:"27",
//     gender:"Male",
//     isHandsome:true,
//     favMovies:["Road of rings","HarryPotter","IronMan"],
//     favFood:[
//     {
//         name: "burger",
//         fatty:true

//     },
//     {
//         name: "min",
//         fartty:false
//     }
//     ]
// }

// console.log(songInfo); 
// console.log(songInfo.age);
// console.log(songInfo.favFood[1].name);

// function sayHello(name,age) {
//     for (let i = 0; i<3 ; i++) {
//         console.log(`Hello ${name} you are ${age} years old `)
//     }
//     return 0;
// }

// const greetSong = sayHello("song",27);

// console.log(greetSong);

// const calculator = {
//     plus: function(a,b) {
//         return a + b;
//     },
//     minus: function(a,b) {
//         return a - b;
//     },
//     multiple: function(a,b) {
//         return a * b;
//     },
//     divide: function(a,b) {
//         return a/b;
//     }
// }
// console.log(calculator.plus(5,5))
// console.log(calculator.minus(5,5))
// console.log(calculator.multiple(5,5))
// console.log(calculator.divide(5,5))
 
const title = document.querySelector('#title');
// title.innerHTML = "Hi! From JS";
// title.style.color = 'red'; 
// document.title = "i owe you"; 

function handleClick() {

    title.style.color ="blue";
}

window.addEventListener("click",handleClick);