function myFunction() {
    var parrafos = document.querySelector("p")
    for (i = 0; i < parrafos.length; i++) { 
        i.addEventListener(this, resaltar())
}



function resaltar() {
    this.classList.toggle("resaltado");
    //removeEventListener("abort")
}




}
