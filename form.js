// Coloca tu código JavaScript dentro de un evento DOMContentLoaded
// Este evento me ayudo para solucionar el problema de carga del código javascript.
// Usar en todos los archivos JS. Es buena práctica.

document.addEventListener('DOMContentLoaded', function() {

// ANIMACION AL SELECCIONAR EL USUARIO UNA .SELECCION
const selecciones = document.querySelectorAll('.selecciones');

selecciones.forEach(function(imagen) {

imagen.setAttribute('data-borde-original', imagen.style.border); // Almacenar el estilo de borde original en un atributo personalizado
imagen.setAttribute('data-scale-original', imagen.style.transform); // Almacenar el estilo de escala original en un atributo personalizado

imagen.addEventListener('click', function() {
const seleccionada = imagen.getAttribute('data-seleccionada') === 'true';

if (seleccionada) { // Si ya está seleccionada, quitar el borde, escala y cambiar el estado a no seleccionada
imagen.style.border = imagen.getAttribute('data-borde-original');
imagen.style.transform = imagen.getAttribute('data-scale-original');
imagen.classList.remove('seleccionada');
imagen.setAttribute('data-seleccionada', 'false');
} 
else {
selecciones.forEach(function(otraImagen) {
if (otraImagen !== imagen) {
otraImagen.style.border = otraImagen.getAttribute('data-borde-original');
otraImagen.style.transform = otraImagen.getAttribute('data-scale-original');
otraImagen.classList.remove('seleccionada');
otraImagen.setAttribute('data-seleccionada', 'false');}
});

// Aplicar el borde verde y escala a la imagen seleccionada
imagen.style.border = '10px solid green';
imagen.style.transform = 'scale(1.3)';
imagen.classList.add('seleccionada');
imagen.setAttribute('data-seleccionada', 'true');
}
});
});

// PRIMERA SECCIÓN
// MENSAJE AL USAR EL PRIMER INPUT (#FIRST-INPUT)
const input = document.getElementById('first-input');       // Se obtienen los objetos para usarlos en el posterior evento
const aclaracion = document.getElementById('aclaracion'); 

let mensajeMostrado = false; // Variable para rastrear si el mensaje se ha mostrado



input.addEventListener('click', function() {          // Agrega un evento de escucha para el evento "click" en el input, es decir, al hacer click en el sucederá {} 
if (!mensajeMostrado){               
aclaracion.style.display = 'block';             // {Mostrar el div #aclaracion}

setTimeout(function() {                         //Nueva funcion que determina que al haberse mostrado el div #aclaracion :               
aclaracion.style.display = 'none';        //Se ocultará nuevamente
mensajeMostrado = true;                   //Le cambia el valor a la variable mensajeMostrado para que la funcion anterior solo pueda suceder una vez.      
}, 6000);                                     //8000 = 8 segundos, el tiempo que tardará en ocultarse nuevamente
}    
});


// if (!mensajeMostrado) {} === Si mensajeMostrado es FALSE.
// if (mensajeMostrado)  {} === Si mensajeMostrado es TRUE

//////
// MI RTA EN LA PRIMER SECCIÓN
// Animación responsive de las copas IMG para mostrar y volver a esconder al clickear en ellas
// 1ER RTA
const copa = document.getElementById('copa');
const rta = document.getElementById('message');

copa.addEventListener('click', function () 
{if (rta.style.display === 'inline') 
{rta.style.display = 'none'}
else 
{rta.style.display = 'inline'}
});



// 2DA RTA
const copaDos = document.getElementById('copaDos');
const rtaDos = document.getElementById('messageDos');

copaDos.addEventListener('click', function () 
{if (rtaDos.style.display === 'inline') 
{rtaDos.style.display = 'none'}
else 
{rtaDos.style.display = 'inline'}
});



// 3ER RTA
const copaTres = document.getElementById('copaTres');
const rtaTres = document.getElementById('messageTres');

copaTres.addEventListener('click', function () 
{if (rtaTres.style.display === 'inline') 
{rtaTres.style.display = 'none'}
else 
{rtaTres.style.display = 'inline'}

});



// // // //  
// // // // MIS RESPUESTAS EN LA 3ER SECCIÓN.
const copaCarrusel = document.getElementById('copaCarruselMadrid');
const rtaCarrusel = document.getElementById('rtaCarruselMadrid');

copaCarrusel.addEventListener('click', function () 
{if (rtaCarrusel.style.display === 'inline') 
{rtaCarrusel.style.display = 'none'}
else 
{rtaCarrusel.style.display = 'inline'}
});


const copaCarruselWarriors = document.getElementById('copaCarruselWarriors');
const rtaCarruselWarriors = document.getElementById('rtaCarruselWarriors');

copaCarruselWarriors.addEventListener('click', function () 
{if (rtaCarruselWarriors.style.display === 'inline') 
{rtaCarruselWarriors.style.display = 'none'}
else 
{rtaCarruselWarriors.style.display = 'inline'}
});


// SEGUNDA PARTE DEL THIRD SECTION
// FIRST INPUT TEXT
const firstCopaSectionThird = document.getElementById('copa1de4');
const firstRtaSectionThird = document.getElementById('mensaje1de4');

firstCopaSectionThird.addEventListener('click', function () 
{if (firstRtaSectionThird.style.display === 'inline') 
{firstRtaSectionThird.style.display = 'none'}
else 
{firstRtaSectionThird.style.display = 'inline'}
});

// 
// SECOND INPUT TEXT
const secondCopaSectionThird = document.getElementById('copa2de4');
const secondRtaSectionThird = document.getElementById('mensaje2de4');

secondCopaSectionThird.addEventListener('click', function () 
{if (secondRtaSectionThird.style.display === 'inline') 
{secondRtaSectionThird.style.display = 'none'}
else 
{secondRtaSectionThird.style.display = 'inline'}
});

// 
// THIRD INPUT TEXT
const thirdCopaSectionThird = document.getElementById('copa3de4');
const thirdRtaSectionThird = document.getElementById('mensaje3de4');

thirdCopaSectionThird.addEventListener('click', function () 
{if (thirdRtaSectionThird.style.display === 'inline') 
{thirdRtaSectionThird.style.display = 'none'}
else 
{thirdRtaSectionThird.style.display = 'inline'}
});

// 
// BOX TOP 5 SELECCIONES 
const fourthCopaSectionThird = document.getElementById('copa4de4');
const fourthRtaSectionThird = document.getElementById('mensaje4de4');

fourthCopaSectionThird.addEventListener('click', function () 
{if (fourthRtaSectionThird.style.display === 'inline') 
{fourthRtaSectionThird.style.display = 'none'}
else 
{fourthRtaSectionThird.style.display = 'inline'}
});

// FINALIZAN LAS COPAS 



//////////////////////////////////////////////////////////////////////// 
//                                                                      // SEGUNDA SECCIÓN
//                                                                    // USUARIO ELECCION GOAT FUTBOL.
const imagenesGoats = document.querySelectorAll('.goats');

imagenesGoats.forEach(function(imagen) {

imagen.setAttribute('data-borde-original', imagen.style.border); // Almacenar el estilo de borde original en un atributo personalizado
imagen.setAttribute('data-scale-original', imagen.style.transform); // Almacenar el estilo de escala original en un atributo personalizado

imagen.addEventListener('click', function() {
const seleccionada = imagen.getAttribute('data-seleccionada') === 'true';

if (seleccionada) { // Si ya está seleccionada, quitar el borde, escala y cambiar el estado a no seleccionada
imagen.style.border = imagen.getAttribute('data-borde-original');
imagen.style.transform = imagen.getAttribute('data-scale-original');
imagen.classList.remove('seleccionada');
imagen.setAttribute('data-seleccionada', 'false');
} 
else {
imagenesGoats.forEach(function(otraImagen) {
if (otraImagen !== imagen) {
otraImagen.style.border = otraImagen.getAttribute('data-borde-original');
otraImagen.style.transform = otraImagen.getAttribute('data-scale-original');
otraImagen.classList.remove('seleccionada');
otraImagen.setAttribute('data-seleccionada', 'false');}
});

// Aplicar el borde verde y escala a la imagen seleccionada
imagen.style.border = '10px double green';
imagen.style.transform = 'scale(1.3)';
imagen.classList.add('seleccionada');
imagen.setAttribute('data-seleccionada', 'true');
}
});
});


// 
//  USUARIO ELECCIÓN GOAT NBA
const imagenesGoatsNBA = document.querySelectorAll('.NBA');

imagenesGoatsNBA.forEach(function(imagen) {

imagen.setAttribute('data-borde-original', imagen.style.border);        // Almacenar el estilo de borde original en un atributo personalizado
imagen.setAttribute('data-scale-original', imagen.style.transform);

imagen.addEventListener('click', function() {
const seleccionada = imagen.getAttribute('data-seleccionada') === 'true';

if (seleccionada) {                                                   // Si ya está seleccionada, quitar el borde y cambiar el estado a no seleccionada
imagen.style.border = imagen.getAttribute('data-borde-original');
imagen.style.transform = imagen.getAttribute('data-scale-original');
imagen.classList.remove('seleccionada');
imagen.setAttribute('data-seleccionada', 'false');
} 

else {
imagenesGoatsNBA.forEach(function(otraImagen) {
if (otraImagen !== imagen) {
otraImagen.style.border = otraImagen.getAttribute('data-borde-original');
otraImagen.style.transform = otraImagen.getAttribute('data-scale-original')
otraImagen.classList.remove('seleccionada');
otraImagen.setAttribute('data-seleccionada', 'false');
}});                                                           
imagen.style.border = '10px double green';
imagen.style.transform ='scale(1.3)'
imagen.classList.add('seleccionada'); 
imagen.setAttribute('data-seleccionada', 'true');
}

});
}); 


// USUARIO ELECCIÓN GOAT TENIS

const imagenesGoatsTenis = document.querySelectorAll('.goatsTenis');

imagenesGoatsTenis.forEach(function(imagen) {

imagen.setAttribute('data-borde-original', imagen.style.border);        // Almacenar el estilo de borde original en un atributo personalizado
imagen.setAttribute('data-scale-original', imagen.style.transform);

imagen.addEventListener('click', function() {
const seleccionada = imagen.getAttribute('data-seleccionada') === 'true';

if (seleccionada) {                                                   // Si ya está seleccionada, quitar el borde y cambiar el estado a no seleccionada
imagen.style.border = imagen.getAttribute('data-borde-original');
imagen.style.transform = imagen.getAttribute('data-scale-original')
imagen.classList.remove('seleccionada');
imagen.setAttribute('data-seleccionada', 'false');
} 

else {
imagenesGoatsTenis.forEach(function(otraImagen) {
if (otraImagen !== imagen) {
otraImagen.style.border = otraImagen.getAttribute('data-borde-original');
otraImagen.style.transform = otraImagen.getAttribute('data-scale-original')
otraImagen.classList.remove('seleccionada');
otraImagen.setAttribute('data-seleccionada', 'false');
}});                                                           
imagen.style.border = '10px double green';
imagen.style.transform='scale(1.3)'
imagen.classList.add('seleccionada'); 
imagen.setAttribute('data-seleccionada', 'true');
}

});
});


// imagen.setAttribute('data-escala-original', '1')
// otraImagen.style.transform = 'scale(1)'
// imagen.style.transform = 'scale(1.25)' 
// Estas 3 sintaxis fueron las que hubo que incluir para que al seleccionar otra imagen, la actualmente seleccionada volviera a su estado original y no se bugueara
// y mantuviera el escalado aumentado.



//////////  
// MIS RTAS SEGUNDA SECCIÓN, COPAS CLICKEABLES.
//  MI RTA FUTBOL
const copaRtaFutbol = document.getElementById('copaRtaFutbol');
const imagenRtaFutbol = document.getElementById('imagenRtaFutbol');

copaRtaFutbol.addEventListener('click', function () 
{if (imagenRtaFutbol.style.display === 'inline') 
{imagenRtaFutbol.style.display = 'none'}
else 
{imagenRtaFutbol.style.display = 'inline'}
});

// MI RTA BASKET
const copaRtaBasket = document.getElementById('copaRtaBasket');
const imagenRtaBasket = document.getElementById('imagenRtaBasket');

copaRtaBasket.addEventListener('click', function () 
{if (imagenRtaBasket.style.display === 'inline') 
{imagenRtaBasket.style.display = 'none'}
else 
{imagenRtaBasket.style.display = 'inline'}
});

// MI RTA TENIS 
const copaRtaTenis = document.getElementById('copaRtaTenis');
const imagenRtaTenis = document.getElementById('imagenRtaTenis');

copaRtaTenis.addEventListener('click', function () 
{if (imagenRtaTenis.style.display === 'inline') 
{imagenRtaTenis.style.display = 'none'}
else 
{imagenRtaTenis.style.display = 'inline'}
});




////////////////////////////////////////////////////////////////////////////////////////////  
// TERCERA SECCION
// CARRUSEL DE IMAGENES (CREACIÓN) 

//                                          // CREACIÓN CARRUSEL FUTBOL
const imagesCarrusel = ["RiverPlate.png", "Barca.png", "RealMadrid.jpg", "Bayern.png", "Liverpool.jpg", "ManU.jpg", "Milan.png", "Juventus.png", "Inter.jpg"]; // Lista de imágenes
let currentImageIndex = 0; // Índice de la imagen actual
// 
// VARIABLES QUE REPRESENTAN LOS BOTONES Y LAS IMGS DEL CARRUSEL DE FUTBOL
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const imagen = document.getElementById("imgsCarrusel");


function showImage() {                                // Función para mostrar la imágen actual
imagen.src = imagesCarrusel[currentImageIndex];
}


anterior.addEventListener("click", () => {            // Retroceder una imágen con el botón 'anterior'
currentImageIndex--;
if (currentImageIndex < 0) {
currentImageIndex = imagesCarrusel.length - 1;
}
showImage();
});


siguiente.addEventListener("click", () => {           // Avanazar una imágen con el botón 'siguiente'
currentImageIndex++;
if (currentImageIndex >= imagesCarrusel.length) {
currentImageIndex = 0;
}
showImage();
});


showImage(); // Mostrar la primera imágen al cargar la página



// 
// Animación ante la selección del usuario CARRUSEL FUTBOL
const userRtaCarrusel = document.querySelectorAll('#imgsCarrusel');


userRtaCarrusel.forEach(function(imagen) {
imagen.setAttribute('data-escala-original', '1'); // Almacenar la escala original en un atributo personalizado

imagen.addEventListener('click', function () {
const escala = parseFloat(imagen.getAttribute('data-escala-original'));

if (escala === 1) {
imagen.style.transform = 'scale(1.25)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1.25');
} 
else {                                             // Si la escala es 1.25 (seleccionada), restaurar la escala original
imagen.style.transform = 'scale(1)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1');
}

});
});

