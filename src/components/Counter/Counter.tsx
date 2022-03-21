import styles from "./Counter.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {AppStoreType} from "../redux/store";

export const Counter = () => {
    const counter = useSelector<AppStoreType, number>(state => state.counter.value)

    return (
        <div className={`${styles.counter} ${counter === 5 && styles.redNum}`}>
            {counter}
        </div>
    )
}