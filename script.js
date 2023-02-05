const appCont = document.querySelector(".app-cont");
const cells = [...document.querySelectorAll("[data-cell]")];
const forOBtn = document.querySelector(".forO");
const forXBtn = document.querySelector(".forX");
const firstMenu = document.querySelector(".chooseType");
const lastMenu = document.querySelector(".endMenu");
const outPutMsg = document.querySelector("#msg");
const endGameBtn = document.querySelector("#endGame");
const restartBtn = document.querySelector("#restart");

const mainMenu = document.querySelector(".mainMenu");
const mainMenuBtn = document.querySelector("#startGame");

mainMenuBtn.addEventListener("click", () => {
    mainMenu.style.display = `none`;
    firstMenu.style.display = `flex`;
})

// win or loose message getter
let msg;

// help to check if the cell have been used up
let check = 0

// btn to choose who goes first
forOBtn.addEventListener("click", (e) => {
    firstMenu.style.display = `none`;
    index = 0;
    appCont.style.display = `block`
})

// btn to choose who goes first
forXBtn.addEventListener("click", (e) => {
    firstMenu.style.display = `none`;
    index = 1;
    appCont.style.display = `block`
})

// variable to determine the boolean of which user goes
let inputX;
let inputO;

// tun changer counter
let index;

// a variable used to store the class value
let X;
let O;

// adding event listener to each cell
cells.forEach( (cell) => {
    cell.addEventListener("click", (e) => {
        changeTurn();
        userChoice(e);
        checkWin();
        lookUp();
    });
})

// check if cell has been used
function checkCell(){
    cells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            if(e.target.classList.contains(X) || e.target.classList.contains(O)){
                e.target.style.cursor = `not-allowed`
                return;
            }
        })
    })
    
}

// to draw user choice into the cell
function userChoice(e){
    checkCell();

    if(e.target.classList.contains(X) || e.target.classList.contains(O)){
        e.target.style.cursor = `not-allowed`;
        return;
    }else if (inputX){
        e.target.classList.add(X);
        index++
        console.log("X")
    }else if(inputO){
        e.target.classList.add(O);
        index++;
        console.log("O")
    }

}

// help to change turn
function changeTurn() {

    if(index % 2 == 0){
        inputO = true;
        inputX = false;
    }else{
        inputX = true;
        inputO = false;
    }
}

// check for win
function checkWin(){
        
    if(cells[0].classList.contains(X) && cells[1].classList.contains(X) && cells[2].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[3].classList.contains(X) && cells[4].classList.contains(X) && cells[5].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[6].classList.contains(X) && cells[7].classList.contains(X) && cells[8].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[0].classList.contains(X) && cells[3].classList.contains(X) && cells[6].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[1].classList.contains(X) && cells[4].classList.contains(X) && cells[7].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[2].classList.contains(X) && cells[5].classList.contains(X) && cells[8].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[0].classList.contains(X) && cells[4].classList.contains(X) && cells[8].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[2].classList.contains(X) && cells[4].classList.contains(X) && cells[6].classList.contains(X)){
        msg = `User X Wins`;
    }else if(cells[0].classList.contains(O) && cells[1].classList.contains(O) && cells[2].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[3].classList.contains(O) && cells[4].classList.contains(O) && cells[5].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[6].classList.contains(O) && cells[7].classList.contains(O) && cells[8].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[0].classList.contains(O) && cells[3].classList.contains(O) && cells[6].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[1].classList.contains(O) && cells[4].classList.contains(O) && cells[7].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[2].classList.contains(O) && cells[5].classList.contains(O) && cells[8].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[0].classList.contains(O) && cells[4].classList.contains(O) && cells[8].classList.contains(O)){
        msg = `User O wins`;
    }else if(cells[2].classList.contains(O) && cells[4].classList.contains(O) && cells[6].classList.contains(O)){
        msg = `User O wins`;
    }else{
        checkDraw();
    }

}

// loops thru and check for a draw
function checkDraw(){
    cells.forEach( (cell) => {
        if(cell.classList.contains(O) || cell.classList.contains(X)){
            check++;
            console.log(check)
        }
    })

    if(check == 45){
        msg = `Draw`;
        console.log(check)
    }
}

// help to check if win or draw message
function lookUp(){
    if(msg){
        O = "";
        X = "";
        setTimeout( () => {
            appCont.style.display = `none`;
        }, 2000)
        lastMenu.style.display = `flex`;
        outPutMsg.innerText = msg;
        cells.forEach( (cell) => {
            cell.style.cursor = `not-allowed`
        })
    }
}


restartBtn.addEventListener("click", () => {
    X = `x-input`;
    O = `o-input`;
    appCont.style.display = `none`
    msg = "";
    firstMenu.style.display = `flex`;
    check = 0;
    lastMenu.style.display = `none`;

    cells.forEach( (cell) => {
        if(cell.classList.contains(O)){
            cell.classList.remove(O);
            cell.style.cursor = `pointer`;
        }else{
            cell.classList.remove(X);
            cell.style.cursor = `pointer`;
        }
    })
})

endGameBtn.addEventListener("click", () => {
    location.reload();
});


window.onload = () => {
    X = `x-input`;
    O = `o-input`;
}