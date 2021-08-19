import React, {useState} from 'react'
import '../../App.css'
import Piece from '../players/piece'

const Box = (props) => {
    const {theme,currentTurn, setCurrentTurn,keyValue,moves,setMoves} = props
    const handleOnClick = (event) => {
        if (!moves[keyValue]){
            currentTurn === 'X' ? setCurrentTurn('0'): setCurrentTurn('X');
            setMoves({...moves,[parseInt(event.target.id)]:currentTurn});

        }
    }

    return <div onClick= {(event)=> handleOnClick(event)} className={ `box-${theme}` } id={keyValue}>
            <Piece text={moves[keyValue]}/>
        </div>
}

export default Box;