// Elimina la animación de Scale(1.25) al darle a los botones 'siguiente' y 'anterior'
let currentIndex = 0

anterior.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarrusel[currentIndex].style.transform = 'scale(1)';
userRtaCarrusel[currentIndex].style.transition = 'transform 0.6s';  
userRtaCarrusel[currentIndex].setAttribute('data-escala-original', '1'); //Elimina el scale.
});

siguiente.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarrusel[currentIndex].style.transform = 'scale(1)';
userRtaCarrusel[currentIndex].style.transition = 'transform 0.6s';
userRtaCarrusel[currentIndex].setAttribute('data-escala-original', '1'); //Elimina el scale
});

//////   





// // // // // // // // // // // // // // // // // // // // // // // // 
//                                                    // CREACIÓN CARRUSEL NBA
const imagesCarruselNBA = [ "Lakers.png", "Celtics.png", "Warriors.png","Bulls.png", "Spurs.png"]; // Lista de imágenes
let currentImageIndexNBA = 0; // Índice de la imágen actual

// VARIABLES QUE REPRESENTAN LOS BOTONES Y LAS IMGS DEL CARRUSEL DE NBA
const anteriorNBA = document.getElementById("anteriorNBA");
const siguienteNBA = document.getElementById("siguienteNBA");
const imagenNBA = document.getElementById("imgsCarruselNBA");


