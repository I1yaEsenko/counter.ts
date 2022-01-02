import React from 'react';
import s from '../style.module.css'
import {Button} from "./Button";

type ButtonsPropsType = {
    incCounter: () => void
    resetCounter: () => void
    value: number
    startValue: number
    endValue: number
}

const Buttons = ({incCounter, resetCounter, value, startValue, endValue}: ButtonsPropsType) => {
    const disabledButtonInc = () => value === endValue

    return (
        <div className={s.buttonsWrapper}>
            <Button name={'inc'} callback={incCounter} disabled={disabledButtonInc()}/>
            <Button name={'reset'} callback={resetCounter} disabled={false}/>
        </div>
    );
};

export default Buttons;