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


deleteEl.addEventListener('dblclick', function() {

})


saveEl.addEventListener('click', function() {
    let inputValue = inputEl.value
    if (inputValue) {
        console.log(inputValue)
        inputEl.value = ''
    }
})

function render(myLeads) {
    listEl.innerHTML = ''
    for (let i = 0; i < myLeads.length; i++) {
        listEl.innerHTML += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>`
    }
}