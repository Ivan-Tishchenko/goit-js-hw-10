!function(){function e(e){return fetch("https://restcountries.com/v3.1/name/".concat(e))}document.querySelector("input").addEventListener("input",(function(n){n.target.value.length>=1&&(console.log(e(n.target.value)),e(n.target.value).then((function(e){if(!e.ok)throw new Erorr(e.status);return e.json()})).then((function(e){e.length>10?console.log("Too many matches found. Please enter a more specific name."):console.log("sdfsd")})).catch((function(e){console.log(e)})))}))}();
//# sourceMappingURL=index.bcff1e34.js.map
