function mouseMove() {
    document.querySelector("mousemove").addEventListener(this, "callback()")
}


function callback() {
    var mouse =document.querySelector("mousemove")
    mouse.clientX = left;
    mouse.clientY = top;

}


/*
  => e.clientX = left
  => e.clientY = top
*/


/*
En un html nuevo crea una con position: fixed y este src="https://media.giphy.com/media/MtQxKzhytFsmQ/giphy.gif"
Desde css, seleccióna el body dale un height: 100vh; esto hace que el alto del body sea el 100% de la pantalla.
selecciona la imagen y le cambia su propiedad css "top" por el valor de la propiedad .clientY y left por el valor de la propiedad
clientX.
Descrubre como ocultar el cursor con CSS.
Cambia el código para que la imagen te siga sólo si estás apretando el click.
*/