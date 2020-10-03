//LLAMADO POST PARA CONSUMR API Y OBTENER UN TOKEN
const llave1 = "grant_type=client_credentials";
const llave2="client_id=36658e22109f491994704579bd2800a3";
const llave3="client_secret=4d9d3d96fea843629810721d2e9b6b4f";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3
}
const urlPOST = "https://accounts.spotify.com/api/token";
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));




function obtenerToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token;

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token }
    }

    const urlGET = "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp/top-tracks?country=US";

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarArtista(datos));
}


function depurarArtista(datos) {

    //Datos que llegan del API
    let titulo1 = (datos.tracks[0].name);
    let audio1 = (datos.tracks[0].preview_url);
    let imagen1 = (datos.tracks[0].album.images[0].url);
    let titulo2= (datos.tracks[1].name);
    let audio2 = (datos.tracks[1].preview_url);
    let imagen2 = (datos.tracks[1].album.images[1].url);
    let titulo3 = (datos.tracks[2].name);
    let audio3 = (datos.tracks[2].preview_url);
    let imagen3 = (datos.tracks[2].album.images[2].url);
 
    let titulo1DOM = document.getElementById("titulo1");
    let audio1DOM = document.getElementById("audio1");
    let imagen1DOM = document.getElementById("imagen1");
    let titulo2DOM = document.getElementById("titulo2");
    let audio2DOM = document.getElementById("audio2");
    let imagen2DOM = document.getElementById("imagen2");
    let titulo3DOM = document.getElementById("titulo3");
    let audio3DOM = document.getElementById("audio3");
    let imagen3DOM = document.getElementById("imagen3");
  
     
 
    
    titulo1DOM.textContent = titulo1;
    audio1DOM.src = audio1;
    imagen1DOM.src = imagen1;
    titulo2DOM.textContent = titulo2;
    audio2DOM.src = audio2;
    imagen2DOM.src = imagen2;
    titulo3DOM.textContent = titulo3;
    audio3DOM.src = audio3;
    imagen3DOM.src = imagen3;
 
   

}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}