function showImageNBA() {                                // Función para mostrar la imágen actual
imagenNBA.src = imagesCarruselNBA[currentImageIndexNBA];
}


anteriorNBA.addEventListener("click", () => {            // Retroceder una imágen con el boton 'anterior'
currentImageIndexNBA--;
if (currentImageIndexNBA < 0) {
currentImageIndexNBA = imagesCarruselNBA.length - 1;
}
showImageNBA();
});


siguienteNBA.addEventListener("click", () => {           // Manejar el botón "Siguiente"
currentImageIndexNBA++;
if (currentImageIndexNBA >= imagesCarruselNBA.length) {
currentImageIndexNBA = 0;
}
showImageNBA();
});


showImageNBA(); // Mostrar la primera imagen al cargar la página



//   Animación ante la selección del usuario CARRUSEL NBA
const userRtaCarruselNBA = document.querySelectorAll('#imgsCarruselNBA');


userRtaCarruselNBA.forEach(function(imagen) {
imagen.setAttribute('data-escala-original', '1'); // Almacenar la escala original en un atributo personalizado

imagen.addEventListener('click', function () {
const escala = parseFloat(imagen.getAttribute('data-escala-original'));

if (escala === 1) {
imagen.style.transform = 'scale(1.25)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1.25');
} 
else {                                             // Si la escala es 1.25 (seleccionada), restaurar la escala original
imagen.style.transform = 'scale(1)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1');
}

});
});

