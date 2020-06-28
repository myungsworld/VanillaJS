# VanillaJS

### toggle
주석 안의 내용이 toggle 하나로 사용 가능
'''
const title = document.querySelector('#title');
const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);

    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init() {
    title.addEventListener("click", handleClick);
}

init()
'''
