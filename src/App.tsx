import React, {useEffect, useState} from 'react';
import './App.css';
import GameRecord from "./components/GameRecord";
import Board from "./components/Board";
import Example from "./components/Example"

function App() {
    const MyContext = React.createContext({
        array: [1, 2, 3, 4]
    })
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [togglePlayerMoveValue, setTogglePlayerMoveValue] = useState('X')
    const [gameOver, setGameOver] = useState(false)
    const [gameRecord, setGameRecord] = useState({winnerX: 0, winnerY: 0})

    function handleBtn(index: number): void {
        let square = [...squares]
        square[index] = togglePlayerMoveValue
        togglePlayerMoveValue === 'X' ? setTogglePlayerMoveValue('O') : setTogglePlayerMoveValue('X')
        setSquares([...square])
        const winner = calculateWinner(square)
        if(winner !== null) {
            console.log('Winner ' + winner)
            const winnerX = gameRecord.winnerX
            const winnerY = gameRecord.winnerY
            winner === 'X' ? setGameRecord({winnerX: winnerX + 1, winnerY}) : setGameRecord({winnerX, winnerY: winnerY + 1})
        }
    }

    useEffect(()=>{
        gameOver && setTimeout(()=>{
            setSquares(Array(9).fill(null))
            setGameOver(false)
        }, 2000)
    }, [gameOver])

    function calculateWinner(squares: any[]) {
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setGameOver(true)
                return squares[a];
            }
        }
        let countNull = 0
        for (let i = 0; i < squares.length; i++) {
            if(squares[i] === null) countNull++
        }
        if(countNull === 0) {
            setGameOver(true)
            alert('DRAW')
        }
        return null;
    }

    return (
        <div className="App">
            <GameRecord name='Game Record' age={10} gameRecord={gameRecord}/>
            <Board arrSquares={squares} handleBtn={handleBtn}/>
            <MyContext.Provider value={{array: [1, 2]}}>
                <MyContext.Consumer>
                    {value => <Example array={value.array}/>}
                </MyContext.Consumer>
            </MyContext.Provider>
        </div>
    );
}

export default App;
