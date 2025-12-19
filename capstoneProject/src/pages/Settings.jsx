import logo from "../assets/logo.png";
import styles from '../styles/settings.module.css'
function Settings(){
    return(
        <>
            <nav>
                <img src={logo} alt="Magnolia Logo"/>
                <h1>Settings</h1>
                <p>EMAIL PLACEHOLDER</p>
            </nav>
            
            <h2> Accessibility: </h2>
            <div className={styles.accsub}>
                <p>Change Theme:</p>
                <button> Theme</button>
            </div>

            <h2>Account Settings:</h2>
            <div className={styles.set}>
                <p>Change Password:</p>
                
                
                <form>
                    <input type="Password" placeholder="********"/>
                    <button>Confirm</button>
                </form>
            </div>
        </>
    )
}

export default Settings