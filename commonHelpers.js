import{a as p,S as L,i as v}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const S="https://pixabay.com/api/",m=15,f=(s,t)=>{try{return p(S,{params:{key:"44202193-f248306df09f9efdc8529d868",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:m}})}catch(r){alert(r.message)}},d=document.querySelector(".gallery");let u;const y=s=>{d.insertAdjacentHTML("beforeend",b(s)),u?u.refresh():u=new L(".gallery a",{overlay:!0,opasoverlayOpacity:.8,showCounter:!1,captionsData:"alt"})},b=s=>s.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:i,comments:c,downloads:g})=>`<li class="list-item">
        <a class="list-link" href="${r}">
          <img
            src="${t}"
            alt="${a}"
            class="list-img"
            width="360"
          />
          <ul class="img-list">
            <li class="img-titles">
              <h3>Likes</h3>
              <p>${e}</p>
            </li>
            <li class="img-titles">
              <h3>Views</h3>
              <p>${i}</p>
            </li>
            <li class="img-titles">
              <h3>Comments</h3>
              <p>${c}</p>
            </li>
            <li class="img-titles">
              <h3>Downloads</h3>
              <p>${g}</p>
            </li>
          </ul>
        </a>
      </li>`).join(""),h=(s,t)=>{v.show({position:"topRight",color:s,messageColor:"#FAFAFB",message:t})};let l=1;const w=document.querySelector(".form"),n=document.querySelector(".loader"),o=document.querySelector(".load-btn");o.addEventListener("click",F);w.addEventListener("submit",q);async function q(s){d.innerHTML="",s.preventDefault(),localStorage.removeItem("searchKey"),n.classList.remove("is-hiden"),o.classList.add("is-hiden"),l=1;const t=s.target.elements.search.value.trim();if(!t){h("#EF4040","Please, please fill in search field"),d.innerHTML="",n.classList.add("is-hiden");return}try{const{data:r}=await f(t,l);if(r.hits.length<1){h("#EF4040","Sorry, there are no images matching your search query. Please try again!"),d.innerHTML="";return}y(r.hits),o.classList.remove("is-hiden"),localStorage.setItem("searchKey",t);const a=Math.ceil(r.totalHits/m);if(l===a){o.classList.add("is-hiden"),h("#6C8CFF","We're sorry, but you've reached the end of search results."),o.classList.add("is-hiden");return}}catch(r){alert(`${r.message}`)}finally{n.classList.add("is-hiden")}s.target.reset()}async function F(){n.classList.remove("is-hiden"),o.classList.add("is-hiden"),l+=1;const s=localStorage.getItem("searchKey");try{const{data:t}=await f(s,l);y(t.hits),o.classList.remove("is-hiden");const a=document.querySelector(".list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:a,behavior:"smooth"});const e=Math.ceil(t.totalHits/m);l===e&&(o.classList.add("is-hiden"),h("#6C8CFF","We're sorry, but you've reached the end of search results."))}catch(t){alert(t.message)}finally{n.classList.add("is-hiden")}}
//# sourceMappingURL=commonHelpers.js.map
