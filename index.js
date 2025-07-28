import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js"

const firebaseConfig = {}
const app = initializeApp(firebaseConfig);
  
console.log(app)
let inputEl = document.getElementById('input-el')
let saveEl = document.getElementById('save-el')
let deleteEl = document.getElementById('delete-el')
let tabEl = document.getElementById('tab-el')
let listEl = document.getElementById('list-el')
let links = []
let localStorageEl = JSON.parse(localStorage.getItem('links'))

if(localStorageEl) {
    links = localStorageEl
    renderLinks()
}

deleteEl.addEventListener('dblclick', function() {
    localStorage.clear()
    links = []
    renderLinks()
})

tabEl.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        let activeTabUrl = activeTab.url;
        if (activeTabUrl) {
            links.push(activeTabUrl)
            renderLinks()
            localStorage.setItem('links', JSON.stringify(links))
        }
    });
})


saveEl.addEventListener('click', function() {
    let inputValue = inputEl.value
    if (inputValue) {
        links.push(inputValue)
        inputEl.value = ''
        renderLinks()
        localStorage.setItem('links', JSON.stringify(links))
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