
import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'


import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/winnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'
import './App.css'

// declaro las cuadriculas de la tabla 
/* */



function App() {
  console.log('render')

  // declaro el estado de los turnos
  const [board, setBoard] = useState(() =>{
    console.log('inicializar estado')
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :

    Array(9).fill(null)
  
  })
  // declaro el estado de los turnos
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ??
     TURNS.X
  })
  // declaro el estado del ganador
  const [winner, setWinner] = useState(null)

  // declaro el sistema de ganador 
  

  

  const updateBoard = (index) =>{
    if (board[index] || winner) return

    const newBoard = [...board] // <-----
    newBoard[index] = turn 
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar partida
    saveGameToStorage(
      {board: newBoard, 
        turn: newTurn}
    )
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  useEffect(() => {
    console.log('useEffect')
  })

  return(
    <main className='board'>
      <h1>Hola Papus</h1>
      <button onClick={resetGame}>Reiniciar el Juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square 
              key = {index}
              index = {index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal
        resetGame={resetGame}
        winner={winner}
      />

    </main>
  )

}

export default App
