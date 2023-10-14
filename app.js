
// // task (counter) 
let number = 0
let counter = document.querySelector("#counter")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let increase = document.querySelector("#increase")

function increaseNum() {
    ++number
    counter.innerHTML = number
    counter.style.color = "blue"
}

function decreaseNum() {
    if (number >  0) {
        --number
        counter.innerHTML = number
        counter.style.color = "red"
    } 
    
}

function resetNum() {
    number = 0
    counter.innerHTML = number
    counter.style.color = "black"
}