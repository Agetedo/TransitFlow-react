import{j as s,b as j}from"./index-CocXBAyv.js";import{T as k}from"./TitleLeft-i9-_1WTM.js";import{d as C,c as S,m as g,a as L,S as _}from"./swiper-Cnow48ll.js";import{K as P}from"./keyboard-CIYSSCju.js";function O(r,i,p,c){return r.params.createElements&&Object.keys(c).forEach(l=>{if(!p[l]&&p.auto===!0){let m=C(r.el,`.${c[l]}`)[0];m||(m=S("div",c[l]),m.className=c[l],r.el.append(m)),p[l]=m,i[l]=m}}),p}function T(r){let{swiper:i,extendParams:p,on:c,emit:l}=r;p({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),i.navigation={nextEl:null,prevEl:null};function m(e){let t;return e&&typeof e=="string"&&i.isElement&&(t=i.el.querySelector(e),t)?t:(e&&(typeof e=="string"&&(t=[...document.querySelectorAll(e)]),i.params.uniqueNavElements&&typeof e=="string"&&t&&t.length>1&&i.el.querySelectorAll(e).length===1?t=i.el.querySelector(e):t&&t.length===1&&(t=t[0])),e&&!t?e:t)}function h(e,t){const n=i.params.navigation;e=g(e),e.forEach(a=>{a&&(a.classList[t?"add":"remove"](...n.disabledClass.split(" ")),a.tagName==="BUTTON"&&(a.disabled=t),i.params.watchOverflow&&i.enabled&&a.classList[i.isLocked?"add":"remove"](n.lockClass))})}function u(){const{nextEl:e,prevEl:t}=i.navigation;if(i.params.loop){h(t,!1),h(e,!1);return}h(t,i.isBeginning&&!i.params.rewind),h(e,i.isEnd&&!i.params.rewind)}function E(e){e.preventDefault(),!(i.isBeginning&&!i.params.loop&&!i.params.rewind)&&(i.slidePrev(),l("navigationPrev"))}function w(e){e.preventDefault(),!(i.isEnd&&!i.params.loop&&!i.params.rewind)&&(i.slideNext(),l("navigationNext"))}function x(){const e=i.params.navigation;if(i.params.navigation=O(i,i.originalParams.navigation,i.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;let t=m(e.nextEl),n=m(e.prevEl);Object.assign(i.navigation,{nextEl:t,prevEl:n}),t=g(t),n=g(n);const a=(o,f)=>{o&&o.addEventListener("click",f==="next"?w:E),!i.enabled&&o&&o.classList.add(...e.lockClass.split(" "))};t.forEach(o=>a(o,"next")),n.forEach(o=>a(o,"prev"))}function b(){let{nextEl:e,prevEl:t}=i.navigation;e=g(e),t=g(t);const n=(a,o)=>{a.removeEventListener("click",o==="next"?w:E),a.classList.remove(...i.params.navigation.disabledClass.split(" "))};e.forEach(a=>n(a,"next")),t.forEach(a=>n(a,"prev"))}c("init",()=>{i.params.navigation.enabled===!1?y():(x(),u())}),c("toEdge fromEdge lock unlock",()=>{u()}),c("destroy",()=>{b()}),c("enable disable",()=>{let{nextEl:e,prevEl:t}=i.navigation;if(e=g(e),t=g(t),i.enabled){u();return}[...e,...t].filter(n=>!!n).forEach(n=>n.classList.add(i.params.navigation.lockClass))}),c("click",(e,t)=>{let{nextEl:n,prevEl:a}=i.navigation;n=g(n),a=g(a);const o=t.target;let f=a.includes(o)||n.includes(o);if(i.isElement&&!f){const d=t.path||t.composedPath&&t.composedPath();d&&(f=d.find(v=>n.includes(v)||a.includes(v)))}if(i.params.navigation.hideOnClick&&!f){if(i.pagination&&i.params.pagination&&i.params.pagination.clickable&&(i.pagination.el===o||i.pagination.el.contains(o)))return;let d;n.length?d=n[0].classList.contains(i.params.navigation.hiddenClass):a.length&&(d=a[0].classList.contains(i.params.navigation.hiddenClass)),l(d===!0?"navigationShow":"navigationHide"),[...n,...a].filter(v=>!!v).forEach(v=>v.classList.toggle(i.params.navigation.hiddenClass))}});const N=()=>{i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")),x(),u()},y=()=>{i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")),b()};Object.assign(i.navigation,{enable:N,disable:y,update:u,init:x,destroy:b})}const F="/testimonials-arrow-button-next.png",R="/testimonials-arrow-button-prev.png",B=[{id:"teS01",color:"#F4F4F4",imageSrc:"/testimonial-user-image01.png",userName:"Kathleen Smith",userPosition:"Fuel Company",iconSrc:"/testimonial-icon.png",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",starRating:"/stars-rating-image.png"},{id:"teS02",color:"#e3e4ea",imageSrc:"/testimonial-user-image03.png",userName:"Layla Robinson",userPosition:"Flower Shop",iconSrc:"/testimonial-icon.png",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",starRating:"/stars-rating-image.png"},{id:"teS03",color:"#F4F4F4",imageSrc:"/testimonial-user-image02.png",userName:"John Martin",userPosition:"Restoration Company",iconSrc:"/testimonial-icon.png",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",starRating:"/stars-rating-image.png"},{id:"teS04",color:"#e3e4ea",imageSrc:"/testimonial-user-image04.png",userName:"Madison Clark",userPosition:"Attelier",iconSrc:"/testimonial-icon.png",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",starRating:"/stars-rating-image.png"}];function D(){return s.jsxs("div",{className:"testimonials__navigation",children:[s.jsx("div",{className:"button-prev",children:s.jsx("img",{src:R,alt:"#"})}),s.jsx("div",{className:"button-next",children:s.jsx("img",{src:F,alt:"#"})})]})}function q(){return s.jsxs("div",{className:"testimonials__caption",children:[s.jsx(k,{caption:"Testimonials",title:"What Our Customer Say"}),s.jsx(D,{})]})}const A=B.map(r=>s.jsxs(_,{className:"testimonial-slide",style:{backgroundColor:r.color},children:[s.jsxs("div",{className:"testimonial",children:[s.jsxs("section",{className:"testimonial__caption",children:[s.jsx("img",{className:"image",src:r.imageSrc,alt:"#"}),s.jsxs("div",{className:"user",children:[s.jsx("p",{className:"user__name",children:r.userName}),s.jsx("p",{className:"user__position",children:r.userPosition})]})]}),s.jsx("img",{className:"icon",src:r.iconSrc,alt:"#"})]}),s.jsx("p",{className:"testimonial-slide__text",children:r.text}),s.jsx("img",{className:"testimonial-slide__rating",src:r.starRating,alt:"#"})]},r.id));function M(){return s.jsxs(j,{className:"testimonials",children:[s.jsx(q,{}),s.jsx(L,{modules:[T,P],slidesPerView:2,spaceBetween:0,autoHeight:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},className:"testimonials__gallery",breakpoints:{769:{slidesPerView:2},319:{slidesPerView:1}},children:A})]})}export{M as T};
