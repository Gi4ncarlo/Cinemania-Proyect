let currentIndex = 0;
const images = document.querySelectorAll('.imagenes img');
const textos = document.getElementById("textos")

const contenidoTexto = document.createElement("p");

const totalImages = images.length;

const pelis = [ {
    titulo : "Deadpool & Wolverine",
    duracion : "127 minutos",
    estreno : "25 de julio de 2024",

},
{
    titulo : "Joker 2",
    duracion : "125 minutos",
    estreno : "4 de octubre de 2024"
},
{
    titulo : "Mufasa el Rey Leon",
    duracion : "113 minutos",
    estreno : "20 de diciembre de 2024" 
},
{
    titulo : "Bad Boys hasta la Muerte",
    duracion : "133 minutos",
    estreno : "7 de junio de 2024" 
},
{
    titulo : "Mi Villano favorito 4",
    duracion : "95 minutos",
    estreno : "20 de junio de 2024"   
}]

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        contenidoTexto.innerHTML = "";
        textos.appendChild(contenidoTexto);
        if (i === index) {
            img.classList.add('active');
            textos.innerHTML = `<Strong>Titulo   : </Strong>${pelis[i].titulo} <br>
            <Strong>Duracion : </Strong> ${pelis[i].duracion} <br>
            <Strong>Estreno  : </Strong>${pelis[i].estreno}`;
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

showImage(currentIndex);

setInterval(nextImage, 3000);