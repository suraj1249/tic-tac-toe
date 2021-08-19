import "../../App.css"
const Piece = ({text}) => {
    return <div className={`piece_${text}`}>{text}</div>
}

export default Piece;