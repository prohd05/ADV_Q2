import styles from "./card3.module.css";
function Card3(props){
    return(
        <div className={styles.card}>
            <img src={props.src} alt={props.alt}/>
            <p> {props.name} </p>
            <p> {props.desc} </p>
            <p> {props.price} </p>
        </div>
    )
}

export default Card3