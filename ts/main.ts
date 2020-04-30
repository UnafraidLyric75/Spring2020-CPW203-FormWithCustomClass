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
    //TODO: display video game below the form
}

// add validation code
function isAllDataValid(){
    return true;
}