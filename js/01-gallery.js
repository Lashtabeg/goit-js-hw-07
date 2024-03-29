import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGal = document.querySelector(`.gallery`);
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/></a></li>`;
  })
  .join(" ");
ulGal.insertAdjacentHTML("beforeend", markup);

ulGal.addEventListener(`click`, onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  console.dir(event.target);
  window.addEventListener(`keydown`, onEscClose);
  function onEscClose(event) {
    if (event.code !== "Escape") return;
    instance.close();
    window.removeEventListener(`keydown`, onEscClose);
  }
}
