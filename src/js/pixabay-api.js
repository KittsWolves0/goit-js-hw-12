const BASE_URL = "https://pixabay.com/api/";


export const fetchResearch = (params) => {
    return fetch(`${BASE_URL}?${params}`)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    })
    .catch(error => {
        console.log(error);
    })
};