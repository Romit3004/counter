let head = document.querySelector(".header") ;
head.innerHTML = "New Header" ;

let second = document.querySelector(".second") ;
second.innerHTML = "Nothing!" ;

let newDiv = document.createElement("div") ;
newDiv.innerHTML = "<h3>Hello World</h3>" ;
document.body.appendChild(newDiv) ;

function Click() {
    console.log("You have signed up!") ;
}

function HandleDBL() {
    console.log("You have clicked twice") ;
}

function MouseEnter() {
    console.log("You have entered") ;
}

function MouseLeave() {
    console.log("You have left") ;
}

function KeyDown(event) {
    console.log("key down : " + event.key)
}

function KeyUp(event) {
    console.log("key up : " + event.key)
}

function KeyPress(event) {
    console.log("key press : " + event.key)
}

function Submit(event) {
    event.preventDefault ;
    console.log("Form is submitted") ;
}

function Focus() {
    console.log("Form is focused") ;
}

function Blur() {
    console.log("Form is blurred") ;
}

function Change() {
    console.log("Selection changed") ;
}

