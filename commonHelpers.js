import{a as g,S as L,i as S}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",m=15,f=(s,t)=>{try{return g(v,{params:{key:"44202193-f248306df09f9efdc8529d868",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:m}})}catch(i){alert(i.message)}},d=document.querySelector(".gallery");let h;const y=s=>{d.insertAdjacentHTML("beforeend",b(s)),h?h.refresh():h=new L(".gallery a",{overlay:!0,opasoverlayOpacity:.8,showCounter:!1,captionsData:"alt"})},b=s=>s.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:l,downloads:p})=>`<li class="list-item">
        <a class="list-link" href="${i}">
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
              <p>${r}</p>
            </li>
            <li class="img-titles">
              <h3>Comments</h3>
              <p>${l}</p>
            </li>
            <li class="img-titles">
              <h3>Downloads</h3>
              <p>${p}</p>
            </li>
          </ul>
        </a>
      </li>`).join(""),u=(s,t)=>{S.show({position:"topRight",color:s,messageColor:"#FAFAFB",message:t})};let c=1;const w=document.querySelector(".form"),n=document.querySelector(".loader"),o=document.querySelector(".load-btn");o.addEventListener("click",F);w.addEventListener("submit",q);async function q(s){d.innerHTML="",s.preventDefault(),localStorage.removeItem("searchKey"),n.classList.remove("is-hiden"),o.classList.add("is-hiden"),c=1;const t=s.target.elements.search.value.trim();if(!t){u("#EF4040","Please, please fill in search field"),d.innerHTML="",n.classList.add("is-hiden");return}try{const{data:i}=await f(t,c);if(i.hits.length<1){u("#EF4040","Sorry, there are no images matching your search query. Please try again!"),d.innerHTML="";return}y(i.hits),o.classList.remove("is-hiden"),localStorage.setItem("searchKey",t)}catch(i){alert(`${i.message}`)}finally{n.classList.add("is-hiden")}s.target.reset()}async function F(){n.classList.remove("is-hiden"),o.classList.add("is-hiden"),c+=1;const s=localStorage.getItem("searchKey");try{const{data:t}=await f(s,c);y(t.hits),o.classList.remove("is-hiden");const a=document.querySelector(".list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:a,behavior:"smooth"});const e=Math.ceil(t.totalHits/m);c===e&&(o.classList.add("is-hiden"),u("#6C8CFF","We're sorry, but you've reached the end of search results."))}catch(t){alert(t.message)}finally{n.classList.add("is-hiden")}}
//# sourceMappingURL=commonHelpers.js.map
