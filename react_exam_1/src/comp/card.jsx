import { useState } from 'react'
import React from 'react'
import styles from './card.module.css'

function Card(i){
    const [img, setImg] = useState(i);
    const [name, setName] = useState("Nike Air Max 270");
    const [price, setPrice] = useState(139.99);

    return(
        <>
            <img className={styles.img} src={img} alt="logo"/>

            <div className={styles.card_cont}>
                <h2> {name} </h2>

                

                <p> Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-net style. </p>

                <div className={styles.part}>
                    <div className={styles.leftPart}>
                        <p> PRICE </p>
                        <h1> ${price} </h1>
                    </div>
                    <div>
                    <button className={styles.addButton}> Add to Cart </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

