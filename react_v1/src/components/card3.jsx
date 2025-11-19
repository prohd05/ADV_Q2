import styles from "./card3.mod.css"
function card3(props){
    return(
        <div className="card">
            <img src={props.src} alt={props.alt}/>
            <p> {props.name} </p>
            <p> {props.desc} </p>
            <p> {props.price} </p>
        </div>
    )
}

export default card3