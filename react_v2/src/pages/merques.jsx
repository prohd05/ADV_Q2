import Merques from '../assets/merques.jpg'
import styles from '../styles/groupPages.module.css'
function student1(){
    return(
        <>
            <h1> About Merques Enoe </h1>
            <img src={Merques} alt="Merques Photo"/>
            <p className={styles.lore}> lore </p>
        </>
    )
}
export default student1