// Elimina la animación de Scale(1.25) al darle a los botones 'siguiente' y 'anterior'
let currentIndexNBA = 0

anteriorNBA.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarruselNBA[currentIndexNBA].style.transform = 'scale(1)';
userRtaCarruselNBA[currentIndexNBA].style.transition = 'transform 0.6s';
userRtaCarruselNBA[currentIndexNBA].setAttribute('data-escala-original', '1'); //Elimina el scale
});

siguienteNBA.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarruselNBA[currentIndexNBA].style.transform = 'scale(1)';
userRtaCarruselNBA[currentIndexNBA].style.transition = 'transform 0.6s';
userRtaCarruselNBA[currentIndexNBA].setAttribute('data-escala-original', '1'); //Elimina el scale
});



// // // // // // // // // // // // // // // // // // // // // // // //
          //SEGUNDO PAR DE CARRUSELES
// CREACIÓN CARRUSEL FUTBOL DOS
const imagesCarruselDos = ["Barca.png", "RiverPlate.png", "BocaJuniors.png", "Independiente.png", "Racing.png", "San Lorenzo.png", "Estudiantes.png", "RealMadrid.jpg", "Atletico.png","Sevilla.png", "Valencia.png", "Bayern.png","Borussia.png", "Liverpool.jpg", "City.jpg", "ManU.jpg", "Chelsea.png", "Arsenal.png", "Milan.png", "Inter.jpg", "Juventus.png", "Napoli.png", "Roma.png", "psg.png", "lyon.png", "Benfica.png", "Oporto.png" ]; // Lista de imágenes
let currentImageIndexDos = 0; // Índice de la imagen actual
// 
// VARIABLES QUE REPRESENTAN LOS BOTONES Y LAS IMGS DEL CARRUSEL DE FUTBOL
const anteriorDos = document.getElementById("anteriorDos");
const siguienteDos = document.getElementById("siguienteDos");
const imagenDos = document.getElementById("imgsCarruselDos");


