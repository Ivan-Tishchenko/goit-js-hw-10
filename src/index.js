import './css/styles.css';
import fetchCountries from './js/fetchCounters';
import build from './js/build';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("input");
input.addEventListener("input", search);


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
//     return fetch(`https://restcountries.com/v3.1/name/${name}`);
// }
// function build(obj) {
//     console.log(obj)
// }