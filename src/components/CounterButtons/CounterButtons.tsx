import React from "react";
import styles from "./CounterButtons.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../redux/store";
import {changeCounterAC, resetCounterAC} from "../redux/reducer/CounterReducer";

export const CounterButtons = () => {
    const counter = useSelector<AppStoreType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const changeCounter = (counter: number) => dispatch(changeCounterAC(counter))
    const resetCounter = () => dispatch(resetCounterAC())
    return (
        <div className={styles.buttonsWrapper}>
            {
                counter === 5 ?
                <button className={styles.btnDisabled} disabled>inc</button> :
                <button className={styles.btn} onClick={() => changeCounter(counter)}>inc</button>
            }

            {
                counter !== 5 ?
                <button className={styles.btnDisabled} disabled>reset</button> :
                <button className={styles.btn} onClick={resetCounter}>reset</button>
            }
        </div>
    )
}