import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryCardItems = createGaleryCardItems(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

galleryContainerRef.insertAdjacentHTML('beforeend', galeryCardItems);

function createGaleryCardItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}

galleryContainerRef.addEventListener("click", originalSrc);

function originalSrc(e){
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const originalSrc = e.target.dataset.source;
    console.log(originalSrc);
}

function preventDef(e) {
  e.preventDefault();
}

function addLinkHandler() {
    document.querySelector(".gallery__link").addEventListener("onclick", preventDef, false);
}

addLinkHandler();