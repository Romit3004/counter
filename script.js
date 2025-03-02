let value = document.querySelector(".count") ;
let count = parseInt(value.innerHTML) ; 

function Increase() {
    count += 1 ;
    value.innerHTML =  count ;
}

function Decrease() {
    if (count == 0) {
        count = 0 ;
        value.innerHTML = count ;
    }
    else {
        count -= 1 ;
        value.innerHTML = count
    }
}

function Clear() {
    count = 0 ;
    value.innerHTML = count ;
}
