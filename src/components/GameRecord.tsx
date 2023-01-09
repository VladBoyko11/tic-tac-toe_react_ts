import React, {useEffect, useState} from "react";
import Board from "./Board";

type GameRecordProps = {
    name: string
    age: number
    gameRecord: {winnerX: number, winnerY: number}
}

const GameRecord = ({name, age, gameRecord}: GameRecordProps): JSX.Element => {

    return <div>
        <div>{name}</div>
        <div>{age}</div>
        <div>Game Record:</div>
        <div className='fs-3 fw-bold text-primary'>WinnerX: {gameRecord.winnerX}</div>
        <div className='fs-3 fw-bold text-primary'>WinnerY: {gameRecord.winnerY}</div>
    </div>
}

export default GameRecord