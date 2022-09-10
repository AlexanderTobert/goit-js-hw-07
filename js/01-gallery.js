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

function originalSrc(e){
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const originalSrc = e.target.dataset.source;
    // console.log(originalSrc);
    // basicLightbox.create(`<img src="${originalSrc}", alt="${e.target.alt}">
	// `).show();
    
    const instance = basicLightbox.create(`<img src="${originalSrc}", alt="${e.target.alt}">`)

    instance.show();
    galleryContainerRef.addEventListener("keydown", e => { 
        if (e.code === "Escape") {
        // console.log(e.code);
        instance.close();
    }
    })
    
}

galleryContainerRef.addEventListener("click", originalSrc);