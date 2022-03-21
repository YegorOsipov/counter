import React from "react";
import styles from "./CounterButtons.module.css"

type CounterButtonsPropsType = {
    counter: number
    changeCounter: (n: number) => void
}
export const CounterButtons = (props: CounterButtonsPropsType) => {
    const changeCounter = () => props.changeCounter(props.counter + 1);
    const resetCounter = () => props.changeCounter(0);
    return (
        <div className={styles.buttonsWrapper}>
            {
                props.counter === 5 ?
                <button className={styles.btnDisabled} disabled>inc</button> :
                <button className={styles.btn} onClick={changeCounter}>inc</button>
            }

            {
                props.counter !== 5 ?
                <button className={styles.btnDisabled} disabled>reset</button> :
                <button className={styles.btn} onClick={resetCounter}>reset</button>
            }
        </div>
    )
}