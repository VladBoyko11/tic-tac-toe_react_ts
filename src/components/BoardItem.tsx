import React, {useEffect, useState} from "react";

type BoardItemProps = {
    item: string
    key: number
    index: number
    handleBtn: Function
}

const BoardItem = ({item, index, handleBtn}: BoardItemProps) => {
    const [toggleItem, setToggleItem] = useState(true)
    const handleBoardItem = (e: any) => {
        handleBtn(index)
        // if(item !== null) {
        //     debugger
        //     setToggleItem(false)
        // } else {
        //     setToggleItem(true)
        // }
    }

    useEffect(() => {
        if(item !== null) setToggleItem(false)
        else setToggleItem(true)
    }, [item])

    return <div className={`boardItem ${toggleItem ? 'boardItemCursorPointer' : ''}`} onClick={handleBoardItem}>{item}</div>
}

export default BoardItem