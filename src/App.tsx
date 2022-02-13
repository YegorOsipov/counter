import React, {useState} from 'react';
import styles from './App.module.css';

function App() {
    const [counter, setCounter] = useState(0);
    const changeCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.counter}>{counter}</div>
                <div className={styles.buttonsWrapper}>
                    {counter === 5 ?
                        <button className={styles.btnDisabled} disabled>inc</button> :
                        <button className={styles.btn} onClick={changeCounter}>inc</button>
                    }

                    {counter !== 5 ?
                        <button className={styles.btnDisabled}>reset</button> :
                        <button className={styles.btn}>reset</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
