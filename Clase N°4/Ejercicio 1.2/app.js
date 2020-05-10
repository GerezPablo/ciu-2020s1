function myFunction() {
    document.querySelector("button").addEventListener(this, beeper())
}



function beeper() {
    document.querySelector("body").innerHTML += "Beep\n";
    document.querySelector("body").classList.toggle("color");
    removeEventListener("abort")
}