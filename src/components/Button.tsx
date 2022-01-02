import React from 'react';
import s from '../style.module.css'

type buttonPropsType = {
    name: string
    callback: () => void
    disabled:boolean
}

export const Button = ({name, callback, disabled}: buttonPropsType) => {



    return (
        <button onClick={callback} className={s.buttonClick} disabled={disabled}>
            {name}
        </button>
    )

};