import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-122b0-default-rtdb.firebaseio.com/",
}
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database)
  
console.log(app)
let inputEl = document.getElementById('input-el')
let saveEl = document.getElementById('save-el')
let deleteEl = document.getElementById('delete-el')
let listEl = document.getElementById('list-el')
let links = []


deleteEl.addEventListener('dblclick', function() {
    links = []
    renderLinks()
})


saveEl.addEventListener('click', function() {
    let inputValue = inputEl.value
    if (inputValue) {
        links.push(inputValue)
        inputEl.value = ''
        renderLinks()
    }
})

function renderLinks() {
    listEl.innerHTML = ''
    for (let i = 0; i < links.length; i++) {
        listEl.innerHTML += `
            <li>
                <a href="${links[i]}" target="_blank">
                    ${links[i]}
                </a>
            </li>`
    }
}