function showImageDos() {                                // Función para mostrar la imágen actual
imagenDos.src = imagesCarruselDos[currentImageIndexDos];
}


anteriorDos.addEventListener("click", () => {            // Retroceder una imágen con el botón 'anterior'
currentImageIndexDos--;
if (currentImageIndexDos < 0) {
currentImageIndexDos = imagesCarruselDos.length - 1;
}
showImageDos();
});


siguienteDos.addEventListener("click", () => {           // Avanazar una imágen con el botón 'siguiente'
currentImageIndexDos++;
if (currentImageIndexDos >= imagesCarruselDos.length) {
currentImageIndexDos = 0;
}
showImageDos();
});
showImageDos(); // Mostrar la primera imágen al cargar la página


//
//                  //  Animación ante la selección del usuario CARRUSEL FUTBOL DOS 
const userRtaCarruselDos = document.querySelectorAll('#imgsCarruselDos');


userRtaCarruselDos.forEach(function(imagen) {
imagen.setAttribute('data-escala-original', '1'); // Almacenar la escala original en un atributo personalizado

imagen.addEventListener('click', function () {
const escala = parseFloat(imagen.getAttribute('data-escala-original'));

if (escala === 1) {
imagen.style.transform = 'scale(1.25)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1.25');
} 
else {                                             // Si la escala es 1.25 (seleccionada), restaurar la escala original
imagen.style.transform = 'scale(1)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1');
}

});
});

