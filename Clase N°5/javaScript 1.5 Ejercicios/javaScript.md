# Ejercicios

1. ¿En qué parte del código se genera un closure? ¿Por qué?

    En 
    ```java
    cambiarDimensionFuente(size)
    ``` 
    ya que la funcion externa retorna la interna.
    ```java 
    function()
    ```

2. ¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?

    En la funcion 
    ```java
    setClicks()
    ```

3. Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas <script> … </script>. ¿Qué mensaje de error te muestra la consola de depuración? (Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?
    
    * Cannot set property 'onclick' of null at app.js:11
    * index.html:9 Uncaught ReferenceError: setClicks is not defined
    
    Porque al cargar la pagina quiere llamar a la funcion y esta no esta definida.

4. ¿Debemos escribir ```document.getElementById('fuente-8').onclick = size8;``` ó ```document.getElementById('fuente-8').onclick = size8();``` ? ¿Por qué?

    La segunda opcion, porque así se llama a la funcion interna que retorna la funcion que esta almacenada en la variable

5. Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?

    ```size8()``` de esta forma se va a ejecutar la funcion ```function()``` que cambia el tamaño de la fuente dentro de la funcion ```setClicks()``` en vez de la funcion ```setClicks()``` en si.

6. Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?
    
    Si bien la implementacion de closures permite trabajar a las funciones dentro de un mismo entorno, genera bajas en la performance, aunque este programa es chico, no es necesaria la implementacion de los mismos.

7. Reescribí el código (hacelo como mejor creas cambiando todo aquello que consideres necesario) de forma que obtengas el mismo resultado pero sin hacer uso de closures.