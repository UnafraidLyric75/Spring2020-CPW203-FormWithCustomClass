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

function addVideoGame(){
    console.log("video game was added");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
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
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
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
    let displayDiv = document.getElementById("display");

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

// add validation code
function isAllDataValid(){
    return true;
}