//selector 

const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    switch(buttonText) {
        case "AC":
            output.innerText = "";
            result.innerText = "0";
            result.style.animation = "";
            output.style.animation = "";
            break;
        case "DEL":
            output.textContent = output.textContent.substr(0,output.textContent.length-1);
            break;
        case "=":
            result.innerText = eval(output.innerText);
            result.style.animation = "big 0.5s ease-in-out";
            output.style.animation = "small 0.5s ease-in-out";
            result.style.animationFillMode = "forwards";
            output.style.animationFillMode = "forwards";
            break;
        default:
            output.textContent += buttonText;
            break;
    }}

window.addEventListener('keydown', (event) => {
    key = event.key;
    handlePress(key);
})

function handlePress(key) {
    if (key == "a") {
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    } else if (key == "=" || key == "Enter") {
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
        return;
    } else if (key >= "0" && key <= "9" || key == "+" || key == "-" || key == "*" || key == "/" || key == "(" || key == ")" || key == ".") {
        output.textContent += key;
        return;
    } else if (key == "Backspace") {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }
}