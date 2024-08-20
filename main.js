let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameover = false;


window.onload = function(){
    setGame();
}

function setGame() {
    // set up the grid for the game board in html
    for (let i = 0; i < 9; i++) {
        // <div id"0-8"><viv/>
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById('board').appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile(){
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9); 
    return num.toString();
}

function setMole(){

    if (gameover) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img');
    mole.src = "./images/monty-mole.png";

    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if (gameover) {
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = '';
    }

    let plant = document.createElement('img');
    plant.src = "./images/piranha-plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameover) {
        return;
    }
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById('score').innerHTML = score.toString();
    }else if (this == currentPlantTile) {
        document.getElementById('score').innerHTML = 'GAME OVER: ' + score.toString();
        gameover = true;
        setTimeout(function(){location.reload()},3000);
    }
}
