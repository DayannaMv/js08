import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

//ESTE CODIGO CREA LA GALLERIA ENTERA
for (let galleryItem of galleryItems) {
  // Creo el la etiqueta li con su clase gallery__item
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  //Se crea la etiqueta link y sus atributos
  const link = document.createElement("a");
  link.href = galleryItem.original;
  link.classList.add("gallery__link");

  // Creo el la etiqueta img con su clase y datos correspondientes tomados del array
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItem.preview;
  image.alt = galleryItem.description;

  //Las clases creadas anteriormente se organizan con estos metodos
  link.appendChild(image);
  listItem.append(link);
  gallery.append(listItem);
}

gallery.addEventListener("click", galleryLightBox);

function galleryLightBox(event) {
  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
}