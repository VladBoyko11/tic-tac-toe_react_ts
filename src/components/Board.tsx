import React from "react";
import './Board.css'
import BoardItem from "./BoardItem";

type BoardProps = {
    arrSquares: any[]
    handleBtn: Function
}

const Board = ({arrSquares, handleBtn}: BoardProps) => {
    return <div className='container bg-warning h-50 d-flex flex-wrap p-0 board'>{arrSquares.map((item, index) => {
        return <BoardItem item={item} key={index} index={index} handleBtn={handleBtn}/>
    })}</div>
}
export default Board