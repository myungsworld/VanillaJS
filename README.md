# VanillaJS
![JS](https://user-images.githubusercontent.com/56465854/86203363-cbb43300-bb9f-11ea-8426-a41f116ebb3a.png)
### toggle
주석 안의 내용이 toggle 하나로 사용 가능

```javascript
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

```
