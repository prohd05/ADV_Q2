import styles from './navbar.module.css'
import { House, UserRoundPen, FolderKanban, Contact } from 'lucide-react';


function navbar(){
    return(
        <nav> 
            <p> Merques Enoe </p>
            <ul> 
                <li> <House/> Home </li>
                <li> <UserRoundPen/> About me </li>
                <li> <FolderKanban/> Projects </li>
                <li> <Contact/> Contacts </li>
            </ul>
        </nav>
    )
}

export default navbar;