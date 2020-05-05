class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
/*
let myGame= new VideoGame();
myGame.title = "mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/


window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

/**
 * Clears all errors in the validation summry
 */
function clearAllErrors(){
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    console.log("video game was added");

    clearAllErrors();

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    } else {
        displayRatingsLinks();
    }
}

function displayRatingsLinks(){
    let ratingsElements = document.querySelectorAll(".rating-error");
    for(let i = 0; i < ratingsElements.length; i++){
        let currElem = <HTMLElement>ratingsElements[i];
        currElem.onclick = goToRatingsPage;
        // currElem.innerHTML += "<a target='_blank' href='https://www.esrb.org'> Click here for info</a>";
    }
}

function goToRatingsPage(){
    window.open("https://www.esrb.org", "_blank");
}

/* doesnt work idk why
function getById(id:string){
   return document.getElementById(id);
}
*/

/**
 * Gets all game data from the form and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{
    // create game
    let game = new VideoGame();

    // populate with data
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;

    // else
    /*if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }else{
        game.isDigitalOnly = true;
    }*/

    // else for one line
    // game.title = (<HTMLInputElement>document.getElementById("title")).value;
    // game.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    // game.rating = (<HTMLSelectElement>document.getElementById("rating")).value;
    // game.isDigitalOnly = (<HTMLInputElement>document.getElementById("online")).checked;

    // return game

    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    // display video game below the form
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "You can come buy a physical copy.";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game."
    }

    //gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs " + myGame.price + ". It is " + notdigitalDisplay + " digital only";

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating} it costs ${myGame.price}. ${gameMediumDisplay}`;

    // Add <h2> in the <div id="displayDiv">
    displayDiv.appendChild(gameHeading);

    // add <p> game info
    displayDiv.appendChild(gameInfo);
}
function getById(id:string){
    return document.getElementById(id);
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let price = getInputById("price").value
    let priceValue = parseFloat(price);
    if( price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating", "rating-error");
    }

    return isValid;
}
/**
 * displays and error message
 * @param errMsg is the error message that is displayed
 */
function addErrorMessage(errMsg:string) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

function addErrorMsgWithCustomClass(errMsg:string, cssClass:string){
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}