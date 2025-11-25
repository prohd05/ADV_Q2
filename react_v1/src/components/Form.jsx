
import { use, useState } from "react";
import styles from './form.module.css'
import illustration from '../assets/illustration.png'
import rand from '../assets/rand.png'
import google from '../assets/google.png'

function Form() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [ec, setEc] = useState("");
    const [pw, setPw] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();

        setEc("")
        setPw("")
        
    if (!email.includes("@") || password.length < 6){
         if (!email.includes("@")) {
            setEc("Email is invalid");
        }

        if (password.length < 6) {
            setPw("Password must be longer than 6 characters");
        }
    }
    else{
        console.log("Email: " + email + " Password:" + password);
    }
    };


    return (
        <div>
            <form>
                <div>
                <img id={styles.left} src={illustration} alt="bear"/>
                </div>
                
                <div id={styles.right}>
                <img src={rand} id={styles.logo} alt="Logo"/> 
                <h1> Login to your Account </h1>
                <p> See what is going on with your business</p>

                <br/>

                <button id={styles.google}> <img src={google} id={styles.gi}/> Continue with Google </button>

                <br/>

                <p id={styles.alt}> ------------- or Sign in with Email -------------  </p>
                <label className={styles.head}> Email </label> <br/>
                <input type="email" placeholder="mail@abc.com" name="email" onChange={(event) => setEmail(event.target.value)} />{" "};
                <br/> 
                <p className={styles.error}> {ec} </p>
                <br/> <br/>

                <label className={styles.head}> Password </label> <br/>
                <input type="password" placeholder="*****************" name="password" onChange={(event) => setPassword(event.target.value)} />{" "}
                <br/>
                <div id={styles.bottom}> <div id={styles.check}> <input type="checkbox" id={styles.cb}/><p id={styles.rm}> Remember Me </p> </div> <p id={styles.fp}> Forgot Password? </p> </div>
                <p className={styles.error}> {pw} </p>
                <br/> <br/>

                <button type="submit" onClick={submitFormHandler}> Login </button>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div id={styles.fb}> <p id={styles.nry}> Not Registered Yet? </p> <p id={styles.ca}> Create an account </p> </div>
                </div>
            </form>
        </div>
    );
}

export default Form;