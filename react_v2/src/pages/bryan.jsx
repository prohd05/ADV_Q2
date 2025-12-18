import styles from '../styles/groupPages.module.css'
import Bryan from '../assets/bryan.png'
function student2(){
    return(
        <>
            <h1> About Bryan Alves </h1>
            <img src={Bryan} alt="Student 2 Photo"/>
            <p className={styles.lore}> lore </p>
        </>
    )
}
export default student2