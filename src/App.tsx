import React from 'react';
import styles from './App.module.css';
import {CounterButtons} from "./components/CounterButtons/CounterButtons";
import {Counter} from "./components/Counter/Counter";

function App() {
    return (
        <div>
            <div className={styles.main}>
                <Counter/>
                <CounterButtons/>
            </div>
        </div>
    );
}

export default App;


