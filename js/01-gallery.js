import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGal = document.querySelector(`.gallery`);
const markup = galleryItems.map(({preview,original,description})=> {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/></a></li>`}).join(" ");
      ulGal.insertAdjacentHTML("beforeend",markup);

ulGal.addEventListener(`click`,onImgClick);

function onImgClick(event) {
  event.preventDefault();
    if(event.target.nodeName === !"IMG") {return};

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show();
};


ulGal.addEventListener(`keydown`,onEscClose);

function onEscClose(event) {
  if(event.code === "ESCAPE"){
     instance.close();
     console.log (event)
  }
    };




