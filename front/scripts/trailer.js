const peliculas = [
    {
        titulo : "deadpool3",
        link : "https://www.youtube.com/watch?v=UzFZR2dRsSY"
    },
    {
        titulo : "joker2",
        link : "https://www.youtube.com/watch?v=01UXuz00UkI&ab_channel=WarnerBros.PicturesLatinoam%C3%A9rica"
    },
    {
        titulo : "mufasa",
        link : "https://www.youtube.com/watch?v=gqYMro23xlg&ab_channel=ONEMediaEspa%C3%B1ol"
    },
    {
        titulo : "badboys",
        link : "https://www.youtube.com/watch?v=1lvhufxCZZg&ab_channel=SonyPicturesM%C3%A9xico"

    },
    {
        titulo : "mi villano favorito 4",
        link : "https://www.youtube.com/watch?v=I0_qFoptZ4Y&ab_channel=UniversalPicturesM%C3%A9xico"
    }
]

const addMovie = () => {
    peliculas.forEach((peli) => {
        let { titulo, link } = peli;
        console.log(peli);
        let container = document.querySelector(".trailer-container");
        let div = document.createElement("div");
        div.classList.add("col-md-5", "trailer");

        let h2 = document.createElement("h2");
        h2.textContent = titulo;

        let iframe = document.createElement("iframe");
        iframe.src = link;
        iframe.width = "100%";
        iframe.height = "315";
        iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        div.appendChild(h2);
        div.appendChild(iframe);
        container.appendChild(div);
    });
};

addMovie();
