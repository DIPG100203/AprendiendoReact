import { winner_Combo } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of winner_Combo){
      const [a,b,c] = combo
      if (boardToCheck[a]&&
         boardToCheck[a] === boardToCheck[b] &&
         boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null 
  }

export const checkEndGame = (newBoard) => {

    // reviso si hay empate
    //si no hay mas espacios vacios en el tablero
    return newBoard.every((Square) => Square !== null)
  }