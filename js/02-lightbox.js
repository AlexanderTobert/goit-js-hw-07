import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryCardItems = createGaleryCardItems(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

galleryContainerRef.insertAdjacentHTML('beforeend', galeryCardItems);

function createGaleryCardItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
}

const gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: 250
    }); 

// function galeryLightBox(e){
    
//     const gallery = new SimpleLightbox('.gallery a', {
//         captionsData: "alt",
//         captionPosition: 'bottom',
//         captionDelay: 250
//     }); 
//     galleryContainerRef.removeEventListener;
// }

// galleryContainerRef.addEventListener("click", galeryLightBox);