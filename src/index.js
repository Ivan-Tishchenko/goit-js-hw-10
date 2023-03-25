import './css/styles.css';
import fetchCountries from './js/fetchCounters';
// import build from './js/build';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("input");
input.addEventListener("input", search);
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


function search(e) {
    if (e.target.value.length >= 1) {

        console.log(fetchCountries(e.target.value))


        fetchCountries(e.target.value)
        .then(countrys => {
        if (!countrys.ok) {
            throw new Erorr(countrys.status);
        }
        return countrys.json();
        }).then(data => {
            if (data.length > 10) {
            console.log("Too many matches found. Please enter a more specific name.")
            return;
        }
        build(data);
        return;
        })    
        .catch(erorr => {
        console.log(erorr)
        })
    }
}
    

// function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`);
// }
function build(obj) {
    console.log(obj)
    if (obj.length === 1) {
       countryList.insertAdjacentHTML("afterbegin", `<svg class="flag" width="100" height="100">
          <use src=${obj[0].flags.svg}></use>
        </svg>
         <p>${obj[0].name.official}</p>`)
    }
  
}