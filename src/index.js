import './css/styles.css';
import fetchCountries from './js/fetchCounters';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("input");
input.addEventListener("input", search);

console.log(input)
function search(e) {
    if (e.target.value.length == 1) {
        console.log("Too many matches found. Please enter a more specific name.")
        return;
    }

    fetchCountries(e.target.value).then(obj => console.log(obj))
}