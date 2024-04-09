/////////////////////////////////////////
/**
 * Description: funzione crea un elem html che rappresenta una cella griglia
 * @param {number} params
 * @returns {object}html element
 */
function createClell(numToPrint) {
    
    const divElem = document.createElement("div");
    divElem.classList.add("cell");
    divElem.innerHTML = numToPrint;
    
    divElem.addEventListener("click", handCellClick);
    
    return divElem
    }
    
    
    
    
    
     /**
      * Description: la funzione che crea un array di numeri random senza ripetizioni
      * @param {number} max
      * @param {number} arrayLength
      * @returns {array}
      */
     function createBombsArray(max, arrayLength) {
        const resulArray = [];
    
         while(resulArray.length < arrayLength) {
           
            const rndNum = getRndInteger (1, max);
    
             if(!resulArray.includes(rndNum)) {
                 resulArray.push(rndNum)
            }
            }
            return resulArray
     }
    
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    