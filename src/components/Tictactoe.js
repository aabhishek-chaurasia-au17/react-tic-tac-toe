import React, {useState, useEffect} from 'react'
import Squarecomponent from './Squarecomponent'

const intialState = ["","","","","","","","",""]
const Tictactoe = () => {

    const [gameState, setGameState] = useState(intialState)
    const [playerTurn, setPlayerTurn] = useState(false)
    const [moveCount, setMoveCount] = useState(0)
    
    function onSquareClick(index) {
        let string = Array.from(gameState)
        if(string[index]){
            return;
        }
        string[index] = playerTurn ? "X" : "O"
        setPlayerTurn(!playerTurn)
        setGameState(string)
        setMoveCount(moveCount+1)
    }

    useEffect(() => {
        const winner = checkWinner();
        if(winner){
            setTimeout(() => {
                resetGame()
            }, 1000);
        }
    })

    function resetGame() {
        setGameState(intialState)
        setMoveCount(0)
    }
    
    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
            }
        }
        return null;
    }
    

    function checkWin() {
        const winner = checkWinner()
        if(winner){
            return `${winner} is winner`
        }
        if(moveCount === 9){
            return 'Match Is Draw'
        }
        return 'Tic Tac Toe'
    }

  return (<>
        <div className="app-header">
        <p className="heading-text">{checkWin()}</p>

         <div className="row jc-center">
            <Squarecomponent className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClick(0)}/>
            <Squarecomponent className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClick(1)}/>
            <Squarecomponent className="b-bottom" state={gameState[2]} onClick={() => onSquareClick(2)}/>
         </div>
         <div className="row jc-center">
            <Squarecomponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClick(3)}/>
            <Squarecomponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClick(4)}/>
            <Squarecomponent className="b-bottom" state={gameState[5]} onClick={() => onSquareClick(5)}/>
         </div>
         <div className="row jc-center">
            <Squarecomponent className="b-right" state={gameState[6]} onClick={() => onSquareClick(6)}/>
            <Squarecomponent className="b-right" state={gameState[7]} onClick={() => onSquareClick(7)}/>
            <Squarecomponent state={gameState[8]} onClick={() => onSquareClick(8)}/>
         </div>
         <button className="clear-button" onClick={resetGame}>Clear Game</button>
        </div>
    </>
  )
}

export default Tictactoe