import { useState } from 'react'
import React from 'react'
import styles from './card.module.css'

function Card(p){
    const [img, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5rRfKjViZ_drNEJBOvW04s_cZtAoT8jC3kY43ebx58Cn2k0g:https://source.roboflow.com/sSaf7U5XWabfyJWH7ZuZTnMiQdw2/1M1SWs7dVZgX9CMetrSE/original.jpg&s');
    const [price, setPrice] = useState(69.99);
    const [name, setName] = useState('Nike Running Shoe');

    return(
        <>
            <img className={styles.img} src={img} alt="logo"/>

            <div className={styles.card_cont}>
                <h2> {name} </h2>

                <div className={styles.line}><h3 className={styles.but} id={styles.b1}> EU38 </h3> <h3 className={styles.but}> BLACK/WHITE</h3> </div>

                <p className='extra'> Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-net style. </p>

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

