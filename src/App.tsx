import React, {useState} from 'react';
import styles from './App.module.css';
import {CounterButtons} from "./components/CounterButtons/CounterButtons";
import {Counter} from "./components/Counter/Counter";

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div className={styles.main}>
                <Counter counter={counter}/>
                <CounterButtons counter={counter} changeCounter={setCounter}/>
            </div>
        </div>
    );
}

export default App;


