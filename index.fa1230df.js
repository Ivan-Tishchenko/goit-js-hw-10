function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,flag`)}document.querySelector("input").addEventListener("input",(function(t){t.target.value.length>=1&&(console.log(e(t.target.value)),e(t.target.value).then((e=>{if(!e.ok)throw new Erorr(e.status);return e.json()})).then((e=>{var t;e.length>10?console.log("Too many matches found. Please enter a more specific name."):1===(t=e).length&&countryList.insertAdjacentHTML("afterbegin",`<svg class="flag" width="100" height="100">\n          <use src=${t[0].flags.svg}></use>\n        </svg>`)})).catch((e=>{console.log(e)})))}));document.querySelector(".country-list"),document.querySelector(".country-info");
//# sourceMappingURL=index.fa1230df.js.map
