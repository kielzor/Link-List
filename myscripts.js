var inputTitle = document.querySelector(".input-title");
var inputUrl = document.querySelector(".input-url");
var submitButton = document.querySelector(".enter-button");
var outputList = document.querySelector(".output-list");
var bookmarkAmounts = document.querySelector(".bookmark-amounts");
var errorMessage = document.querySelector(".error-message");
var unreadTotal = 0;
var readTotal = 0;
var counter = 0;

inputTitle.addEventListener("keyup", buttonEnable);
inputUrl.addEventListener("keyup", buttonEnable);
submitButton.addEventListener("click", makeBookmark);
$('ul').on('click', 'li .delete-button', deleteBookmark)
$('ul').on('click', 'li .read-button', readBookmark)


function makeBookmark(event) {
  event.preventDefault();
  for (var i = 0; i < makeBookmark.length; i++) {
    counter++;
    var newCard = document.createElement("li");
    newCard.innerHTML = `<div class="output-title">${inputTitle.value}</div>
  <div class="output-url"><a class="output-hover" href='${inputUrl.value}'>${
      inputUrl.value
    }</a></div>
    <button class="output-hover read-button template-button">Read</button>
    <button class="output-hover delete-button template-button">Delete</button>
    `;
    outputList.appendChild(newCard);
    deleteButton = document.querySelector(".delete-button");
    updateTotals();
  }
}

function readBookmark() {
  console.log('yep');
}

function deleteBookmark() {
  counter--;
  var cardToBeDeleted = $(this).parent();
  cardToBeDeleted.remove();
  updateTotals();
}

function buttonEnable() {
  if (inputTitle.value !== "" && inputUrl.value !== "") {
    submitButton.disabled = false;
    errorMessage.innerText = "";
  } else {
    submitButton.disabled = true;
  }
}

function updateTotals() {
  console.log(counter);
  unreadTotal = counter - readTotal;
  bookmarkAmounts.innerText = "Read: " + readTotal + " Unread: " + unreadTotal;
}
