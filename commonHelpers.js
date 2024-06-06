import{S as h,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m=s=>fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)}),n=document.querySelector(".gallery");let a;const p=s=>{n.innerHTML=g(s),a?a.refresh():a=new h(".gallery a",{overlay:!0,opasoverlayOpacity:.8,showCounter:!1,captionsData:"alt"})},g=s=>s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:l,downloads:u})=>`<li class="list-item">
        <a class="list-link" href="${i}">
          <img
            src="${t}"
            alt="${o}"
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
              <p>${u}</p>
            </li>
          </ul>
        </a>
      </li>`).join(""),d=document.querySelector(".form");d.addEventListener("submit",y);function y(s){s.preventDefault(),n.innerHTML='<span class="loader"></span>';const t=s.target.elements.search.value.trim();if(!t){c.show({position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",message:"Please, please fill in search field"}),n.innerHTML="";return}const i=new URLSearchParams({key:"44202193-f248306df09f9efdc8529d868",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});m(i).then(o=>{if(o.hits.length<1){c.show({position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";return}p(o.hits)}).catch(o=>console.log(o)),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
