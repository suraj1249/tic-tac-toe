import "../../App.css";
import Box from '../box/box';
import React, { useEffect, useState } from "react";

const Board = ({setResult, setOpen,moves, setMoves,currentTurn,setCurrentTurn})=> {
    const [winner, setWinner] = useState(0);
    const possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    const checkWinner = () => {
        Object.keys(moves).length > 4 && possibleWins.forEach((scenario)=>{
                if (moves[scenario[0]]===moves[scenario[1]]&& moves[scenario[1]]===moves[scenario[2]]){
                    if(moves[scenario[0]]==='X'){
                        setResult('Congrations!!! Player X Won')
                        setOpen(true)
                    }else if(moves[scenario[0]]==='0'){
                        setResult('Congrations!!! Player 0 Won')
                        setOpen(true)
                    }
                }
                else if (Object.keys(moves).length===9){
                    setResult('Match Drawn!!!')
                    setOpen(true)
                }
        });
    }

    useEffect(()=> {
        checkWinner()    
    },[moves,winner])
    let key =0;
    const grid = Array(3).fill(0).map((i,rowNum)=>
        {
            return Array(3).fill(0).map((i,colNum)=>{
                let theme = 'light'
                if (rowNum%2===0){
                    theme = colNum%2===1? 'light' : "dark" 
                }else {
                    theme = colNum%2===0? 'light' : "dark" 
                }
                return <Box 
                            theme={theme} 
                            currentTurn={currentTurn} 
                            setCurrentTurn={setCurrentTurn}
                            moves={moves}
                            setMoves={setMoves}
                            keyValue={key}
                            key={key++}
                            setWinner={setWinner}
                        />
            }) 
        });
    return (<div className="board">
        {
            grid
        }
    </div>)
}

export default Board;