// Elimina la animación de Scale(1.25) al darle a los botones 'siguiente' y 'anterior'
let currentIndexDos = 0

anteriorDos.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarruselDos[currentIndexDos].style.transform = 'scale(1)'; 
userRtaCarruselDos[currentIndexDos].style.transition = 'transform 0.6s';
userRtaCarruselDos[currentIndexDos].setAttribute('data-escala-original', '1'); //Elimina el scale
});

siguienteDos.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarruselDos[currentIndexDos].style.transform = 'scale(1)';
userRtaCarruselDos[currentIndexDos].style.transition = 'transform 0.6s';
userRtaCarruselDos[currentIndexDos].setAttribute('data-escala-original', '1'); //Elimina el scale
});






// // // // // // // // // // // // // // // // 
//                                         // CARRUSEL NBA DOS
const imagesCarruselNBADos = ["Celtics.png", "Lakers.png", "Warriors.png","Bulls.png", "Spurs.png", "Heat.png", "Cavaliers.png", "Knicks.png", "Mavericks.png","Pistons.png", "Nets.png", "Clippers.png", "Bucks.png","Jazz.png", "Sixers.png", "Blazers.png", "Rockets.png","Suns.png", "Nuggets.png", "Hawks.png", "Raptors.png", "Okc.png","Timberwolves.png", "Pelicans.png", "Grizzlies.png","Pacers.png", "Hornets.png", "Kings.png", "OrlandoMagic.png", "Wizards.png"]; // Lista de imágenes
let currentImageIndexNBADos = 0; // Índice de la imágen actual

// VARIABLES QUE REPRESENTAN LOS BOTONES Y LAS IMGS DEL CARRUSEL DE NBA
const anteriorNBADos = document.getElementById("anteriorNBADos");
const siguienteNBADos = document.getElementById("siguienteNBADos");
const imagenNBADos = document.getElementById("imgsCarruselNBADos");


function showImageNBADos() {                                // Función para mostrar la imágen actual
imagenNBADos.src = imagesCarruselNBADos[currentImageIndexNBADos];
}


anteriorNBADos.addEventListener("click", () => {            // Retroceder una imágen con el boton 'anterior'
currentImageIndexNBADos--;
if (currentImageIndexNBADos < 0) {
currentImageIndexNBADos = imagesCarruselNBADos.length - 1;
}
showImageNBADos();
});


siguienteNBADos.addEventListener("click", () => {           // Manejar el botón "Siguiente"
currentImageIndexNBADos++;
if (currentImageIndexNBADos >= imagesCarruselNBADos.length) {
currentImageIndexNBADos = 0;
}
showImageNBADos();
});


showImageNBADos();


// Animación ante la selección del usuario CARRUSEL NBA DOS 
const userRtaCarruselNBADos = document.querySelectorAll('#imgsCarruselNBADos');


userRtaCarruselNBADos.forEach(function(imagen) {
imagen.setAttribute('data-escala-original', '1'); // Almacenar la escala original en un atributo personalizado

imagen.addEventListener('click', function () {
const escala = parseFloat(imagen.getAttribute('data-escala-original'));

if (escala === 1) {
imagen.style.transform = 'scale(1.25)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1.25');
} 
else {                                             // Si la escala es 1.25 (seleccionada), restaurar la escala original
imagen.style.transform = 'scale(1)';
imagen.style.transition = 'transform 0.6s';
imagen.setAttribute('data-escala-original', '1');
}

});
});

// Elimina la animación de Scale(1.25) y el BORDE VERDE al darle a los botones 'siguiente' y 'anterior'
let currentIndexNBADos = 0


