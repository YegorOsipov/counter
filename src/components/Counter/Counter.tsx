import styles from "./Counter.module.css";
import React from "react";

type CounterPropsType = {
    counter: number
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={`${styles.counter} ${props.counter === 5 && styles.redNum}`}>
            {props.counter}
        </div>
    )
}