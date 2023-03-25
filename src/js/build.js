const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


export default function build(obj) {
    if (obj.length === 1) {
       countryList.insertAdjacentHTML("afterbegin", `<svg class="flag" width="100" height="100">
          <use src=${obj[0].flags.svg}></use>
        </svg>`)
    }
}