import styles from "./Card2.module.css";
import { useState } from "react";
function Card2({na, cl, ex, gr}){
    const [name, setName] = useState(na);
    const [Class, setClass] = useState(cl);
    const [exam, setExam] = useState(ex);
    const [grade, setGrade] = useState(gr);

    const addGrade = () => {
        setGrade(grade + 1);
    }

    return (
        <div className={styles.card_container}>
            <p> Name: {name} </p>
            <p> Class: {Class} </p>
            <p> Exam: {exam}</p>
            <p className={styles.grade_font}> Grade: {grade} </p>
            <button onClick={addGrade}> Add Grade </button>
            {/* I must call the Card2 component to make sure it shows up */}
    </div>
    );
}

export default Card2;

