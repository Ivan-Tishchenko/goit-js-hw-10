function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,flag`)}const t=document.querySelector(".country-list");document.querySelector(".country-info");document.querySelector("input").addEventListener("input",(function(n){n.target.value.length>=1&&(console.log(e(n.target.value)),e(n.target.value).then((e=>{if(!e.ok)throw new Erorr(e.status);return e.json()})).then((e=>{var n;e.length>10?console.log("Too many matches found. Please enter a more specific name."):1===(n=e).length&&t.insertAdjacentHTML("afterbegin",`<svg class="flag" width="100" height="100">\n          <use src=${n[0].flags.svg}></use>\n        </svg>`)})).catch((e=>{console.log(e)})))}));document.querySelector(".country-list"),document.querySelector(".country-info");
//# sourceMappingURL=index.cf866f00.js.map
