function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,flags,capital,population,languages`)}document.querySelector("input").addEventListener("input",(function(o){[...n.children].forEach((e=>{e.remove()})),void[...t.children].forEach((e=>{e.remove()})),o.target.value.length>=1&&(console.log(e(o.target.value)),e(o.target.value).then((e=>{if(!e.ok)throw console.log(e.status),new Erorr(e.status);return e.json()})).then((e=>{e.length>10?console.log("Too many matches found. Please enter a more specific name."):function(e){if(console.log(e),1===e.length)t.insertAdjacentHTML("afterbegin",`<div>\n        <img src=${e[0].flags.svg} alt=${e[0].name.official} width="100">\n        <h2>${e[0].name.official}</h2>\n        <p>Capital: ${e[0].capital}</p>\n        <p>Population: ${e[0].population}</p>\n        <p>Languages: ${Object.values(e[0].languages).join(", ")}</p>\n         </div>`);else for(let t=0;t<e.length;t+=1)n.insertAdjacentHTML("beforeend",`<div class="flex">\n            <img src=${e[t].flags.svg} alt=${e[0].name.official} width="100">\n            <h2>${e[t].name.official}</h2>\n            </div>`)}(e)})).catch((e=>{console.log(e)})))}));const n=document.querySelector(".country-list"),t=document.querySelector(".country-info");
//# sourceMappingURL=index.1c80cd94.js.map