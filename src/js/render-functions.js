import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector(".gallery");
let lightbox;


export const renderGallery = (arr) => {
  gallery.innerHTML = markupGallery(arr);
  if (lightbox) {
  lightbox.refresh();
  } else {
  lightbox = new SimpleLightbox('.gallery a', { overlay: true, opasoverlayOpacity: 0.8, showCounter:false, captionsData: "alt" });
  }
}


const markupGallery = (arr) =>  {
    return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<li class="list-item">
        <a class="list-link" href="${largeImageURL}">
          <img
            src="${webformatURL}"
            alt="${tags}"
            class="list-img"
            width="360"
          />
          <ul class="img-list">
            <li class="img-titles">
              <h3>Likes</h3>
              <p>${likes}</p>
            </li>
            <li class="img-titles">
              <h3>Views</h3>
              <p>${views}</p>
            </li>
            <li class="img-titles">
              <h3>Comments</h3>
              <p>${comments}</p>
            </li>
            <li class="img-titles">
              <h3>Downloads</h3>
              <p>${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
}).join("");
}


