import React  from "react";
import "../../App.css"
import Board from "../board/board"

const Border = ({payload}) => {

    return (
        <div className="border">
            <Board/>
        </div>
    )
};

export default Border;