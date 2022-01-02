import React from 'react';
import s from '../style.module.css'

type FieldPropsType = {
    value: number
    endValue: number
}

const Field = ({value, endValue}: FieldPropsType) => {
    return (
        <div className={s.mainField}>
            <div className={value === endValue ? s.number + ' ' + s.red : s.number}>
                {value}
            </div>
        </div>
    );
};

export default Field;