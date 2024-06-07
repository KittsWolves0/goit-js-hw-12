import { fetchResearch } from "./js/pixabay-api";
import {renderGallery, gallery, iziAlert} from "./js/render-functions";
import { maxItem } from "./js/pixabay-api";
let page = 1;

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-btn");



loadBtn.addEventListener("click", hendleLoadMore);
form.addEventListener("submit", hendleSearch);

async function hendleSearch(event) {
    gallery.innerHTML = "";
    event.preventDefault();
    localStorage.removeItem("searchKey");
    loader.classList.remove("is-hiden");
    loadBtn.classList.add("is-hiden");
    page = 1;

    const query = event.target.elements.search.value.trim();

    if (!query) {
        iziAlert("#EF4040",
            "Please, please fill in search field"
        );
    gallery.innerHTML = "";
    loader.classList.add("is-hiden");
    return  
    }

    try {
        const {data} = await fetchResearch(query, page);
            if (data.hits.length < 1) {
                iziAlert("#EF4040",
                  "Sorry, there are no images matching your search query. Please try again!"  
                );
            gallery.innerHTML = "";
            return
            }
        renderGallery(data.hits);
        
        loadBtn.classList.remove("is-hiden");
        localStorage.setItem("searchKey", query);


    } catch (err) {
        alert(`${err.message}`)
    } finally {
        loader.classList.add("is-hiden");
    }


    event.target.reset();
}

async function hendleLoadMore () {
    loader.classList.remove("is-hiden");
    loadBtn.classList.add("is-hiden");
    page += 1;
    const query = localStorage.getItem("searchKey");
    try {
      const {data} = await fetchResearch(query, page);
      renderGallery(data.hits);
      loadBtn.classList.remove("is-hiden");

        const card = document.querySelector(".list-item");
        const cardHeight = (card.getBoundingClientRect().height) * 2;
        window.scrollBy({
            left: 0,
            top: cardHeight,
            behavior: "smooth"
        });

      const maxPage = Math.ceil(data.totalHits / maxItem);
        if (page === maxPage) {
        loadBtn.classList.add("is-hiden");
        iziAlert("#6C8CFF",
            "We're sorry, but you've reached the end of search results.")
        }
    } catch (err) {
        alert(err.message)
    }    finally {
        loader.classList.add("is-hiden");
    } 
}