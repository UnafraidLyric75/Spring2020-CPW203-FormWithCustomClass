var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errSummary = getById("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    console.log("video game was added");
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingsLinks();
    }
}
function displayRatingsLinks() {
    var ratingsElements = document.querySelectorAll(".rating-error");
    for (var i = 0; i < ratingsElements.length; i++) {
        var currElem = ratingsElements[i];
        currElem.onclick = goToRatingsPage;
    }
}
function goToRatingsPage() {
    window.open("https://www.esrb.org", "_blank");
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediumDisplay = "You can come buy a physical copy.";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game.";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + " it costs " + myGame.price + ". " + gameMediumDisplay;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getById(id) {
    return document.getElementById(id);
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var rating = getById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating", "rating-error");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = getById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function addErrorMsgWithCustomClass(errMsg, cssClass) {
    var errSummary = getById("validation-summary");
    var errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
