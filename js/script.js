
//global  const (program state)
let cellNumber = 100;
let bombsNumber = 16;
let maxTries;
let points = [];
let bombs = [];


document.querySelector(".start").addEventListener("click", startGame);
function startGame() {
    document.getElementById("result").innerHTML = "";

    const gridContainerElem = document.querySelector(".grid-container")
    gridContainerElem.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        const newCell = createClell(i);
        gridContainerElem.append(newCell);
    }


    /// creazione array bombe
    bombs = createBombsArray(cellNumber, bombsNumber)

    //creazione di num tentativi massimi
    maxTries = cellNumber - bombsNumber;

    //inizializzo il punteggio
    points = [];
}

///funzione logica del gioco userà le variabili globali
function handCellClick() {
    const clickNum = parseInt(this.innerHTML);

    if (bombs.includes(clickNum)) {
        //console.log("bombaaaa");
        this.style.backgroundColor = "red";
        endGame("loose")
    } else {
        if (!points.includes(clickNum)) {
            this.style.backgroundColor = "blue";
           points.push(clickNum)
         }
    }
       

        if (points.length === maxTries) {
            endGame("win")
        }
         

    

}


 /**
 * Description: funzione che gestisce la visualizzazione del risultato
 * @param {any} params
 * @returns {any}
 */
 function endGame(result) {
    const resulEleme = document.getElementById("result");
    let message;
    if (result === "loose") {
        message =` "Hai perso, il tuo punteggio è" ${points.length}`
    } else {
        message = "Congratulazione, hai vinto"
    }
    resulEleme.innerHTML = message;


////////rimuovere la possibilità di continuare a cliccare dopo aver perso

const cellElem = document.querySelectorAll(".cell");

for(let i = 0; i < cellElem.length; i ++) {

    //tramite java ma con handcellclick come funzione di colbek non funzione anonima
    const curCell = cellElem[i];
    curCell.removeEventListener("click", handCellClick);

    ///questo è con css
    //curCell.style.pointerEvents = "none"
}

}