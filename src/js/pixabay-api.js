import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
export const maxItem = 15;

export const fetchResearch = (query, page) => {

    try {
    const result = axios(BASE_URL, {
        params: {
        key: "44202193-f248306df09f9efdc8529d868",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page,
        per_page: maxItem,
        }
    })
    return result;
    } catch (err) {
        alert(err.message)
    }
};