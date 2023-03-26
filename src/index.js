import './css/styles.css';
import fetchCountries from './js/fetchCounters';
import debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("input");
input.addEventListener("input", debounce(search, DEBOUNCE_DELAY));
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


function search(e) {
    clearHTML()

    if (e.target.value.length >= 1) {

        fetchCountries(e.target.value)
        .then(countrys => {
            if (!countrys.ok) {
            throw new Error(countrys.status);
        }
        return countrys.json();
        }).then(data => {
            if (data.length > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            return;
        }
        build(data);
        return;
        }).catch(error => {
            Notiflix.Notify.failure("Oops, there is no country with that name");
            console.log(error)
        });
    }
}
    
function build(obj) {
    
    if (obj.length === 1) {
       countryInfo.insertAdjacentHTML("afterbegin", `<div>
        <img src=${obj[0].flags.svg} alt=${obj[0].name.official} width="100">
        <h2>${obj[0].name.official}</h2>
        <p>Capital: ${obj[0].capital}</p>
        <p>Population: ${obj[0].population}</p>
        <p>Languages: ${Object.values(obj[0].languages).join(
        ', '
        )}</p>
         </div>`)
    } else {
        for (let i = 0; i < obj.length; i += 1) {
            countryList.insertAdjacentHTML("beforeend", `<div class="flex">
            <img src=${obj[i].flags.svg} alt=${obj[0].name.official} width="100">
            <h2>${obj[i].name.official}</h2>
            </div>`)
        }
    }
  
}

function clearHTML() {
    const listClear = [...countryList.children].forEach(element => {
        element.remove();
    });
    const infoClear = [...countryInfo.children].forEach(element => {
        element.remove();
    });
}