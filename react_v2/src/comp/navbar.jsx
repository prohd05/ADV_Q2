import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.css"
function navbar(){
    return(
        <>
            <nav className={styles.nav}>
                <p> Merques & Bryan </p>
                <ul> 
                   <li> <Link to="/merques"> About Merques </Link> </li> 
                    <li> <Link to="/bryan"> About Bryan </Link> </li> 
                    <li> <Link to="/goals"> Goals </Link> </li> 
                </ul>
            </nav>
        </>
    )
}

export default navbar