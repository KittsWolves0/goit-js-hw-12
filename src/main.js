import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchResearch } from "./js/pixabay-api";
import {renderGallery, gallery} from "./js/render-functions";

const form = document.querySelector(".form");



form.addEventListener("submit", hendleSearch);

function hendleSearch(event) {
    event.preventDefault();
      gallery.innerHTML = `<span class="loader"></span>`;
    

    const q = event.target.elements.search.value.trim();

    if (!q) {
        iziToast.show({
        position: "topRight",
        color: "#EF4040",
        messageColor: "#FAFAFB",
        message: "Please, please fill in search field"
    });
    gallery.innerHTML = "";
    return  
    }

    const params = new URLSearchParams({
        key: "44202193-f248306df09f9efdc8529d868",
        q,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    })

    fetchResearch(params).then(data => {

        if (data.hits.length < 1) {
            iziToast.show({
                position: "topRight",
                color: "#EF4040",
                messageColor: "#FAFAFB",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
            gallery.innerHTML = "";
            return
        }
        renderGallery(data.hits);
    })
    .catch(error => console.log(error));

    event.target.reset();
}

