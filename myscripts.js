var inputTitle = document.querySelector(".input-title");
var inputUrl = document.querySelector(".input-url");
var submitButton = document.querySelector(".enter-button");
var outputList = document.querySelector('.output-list');

inputTitle.addEventListener('keyup', buttonEnable);
inputUrl.addEventListener('keyup', buttonEnable);
submitButton.addEventListener('click', makeBookmark);

function makeBookmark(event) {
    event.preventDefault();
    outputList.innerHTML = `<form class="template"> 
    <div class="output-title">${inputTitle.value}</div>
    <div class="output-url">${inputUrl.value}</div>
    <button class="read template-button">Read</button>
    <button class="delete template-button">Delete</button>
    </form>`;
};

function buttonEnable() {
    if (inputTitle.value !== "" && inputUrl.value !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};