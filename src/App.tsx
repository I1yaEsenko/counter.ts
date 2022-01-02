import React, {useState} from 'react';
import s from './style.module.css'
import './App.css';
import Field from "./components/Field";
import Buttons from "./components/Buttons";


function App() {
    // Создать переменные для оптимизации
    const startValue = 0;
    const endValue = 5;

    let [inc, setInc] = useState<number>(0)

    const incCounter = () => {
        setInc(inc => inc + 1)
    }

    const resetCounter = () => {
        setInc(0)
    }

    return (
        <div className={s.mainBody}>
            <Field value={inc} endValue={endValue}/>
            <Buttons value={inc} startValue={startValue} endValue={endValue} incCounter={incCounter} resetCounter={resetCounter}/>
        </div>
    );
}

export default App;
