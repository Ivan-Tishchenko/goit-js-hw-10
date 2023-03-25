const e=document.querySelector("input");e.addEventListener("input",(function(e){if(1==e.target.value.length)return void console.log("Too many matches found. Please enter a more specific name.");(t=e.target.value,void fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>{if(e.ok)return e}))).then((e=>console.log(e)));var t})),console.log(e);
//# sourceMappingURL=index.709e1c80.js.map