anteriorNBADos.addEventListener("click", function () { // Evento para el botón "Anterior" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';  // Eliminar el borde verde de todos los elementos .carrusel

});

userRtaCarruselNBADos[currentIndexNBADos].style.transform = 'scale(1)';
userRtaCarruselNBADos[currentIndexNBADos].style.transition = 'transform 0.6s';
userRtaCarruselNBADos[currentIndexNBADos].setAttribute('data-escala-original', '1');  //Elimina el scale
}); 

siguienteNBADos.addEventListener("click", function () { // Evento para el botón "Siguiente" en el carrusel de NBA Dos

const carruseles = document.querySelectorAll('.carrusel');
carruseles.forEach((carrusel) => {
carrusel.style.border = '';                    // Eliminar el borde verde de todos los elementos .carrusel
});

userRtaCarruselNBADos[currentIndexNBADos].style.transform = 'scale(1)';
userRtaCarruselNBADos[currentIndexNBADos].style.transition = 'transform 0.6s';
userRtaCarruselNBADos[currentIndexNBADos].setAttribute('data-escala-original', '1');   //Elimina el scale
});



// Borde verde al seleccionar una IMG de los CARRUSELES
// Obtener todas las imágenes dentro de elementos con la clase .carrusel
const imagenesCarrusel = document.querySelectorAll('.carrusel .imagenesCarrusel');

// Agregar un manejador de clic a cada imagen
imagenesCarrusel.forEach((imagen) => {
imagen.addEventListener('click', () => {
const carruselPadre = imagen.closest('.carrusel'); // Obtener el elemento padre mas cercano (.carrusel) del elemento clickeado

if (carruselPadre.style.border.includes('green')){  // Verificar si el borde contiene "green"
carruselPadre.style.border = '';                 // Esto eliminará el borde
} 

else {                                             // Si no contiene 'green', establecer el borde en verde
carruselPadre.style.border = 'double 8px green'; // Cambiar el borde del elemento padre al color verde
}

});
});








////////////////////////////////////////////////////////
//  SEGUNDA PARTE DE LA TERCER SECCION 
const copa1de3 = document.getElementById('copa1de3');
const rta1de3 = document.getElementById('mensaje1de3');

copa1de3.addEventListener('click', function () 
{if (rta1de3.style.display === 'inline') 
{rta1de3.style.display = 'none'}
else 
{rta1de3.style.display = 'inline'}
});
// 



const copa2de3 = document.getElementById('copa2de3');
const rta2de3 = document.getElementById('mensaje2de3');

copa2de3.addEventListener('click', function () 
{if (rta2de3.style.display === 'inline') 
{rta2de3.style.display = 'none'}
else 
{rta2de3.style.display = 'inline'}
});
// 



const copa3de3 = document.getElementById('copa3de3');
const rta3de3 = document.getElementById('mensaje3de3');

copa3de3.addEventListener('click', function () 
{if (rta3de3.style.display === 'inline') 
{rta3de3.style.display = 'none'}
else 
{rta3de3.style.display = 'inline'}
});

// .SELECCIONES AL COMIENZO DEL FORM.JS


// CÓDIGO PARA OBTENER LAS SELECCIONES DE LOS USUARIOS EN LOS CUADROS CON IMÁGENES.

function obtenerSeleccionesUsuario() {
  const goatFutbol = document.getElementById('cajaFutbol').value;
  const goatNBA = document.getElementById('cajaNBA').value;
  const goatTenis = document.getElementById('cajaTenis').value;
  const mejorSeleccion = document.getElementById('cajaSelecciones').value;

  
  console.log('Selección Fútbol GOAT:', goatFutbol); // Aquí puedes hacer lo que quieras con las selecciones del usuario
  console.log('Selección NBA GOAT:', goatNBA);
  console.log('Selección Tenis GOAT:', goatTenis);
  console.log('Mejor Selección:', mejorSeleccion);
}

document.getElementById('miFormulario').addEventListener('submit', function (event) {
  event.preventDefault();                 // Evitar que el formulario se envíe de manera convencional
  obtenerSeleccionesUsuario();            // Llamar a la función para obtener selecciones del usuario
});


});