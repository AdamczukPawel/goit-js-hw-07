import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryPictures = document.querySelector('div.gallery');
const newGalery = galleryItems
    .map(({preview, original, description}) => 
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image" 
            src="${preview}" 
            data-source="${original}"
            alt="${description}" 
          />
        </a>
      </div>`)
    .join('');
    
galleryPictures.insertAdjacentHTML("afterbegin", newGalery);
 
galleryPictures.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `); 
  instance.show();
  document.addEventListener('keydown', (ev) => {
    if (ev.code === "Escape") {
      instance.close();
    }
  });
});
console.log(galleryItems);

